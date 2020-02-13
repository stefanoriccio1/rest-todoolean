// alert('ciao');
$(document).ready(function(){
  $.ajax({
    url: "http://157.230.17.132:3031/todos",
    method: "GET",
    // data: {
    // "email": "fabio@boolean.careers" },
    success: function (data) {
      var toDo = data;
      for (var i = 0; i < toDo.length; i++) {
        console.log(toDo[i]);
      }
     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
    });

    $.ajax({
      url: "http://157.230.17.132:3031/todos",
      method: "POST",
      data: {
      "fatto": "sì" },
      success: function (data) {
        console.log(data);
       },
      error: function (richiesta, stato, errori) {
         alert("E' avvenuto un errore. " + errore); }
      });

     getdata(prompt('dammi il tuo nome'));
});

function getdata(nomeUtente){
$.ajax({
  url: "http://157.230.17.132:3031/todos",
  method: "POST",
  data: {
  "nome": nomeUtente,
  "fatto": "sì" },
  success: function (data) {
    console.log(data);
   },
  error: function (richiesta, stato, errori) {
     alert("E' avvenuto un errore. " + errore); }
  });
};
