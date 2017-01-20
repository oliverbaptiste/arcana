var App = {
  data: {
    glyphs: [
      "🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮",
      "🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾",
      "🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎",
      "🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞"
    ],
    pips: [
      "♠", // Spades
      "♥", // Hearts
      "♦", // Diamonds
      "♣"  // Clubs
    ],
    ranks: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Knight",
      "Queen",
      "King"
    ],
    suits: [
      "Spades",
      "Hearts",
      "Diamonds",
      "Clubs"
    ],
    arcanaRanks: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Page",
      "Knight",
      "Queen",
      "King"
    ],
    arcanaSuits: [
      "Wands",
      "Pentacles",
      "Cups",
      "Swords"
    ],
    arcanaTrumps: [
      "0 – The Fool",
      "I – The Magician",
      "II – The High Priestess",
      "III – The Empress",
      "IV – The Emperor",
      "V – The Hierophant",
      "VI – The Lovers",
      "VII – The Chariot",
      "VIII – Justice",
      "IX – The Hermit",
      "X – Wheel of Fortune",
      "XI – Strength",
      "XII – The Hanged Man",
      "XIII – Death",
      "XIV – Temperance",
      "XV – The Devil",
      "XVI – The Tower",
      "XVII – The Star",
      "XVIII – The Moon",
      "XIX – The Sun",
      "XX – Judgement",
      "XXI – The World"
    ]
  },
  makeCardNames: function(rank, suit){
    var i, j;
    var deck = [];
    for (i = 0; i < suit.length; i++) {
      for (j = 0; j < rank.length; j++) {
        deck.push(rank[j] + " of " + suit[i]);
      }
    }
    return deck;
  },
  renderCards: function() {
    var ranks = this.data.ranks;
    var suits = this.data.suits;
    var cardNames = this.makeCardNames(ranks, suits);
    for (i = 0; i < cardNames.length; i++) {
      $('.container').append(
        '<li><i>' +
        this.data.glyphs[i] +
        '</i><span>' + cardNames[i] +
        '</span></li>'
      );
    }
  },
  init: function(){
    console.log(App.data.glyphs);
    console.log(App.makeCardNames(App.data.ranks, App.data.suits));
    console.log(
      App.makeCardNames(App.data.arcanaRanks,App.data.arcanaSuits)
    );
    App.renderCards();
  }
};

App.init();
