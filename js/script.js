// alert('ciao');
$(document).ready(function(){
 deleteData(prompt('dammi ID da eliminare'));
});
function getData(){
  $.ajax({
    url: "http://157.230.17.132:3031/todos",
    method: "GET",
    // data: {
    // "email": "fabio@boolean.careers" },
    success: function (data) {
      var toDo = data;
      for (var i = 0; i < toDo.length; i++) {
        console.log(toDo[i]);
        toDo[0].push(getdata(prompt('dammi il tuo nome')))
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
    "nome": nomeUtente,
    "fatto": "sì" },
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
      console.log(data);
     },
    error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore); }
    });
};
