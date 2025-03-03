// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

// Milestone 2
// - Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// - Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina

// //Milestone 3
// - Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione
// - Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

$(document).ready(function(){
  $('.send_text').click(function() {
    send_message();
    computer_response();
  });

  $('.send_container input').keypress(function(event) {
    if(event.which == 13){
      send_message();
      computer_response();
    }
  });

  $('.riquadro input').keyup(function() {
    //salvo il valore dell'input
    var search_name = $(this).val();
    //valore di reset per tornare al punto di partenza
    $('.contact').show();
    //se il valore è maggiore di zero
    if (search_name.length > 0){
      //a tutti gli span con classe .name
      $('.name_container .name').each(function(){
        //se this non è incluso nel valore
        if($(this).text().toLowerCase().includes(search_name.toLowerCase()) == false){
          //con la funzione closest andiamo a prendere il padre di $(this) e non lo mostri
          $(this).closest('.contact').hide();
        }
      })
    }
  })


//funzione per invio dei messaggi
  function send_message(){
    //salvo il valore dell'elemento presente nell'input
    var message = $('.send_container input').val();
    console.log(message);
    //faccio un clone del contenitori dei messaggi e gli tolgo la classe template
    var copia = $('.message_container.template').clone().removeClass('template');

    copia.children('.message_template').addClass('my_text').append('<span class="text">'+ message + '</span>').append('<span class="menu_container"><i class="fas fa-chevron-down"></i></span>').append('<div class="delete_menu invisible"><div class="info">Info Messaggio</div> <div class="delete">Cancella Messaggio</div></div>');

    $('.real_message_container').append(copia);
  }
  //funzione per la risposta del computer dopo 1 secondo
  function computer_response(){
    setTimeout(function() {
      //salvo il valore dell'elemento presente nell'input
      var message = $('.send_container input').val();
      console.log(message);
      //faccio un clone del contenitori dei messaggi e gli tolgo la classe template
      var copia = $('.message_container.template').clone().removeClass('template');

      copia.children('.message_template').addClass('computer_message').append('<span class="text">Ok</span>').append('<span class="menu_container"><i class="fas fa-chevron-down"></i></span>').append('<div class="delete_menu invisible"><div class="info">Info Messaggio</div> <div class="delete">Cancella Messaggio</div></div>');

      $('.real_message_container').append(copia);
    },1000)
  }

  //intercetto il click sul div contact
      $('.contact').click(function(){
  // recupero il nome del contatto cliccato
      var contact_name = $(this).find('.contact_name .name_container h4').text();
      console.log(contact_name);
  //sostiuisco il testo del nome corrente con quello cliccato
      $('.name_container_current h4').text(contact_name);
      // recupero l'immagine del contatto cliccato
      var contact_img = $(this).find('.img_friend').children('img').attr('src');
    // sostituisco l'immagine correte con quella del contatto cliccato
      $('.img_friend_current').children('img').attr('src', contact_img);
    //recupero orario ultimo messaggio
      var time = $(this).find('.contact_name .name_container span').text();
    //e lo sostituisco allo small dell'ultimo accesso
      $('.name_container_current small').text('Ultimo accesso oggi alle  ' + time);

    });


// intercetto il click sull'icona e uso (document).on per intercettare il click anche dei messaggi inviati successivamente al caricamento della pagina
  $(document).on('click','.menu_container i', function(){
    $(this).closest('.menu_container').siblings('.delete_menu').toggleClass('invisible');
  });
//intercetto il click su 'Cancella Messaggio' e faccio sparire il
  $(document).on('click','.delete', function(){
    $(this).closest('.message_container').children('.message_template').html('<p>-----Hai eliminato questo messaggio!!-----</p>');
    $('.delete_menu').hide();
  });

  //Creo varie conversazioni
  conversazione_0 = [
    {
      'text' : 'Come stai?',
      'class': 'computer_message'
    },
    {
      'text' : 'Tutto bene,tu?',
      'class': 'my_text'
    },
    {
      'text' : 'Bene, ci vediamo oggi per un caffè?',
      'class':  'computer_message'
    },
    {
      'text' : 'Ovvio, ci vediamo per le tre e mezza al solito bar ! :D',
      'class':  'computer_message',
    }
  ];

  conversazione_1 = [
    {
      'text' : 'Oooooo ma allora stasera ci sei per un calcetto?',
      'class': 'computer_message'
    },
    {
      'text' : 'Nono macchè stasera non posso, scusami !! ',
      'class': 'my_text'
    }
  ];

  conversazione_2 = [];
  conversazione_3 = [];
  conversazione_4 = [];
  conversazione_5 = [];
  conversazione_6 = [];
  conversazione_7 = [];
  conversazione_8 = [];

  //creo un array contenente tutte le conversazioni

  conversazioni = [
    conversazione_0,
    conversazione_1,
    conversazione_2,
    conversazione_3,
    conversazione_4,
    conversazione_5,
    conversazione_6,
    conversazione_7,
    conversazione_8

  ];

})
