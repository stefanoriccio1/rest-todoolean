// alert('ciao');
$(document).ready(function(){
  printData()

  $('#insert').click(function(){
    var input = $('#achievment').val();
    postData(input);
  });

  $('#achievment').keypress(function(event){
   if(event.which == 13){
     var input = $('#achievment').val();
     postData(input);
   }
  });

  $(document).on('click', '.delete', function(){
    var thisButton = $(this);
    var idNumber = thisButton.parent().attr('data-id');

    deleteData(idNumber);
  });

  $(document).on('click', '.modify', function(){
    var thisElement = $(this);
    var updatedElement = thisElement.siblings().val();
    var idNumberNew = thisElement.parent().parent().attr('data-id');

    updateData(idNumberNew, updatedElement);
  });

    $(document).on('keypress', '.modifica_testo', function(event){
   if(event.which == 13){
     var thisElement = $(this);
     var updatedElement = thisElement.val();
     var idNumberNew = thisElement.parent().parent().attr('data-id');

     updateData(idNumberNew, updatedElement);
   }
  });
});

// FUNCTIONS------------->

// funzione per stampare i dati
function printData (){
  $.ajax({
    url: "http://157.230.17.132:3031/todos",
    method: "GET",
    success: function (data) {
      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);

      for (var i = 0; i < data.length; i++) {
        var toDo = data[i];
        var context = {
          text: toDo.text,
          id: toDo.id,
        };
        var html = template(context);
        $('.todolist').append(html);
      }
     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
    });
};

// funzione per chiamare i dati
function getData(){
  $.ajax({
    url: "http://157.230.17.132:3031/todos",
    method: "GET",
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var toDo = data[i];
        console.log(toDo);
      }
     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
    });
}

// funzione per pushare i dati
function postData(value){
  $.ajax({
    url: "http://157.230.17.132:3031/todos",
    method: "POST",
    data: {
      text: value,
     },
    success: function (data) {
      emptyFields();
      printData();
     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
  });
};

// funzione per elminiare i dati
function deleteData(id){
  $.ajax({
    url: "http://157.230.17.132:3031/todos/" + id,
    method: "DELETE",
    success: function (data) {
      emptyFields();
      printData();
     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
    });
};

// funzione per svuotare i campi
function emptyFields(){
  $('#achievment').val('');
  $('.todolist').html('');
  $('.modifica_testo').val('');
}

// funzione di update

function updateData(id, val){
  $.ajax({
    url: "http://157.230.17.132:3031/todos/" + id,
    method: "PATCH",
    data: {
      text: val,
     },
    success: function (data) {
      if (val != ''){
        emptyFields();
        printData();
      }
     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
  });
};
