// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

//quando clicco il bottone
$('.send_text').click(function() {
  //salvo il valore del messaggio scritto in una variabile
  var message = $('.input_container input').val();
  //faccio una copia del div nascosto
  var copia = $('.message_container.template').clone();
  //gli rimuovo la classe
  copia.removeClass('template');
  //setto l'html con il messaggio scritto nel div figlio del div template e aggiungo la classe my_text
  copia.children('.message_template').html('<p>'+ message +'</p>').addClass('my_text');
  //appendo il tutto al contenitore reale dove verrà aggiunto il div creato
  $('.real_message_container').append(copia);
  //imposto l'input a zero
  message = $('.input_container input').val('');
  //MILESTONE B:
  //creo una funzione setTimceout
  setTimeout(function(){
    //creo una seconda copia del div nascostso
     var copia_computer = $('.message_container.template').clone();
     //Gli rimuovo la classe
     copia_computer.removeClass('template');
     //setto l'html con il messaggio scritto nel div figlio e gli aggiungo la classe apposita per il computer
     copia_computer.children('.message_template').html('<p> Ciao </p>').addClass('computer_message');
     //appendo tutto al container reale
     $('.real_message_container').append(copia_computer);
  }, 1000);//parirà 1 secondo dopo aver scritto il messaggio

})
