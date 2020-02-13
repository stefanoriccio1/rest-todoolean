// alert('ciao');
$(document).ready(function(){
getData()
});
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
