var App = {
  DATA: {
    GLYPHS: [
      '🂡','🂢','🂣','🂤','🂥','🂦','🂧','🂨','🂩','🂪','🂫','🂬','🂭','🂮',
      '🂱','🂲','🂳','🂴','🂵','🂶','🂷','🂸','🂹','🂺','🂻','🂼','🂽','🂾',
      '🃁','🃂','🃃','🃄','🃅','🃆','🃇','🃈','🃉','🃊','🃋','🃌','🃍','🃎',
      '🃑','🃒','🃓','🃔','🃕','🃖','🃗','🃘','🃙','🃚','🃛','🃜','🃝','🃞',
      '🃠','🃡','🃢','🃣','🃤','🃥','🃦','🃧','🃨','🃩','🃪',
      '🃫','🃬','🃭','🃮','🃯','🃰','🃱','🃲','🃳','🃴','🃵',
      '🂿','🃏','🃟',
      '🂠'
    ],
    RANKS: [
      [ 'A', 'Ace', 'One' ],
      [ '2', 'Deuce', 'Two' ],
      [ '3', 'Three' ],
      [ '4', 'Four' ],
      [ '5', 'Five' ],
      [ '6', 'Six' ],
      [ '7', 'Seven' ],
      [ '8', 'Eight' ],
      [ '9', 'Nine' ],
      [ '10', 'Ten' ],
      [ 'J', 'Jack', 'Page' ],
      [ 'C', 'Knight' ],
      [ 'Q', 'Queen' ],
      [ 'K', 'King' ]
    ],
    SUITS: [
      [ 'Spades', '♠', 'black', 'Swords' ],
      [ 'Hearts', '♥', 'red', 'Cups' ],
      [ 'Diamonds', '♦', 'red', 'Pentacles' ],
      [ 'Clubs', '♣', 'black', 'Wands' ]
    ],
    TRUMPS: [
      [ '', 'The Fool', 'The Fool' ],
      [ 'I', 'Individual', 'The Magician' ],
      [ 'II', 'Childhood', 'The High Priestess' ],
      [ 'III', 'Youth', 'The Empress' ],
      [ 'IV', 'Maturity', 'The Emperor' ],
      [ 'V', 'Old Age', 'The Hierophant' ],
      [ 'VI', 'Morning', 'The Lovers' ],
      [ 'VII', 'Afternoon', 'The Chariot' ],
      [ 'VIII', 'Evening', 'Strength' ],
      [ 'IX', 'Night', 'The Hermit' ],
      [ 'X', 'Earth and Air', 'Wheel of Fortune' ],
      [ 'XI', 'Water and Fire', 'Justice' ],
      [ 'XII', 'Dance', 'The Hanged Man' ],
      [ 'XIII', 'Shopping', 'Death' ],
      [ 'XIV', 'Open Air', 'Temperance' ],
      [ 'XV', 'Visual Arts', 'The Devil' ],
      [ 'XVI', 'Spring', 'The Tower' ],
      [ 'XVII', 'Summer', 'The Star' ],
      [ 'XVIII', 'Autumn', 'The Moon' ],
      [ 'XIX', 'Winter', 'The Sun' ],
      [ 'XX', 'The Game', 'Judgement' ],
      [ 'XXI', 'Collective', 'The World' ]
    ]
  },
  bindEvents: function() {
    $('#all-backs').on('click', function() {
      $('.card').removeClass('flipped');
    });
    $('#all-faces').on('click', function() {
      $('.card').addClass('flipped');
    });
  },
  generateDeck: function() {
    console.log('App.generateDeck() invoked.');
    console.log('Deck type: 78-card Arcana.');
    var d = this.DATA;
    var deck = [];
    for (s = 0; s < d.SUITS.length; s++) {
      for (r = 0; r < d.RANKS.length; r++) {
        var minorArcanaCard = {};
        minorArcanaCard.color = d.SUITS[s][2];
        minorArcanaCard.rank = d.RANKS[r][1];
        minorArcanaCard.suit = d.SUITS[s][0];
        if (r < 10) {
          minorArcanaCard.type = 'pip';
        } else {
          minorArcanaCard.type = 'court';
        }
        console.log('Pushing Minor Arcana card to deck.');
        deck.push(minorArcanaCard);
      }
    }
    for (t = 0; t < d.TRUMPS.length; t++) {
      var trumpCard = {};
      trumpCard.rank = d.TRUMPS[t][0];
      trumpCard.theme = d.TRUMPS[t][1];
      trumpCard.type = 'trump';
      trumpCard.suit = 'trump';
      console.log('Pushing Trump card to deck.');
      deck.push(trumpCard);
    }
    return deck;
  },
  renderDeck: function(deck) {
    console.log('App.renderDeck() invoked.');
    var d = [];
    deck.forEach(function(e) {
      if (e.type === 'trump') {
        if (e.rank) {
          d.push(e.rank + ' ' + e.theme);
        } else {
          d.push(e.theme);
        }
      } else {
        d.push(e.rank + ' of ' + e.suit);
      }
    });
    d.forEach(function(e, i) {
      var newDiv = document.createElement('div');
      var newClassName = 'card ' + deck[i].suit;
      newDiv.setAttribute('class', newClassName.toLowerCase());
      var newDiv2 = document.createElement('div');
      var newP = document.createElement('p');
      var newCardName = document.createTextNode(e);
      var newGlyph = document.createTextNode(App.DATA.GLYPHS[i]);
      newP.appendChild(newCardName);
      newDiv2.appendChild(newGlyph);
      newDiv2.setAttribute('class','glyph');
      document.body.appendChild(newDiv);
      newDiv.appendChild(newDiv2);
      newDiv.appendChild(newP);
      newDiv.addEventListener('click', function() {
        $(this).toggleClass('flipped');
      });
    });
  },
  init: function() {
    console.log('App.init() invoked.');
    var myDeck = App.generateDeck();
    App.renderDeck(myDeck);
    App.bindEvents();
  }
};
App.init();
