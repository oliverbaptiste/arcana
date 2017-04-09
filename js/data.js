var data = {
  glyphs: [
    [ "🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂬","🂭","🂮" ], // spades
    [ "🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂼","🂽","🂾" ], // hearts
    [ "🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃌","🃍","🃎" ], // diamonds
    [ "🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃜","🃝","🃞" ], // clubs
    [ "🃠","🃡","🃢","🃣","🃤","🃥","🃦","🃧","🃨","🃩","🃪","🃫","🃬","🃭","🃮","🃯","🃰","🃱","🃲","🃳","🃴","🃵" ], // trumps
    [ "🂿","🃏","🃟" ], // jokers
    [ "🂠" ] // back
  ],
  ranks: [
    {
      name: {
        standard: "Ace"
      },
      symbol: {
        standard: "A",
        nouveau: "1",
      },
      type: "pip"
    },
    {
      name: {
        standard: "Deuce",
        tarot: "Two"
      },
      symbol: {
        standard: "2"
      },
      type: "pip",
    },
    {
      name: {
        standard: "Three"
      },
      symbol: {
        standard: "3"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Four"
      },
      symbol: {
        standard: "4"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Five"
      },
      symbol: {
        standard: "5"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Six"
      },
      symbol: {
        standard: "6"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Seven"
      },
      symbol: {
        standard: "7"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Eight"
      },
      symbol: {
        standard: "8"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Nine"
      },
      symbol: {
        standard: "9"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Ten"
      },
      symbol: {
        standard: "10"
      },
      type: "pip"
    },
    {
      name: {
        standard: "Jack",
        tarot: "Page"
      },
      symbol: {
        standard: "J"
      },
      type: "court"
    },
    {
      name: {
        standard: "Knight"
      },
      symbol: {
        standard: "C"
      },
      type: "court"
    },
    {
      name: {
        standard: "Queen"
      },
      symbol: {
        standard: "Q"
      },
      type: "court"
    },
    {
      name: {
        standard: "King"
      },
      symbol: {
        standard: "K"
      },
      type: "court"
    }
  ],
  suits: [
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
  trumps: [
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
