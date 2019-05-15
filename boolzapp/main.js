// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde
// Milestone 2
// - Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// - Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

//quando clicco il bottone
$('.send_text').click(function() {
  send_message();
  computer_response();
})

//quando clicco il tasto invio mando il messaggio e avrò la risposta del computer
$('.input_container input').keypress(function(event){
  if(event.which == 13){
    send_message();
    computer_response();
  }
});
//pl
$('.search_container input').keyup(function(event){
  //salvo il valore dell'input
  var search_name = $('.search_container input').val();
  //se il valore è maggiore di zero
    if (search_name.length > 0){
      //a tutti gli h3
      $('.amico_container .nome_amico h3').each(function(){
      //se this non è incluso nel valore
        if($(this).text().toLowerCase().includes(search_name.toLowerCase()) == false){
          //cnon lo mostri
          $(this).parent().parent().hide();
          }
        })
      }
    });



//funzione per mandare messaggio
function send_message(){
  var message = $('.input_container input').val();
  //se il  messaggio è maggiore di zero
  if(message.length > 0){
    //faccio una copia del div nascosto
    var copia = $('.message_container.template').clone();
    //gli rimuovo la classe
    copia.removeClass('template');
    //setto l'html con il messaggio scritto nel div figlio del div template e aggiungo la classe my_text
    copia.children('.message_template').html( message).addClass('my_text');
    //appendo il tutto al contenitore reale dove verrà aggiunto il div creato
    $('.real_message_container').append(copia);
    //imposto l'input a zero
    message = $('.input_container input').val('');
  }

}

//funzione per la risposta del computer
function computer_response(){
  setTimeout(function(){
    //creo una seconda copia del div nascostso
     var copia_computer = $('.message_container.template').clone();
     //Gli rimuovo la classe
     copia_computer.removeClass('template');
     //setto l'html con il messaggio scritto nel div figlio e gli aggiungo la classe apposita per il computer
     copia_computer.children('.message_template').html('Ciao').addClass('computer_message');
     //appendo tutto al container reale
     $('.real_message_container').append(copia_computer);
  }, 1000);//parirà 1 secondo dopo aver scritto il messaggio
}
