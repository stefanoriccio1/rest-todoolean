// alert('ciao');
$(document).ready(function(){
printData()
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
          text: toDo.text
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
function postData(nomeUtente){
  $.ajax({
    url: "http://157.230.17.132:3031/todos",
    method: "POST",
    data: {
     },
    success: function (data) {
      console.log(data);
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

     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
    });
};
