var DATA = {
  CARD_GLYPHS: {
    spades:   [ "🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮" ],
    hearts:   [ "🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾" ],
    diamonds: [ "🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎" ],
    clubs:    [ "🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞" ],
    trumps:   [ "🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵" ],
    jokers:   [ "🂿","🃏","🃟" ],
    cardBack: "🂠"
  },
  RANKS: [
    {
      courtCard: {
        {
          standard: "Jack",
          symbol: "J",
          tarot: "Page"
        },
        {
          standard: "Knight",
          symbol: "C",
          tarot: "Knight"
        },
        {
          standard: "Queen",
          symbol: "Q",
          tarot: "Queen"
        },
        {
          standard: "King",
          symbol: "K"
          tarot: "King"
        }
      }
    },
    {
      pipCard: {
        {
          name: "Ace"
          symbol: {
            standard: "A",
            nouveau: "1"
          }
        },
        {
          name: "Two"
          symbol: "2"
        },
        {
          name: "Three"
          symbol: "3"
        },
        {
          name: "Four"
          symbol: "4"
        },
        {
          name: "Five"
          symbol: "5"
        },
        {
          name: "Six"
          symbol: "6"
        },
        {
          name: "Seven"
          symbol: "7"
        },
        {
          name: "Eight"
          symbol: "8"
        },
        {
          name: "Nine"
          symbol: "9"
        },
        {
          name: "Ten"
          symbol: "10"
        },
      }
    }
  ],
  SUITS: [
    {
      standard: {
        name: "Spades",
        pip: "♠",
        color: "black"
      },
      tarot: { name: "Swords"}
    },
    {
      standard: {
        name: "Hearts",
        pip: "♥",
        color: "red"
      },
      tarot: { name: "Cups" }
    },
    {
      standard: {
        name: "Diamonds",
        pip: "♦",
        color: "red"
      },
      tarot: { name: "Pentacles" }
    },
    {
      standard: {
        name: "Clubs",
        pip: "♣",
        color: "black"
      },
      tarot: { name: "Wands" }
    }
  ],
  TRUMPS:  [
    {
      nouveau: "The Fool",
      waite: "The Fool",
      numeral: ""
    },
    {
      waite: "The Magician",
      nouveau: "Individual",
      numeral: "I"
    },
    {
      waite: "The High Priestess",
      nouveau: "Childhood",
      numeral: "II"
    },
    {
      waite: "The Empress",
      nouveau: "Youth",
      numeral: "III"
    },
    {
      waite: "The Emperor",
      nouveau: "Maturity",
      numeral: "IV"
    },
    {
      waite: "The Hierophant",
      nouveau: "Old Age",
      numeral: "V"
    },
    {
      waite: "The Lovers",
      nouveau: "Morning",
      numeral: "VI"
    },
    {
      waite: "The Chariot",
      nouveau: "Afternoon",
      numeral: "VII"
    },
    {
      waite: "Strength",
      nouveau: "Evening",
      numeral: "VIII"
    },
    {
      waite: "The Hermit",
      nouveau: "Night",
      numeral: "IX"
    },
    {
      waite: "Wheel of Fortune",
      nouveau: "Earth and Air",
      numeral: "X"
    },
    {
      waite: "Justice",
      nouveau: "Water and Fire",
      numeral: "XI"
    },
    {
      waite: "The Hanged Man",
      nouveau: "Dance",
      numeral: "XII"
    },
    {
      waite: "Death",
      nouveau: "Shopping",
      numeral: "XIII"
    },
    {
      waite: "Temperance",
      nouveau: "Open Air",
      numeral: "XIV"
    },
    {
      waite: "The Devil",
      nouveau: "Visual Arts",
      numeral: "XV"
    },
    {
      waite: "The Tower",
      nouveau: "Spring",
      numeral: "XVI"
    },
    {
      waite: "The Star",
      nouveau: "Summer",
      numeral: "XVII"
    },
    {
      waite: "The Moon",
      nouveau: "Autumn",
      numeral: "XVIII"
    },
    {
      waite: "The Sun",
      nouveau: "Winter",
      numeral: "XIX"
    },
    {
      waite: "Judgement",
      nouveau: "The Game",
      numeral: "XX"
    },
    {
      waite: "The World",
      nouveau: "Collective",
      numeral: "XXI"
    }
  ]
};
