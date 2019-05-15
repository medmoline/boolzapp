// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

//quando clicco il bottone
$('.send_text').click(function() {
  //salvo il valore del messaggio scritto in una variabile
  var message = $('.input_container input').val();
  console.log(message);
  //faccio una copia del div nascosto
  var copia = $('.message_container.template').clone();
  console.log(copia);
  //gli rimuovo la classe
  copia.removeClass('template');
  console.log(copia);
  //setto l'html con il messaggio scritto nel div figlio del div template
  copia.children('.message_template').html('<p class="my_text">'+ message +'</p>');
  console.log(copia);
  //appendo il tutto al contenitore reale dove verrà aggiunto il div creato
  $('.real_message_container').append(copia);
  //imposto l'input a zero 
  message = $('.input_container input').val('')
})
