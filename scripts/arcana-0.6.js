// ARCANA v0.6
// © 2023 Oliver G. A. Baptiste
const arcana = {
  createDeck: function (
    suitType = "french",
    includeKnights = true,
    includeMajorArcana = true,
    jokers = 3,
    strippedCards = [],
    strippedRanks = []
  ) {
    console.log("\n=> `arcana.createDeck()` invoked!");
    const cards = [];
    const d = this.DATA;
    d.minor.suits[suitType].forEach((suit) => {
      d.minor.ranks.forEach((rank, i) => {
        if (
          rank.index !== "C" ||
          (rank.index === "C" && includeKnights === true)
        ) {
          let card = {
            code: `${suit.code}${rank.code}`,
            rank: rank,
            suit: {
              symbol: suit.symbol,
              name: suit.name,
            },
            glyph: suit.cardGlyphs[i],
            cardType: "minor",
          };
          cards.push(card);
        }
      });
    });
    if (includeMajorArcana) {
      d.major.forEach((card) => {
        card.cardType = "major";
        cards.push(card);
      });
    }
    if (jokers) {
      d.jokers.forEach((card) => {
        card.cardType = "joker";
        cards.push(card);
      });
    }
    if (strippedRanks === undefined || strippedRanks.length === 0) {
      // TODO
    }
    if (strippedCards === undefined || strippedCards.length === 0) {
      // TODO
    }
    return cards;
  },
  DATA: {
    minor: {
      suits: {
        french: [
          { 
            code: "s",
            index: ["\u{2660}", "\u{2664}"],
            name: { en: "Spades", fr: "Piques" },
            cardGlyphs: [
              "🃑",
              "🃒",
              "🃓",
              "🃔",
              "🃕",
              "🃖",
              "🃗",
              "🃘",
              "🃙",
              "🃚",
              "🃛",
              "🃜",
              "🃝",
              "🃞",
            ],
          },
          {
            code: "h",
            index: ["\u{2665}", "\u{2661}"],
            name: { en: "Hearts", fr: "Cœurs" },
            cardGlyphs: [
              "🃁",
              "🃂",
              "🃃",
              "🃄",
              "🃅",
              "🃆",
              "🃇",
              "🃈",
              "🃉",
              "🃊",
              "🃋",
              "🃌",
              "🃍",
              "🃎",
            ],
          },
          {
            code: "d",
            index: ["\u2666", "\u2662"],
            name: { en: "Diamonds", fr: "Carreaux" },
            cardGlyphs: [
              "🂱",
              "🂲",
              "🂳",
              "🂴",
              "🂵",
              "🂶",
              "🂷",
              "🂸",
              "🂹",
              "🂺",
              "🂻",
              "🂼",
              "🂽",
              "🂾",
            ],
          },
          {
            code: "c",
            index: ["\u2663", "\u2667"],
            name: { en: "Clubs", fr: "Trèfles" },
            cardGlyphs: [
              "🂡",
              "🂢",
              "🂣",
              "🂤",
              "🂥",
              "🂦",
              "🂧",
              "🂨",
              "🂩",
              "🂪",
              "🂫",
              "🂬",
              "🂭",
              "🂮",
            ],
          },
        ],
        latin: [
          {
            code: "s",
            name: {
              en: "swords",
              es: "espadas",
              fr: "épée",
              it: "spade",
            },
          },
          {
            code: "h",
            name: {
              en: "cups",
              es: "copas",
              fr: "coupe",
              it: "coppe",
            },
          },
          {
            code: "d",
            name: {
              en: ["coins", "pentacles"],
              es: "oros",
              fr: "denier",
              it: "denari",
            },
          },
          {
            code: "c",
            name: {
              en: ["clubs", "wands"],
              es: "bastos",
              fr: "bâton",
              it: "bastoni",
            },
          },
        ],
      },
      ranks: [
        { code: "A", index: "A", name: { en: "Ace", fr: "As" } },
        { code: "2", index: "2", name: { en: "Two", fr: "Deux" } },
        { code: "3", index: "3", name: { en: "Three", fr: "Trois" } },
        { code: "4", index: "4", name: { en: "Four", fr: "Quatre" } },
        { code: "5", index: "5", name: { en: "Five", fr: "Cinq" } },
        { code: "6", index: "6", name: { en: "Six", fr: "Six" } },
        { code: "7", index: "7", name: { en: "Seven", fr: "Sept" } },
        { code: "8", index: "8", name: { en: "Eight", fr: "Huit" } },
        { code: "9", index: "9", name: { en: "Nine", fr: "Neuf" } },
        { code: "T", index: "10", name: { en: "Ten", fr: "Dix" } },
        { code: "J", index: "J", name: { en: "Jack", fr: "Valet" } },
        { code: "C", index: "C", name: { en: "Knight", fr: "Cavalier" } },
        { code: "Q", index: "Q", name: { en: "Queen", fr: "Dame" } },
        { code: "K", index: "K", name: { en: "King", fr: "Roi" } },
      ],
    },
    major: [
      {
        code: "t00",
        glyph: "\u{1F0E0}",
        index: "0",
        theme: {
          marseilles: {
            fr: ["Le Mat", "Le Fou", "Le Fol"],
          },
          nouveau: {
            en: "Fool",
            fr: "L‘Excuse",
          },
          rws: { en: "The Fool" },
        },
      },
      {
        code: "t01",
        glyph: "\u{1F0E1}",
        index: ["1", "I"],
        theme: {
          marseilles: { fr: "Le Bateleur" },
          nouveau: {
            en: "Individual",
            fr: "Individuelle",
          },
          rws: { en: "The Magician" },
        },
      },
      {
        code: "t02",
        glyph: "\u{1F0E2}",
        index: ["2", "II"],
        theme: {
          marseilles: { fr: "La Papesse" },
          nouveau: {
            en: "Childhood",
            fr: "Enfance",
          },
          rws: { en: "The High Priestess" },
        },
      },
      {
        code: "t03",
        glyph: "\u{1F0E3}",
        index: ["3", "III"],
        theme: {
          marseilles: { fr: "L’Impératrice" },
          nouveau: {
            en: "Youth",
            fr: "Jeunesse",
          },
          rws: { en: "The Empress" },
        },
      },
      {
        code: "t04",
        glyph: "\u{1F0E4}",
        index: ["4", "IV"],
        theme: {
          marseilles: { fr: "L’Empereur" },
          nouveau: {
            en: "Maturity",
            fr: "Maturité",
          },
          rws: { en: "The Emperor" },
        },
      },
      {
        code: "t05",
        glyph: "\u{1F0E5}",
        index: ["5", "V"],
        theme: {
          marseilles: { fr: "Le Pape" },
          nouveau: {
            en: "Old Age",
            fr: "Vieillesse",
          },
          rws: { en: "The Hierophant" },
        },
      },
      {
        code: "t06",
        glyph: "\u{1F0E6}",
        index: ["6", "VI"],
        theme: {
          marseilles: { fr: "L’Amoureux" },
          nouveau: {
            en: "Morning",
            fr: "Matin",
          },
          rws: { en: "The Lovers" },
        },
      },
      {
        code: "t07",
        glyph: "\u{1F0E7}",
        index: ["7", "VI"],
        theme: {
          marseilles: { fr: "Le Chariot" },
          nouveau: {
            en: "Afternoon",
            fr: "Après-midi",
          },
          rws: { en: "The Chariot" },
        },
      },
      {
        code: "t08",
        glyph: "\u{1F0E8}",
        index: ["8", "VIII"],
        theme: {
          marseilles: { fr: "La Justice" },
          nouveau: {
            en: "Evening",
            fr: "Soir",
          },
          rws: { en: "Strength" },
        },
      },
      {
        code: "t09",
        glyph: "\u{1F0E9}",
        index: ["9", "IX"],
        theme: {
          marseilles: { fr: "L’Ermite" },
          nouveau: {
            en: "Night",
            fr: "Nuit",
          },
          rws: { en: "The Hermit" },
        },
      },
      {
        code: "t10",
        glyph: "\u{1F0EA}",
        index: ["10", "X"],
        theme: {
          marseilles: { fr: "La Roue de Fortune" },
          nouveau: {
            en: "Earth & Air",
            fr: "Terre / Air",
          },
          rws: { en: "Wheel of Fortune" },
        },
      },
      {
        code: "t11",
        glyph: "\u{1F0EB}",
        index: ["11", "XI"],
        theme: {
          marseilles: { fr: "La Force" },
          nouveau: {
            en: "Water & Fire",
            fr: "Eau / Feu",
          },
          rws: { en: "Justice" },
        },
      },
      {
        code: "t12",
        glyph: "\u{1F0EC}",
        index: ["12", "XII"],
        theme: {
          marseilles: { fr: "Le Pendu" },
          nouveau: {
            en: "Dance",
            fr: "Danse",
          },
          rws: { en: "The Hanged Man" },
        },
      },
      {
        code: "t13",
        glyph: "\u{1F0ED}",
        index: ["13", "XIII"],
        theme: {
          marseilles: {
            fr: ["L’Arcane sans nom", "La Mort"],
          },
          nouveau: {
            en: "Shopping",
            fr: "Achats",
          },
          rws: { en: "Death" },
        },
      },
      {
        code: "t14",
        glyph: "\u{1F0EE}",
        index: ["14", "XIV"],
        theme: {
          marseilles: { fr: "Tempérance" },
          nouveau: {
            en: "Open Air",
            fr: "Grand air",
          },
          rws: { en: "Temperance" },
        },
      },
      {
        code: "t15",
        glyph: "\u{1F0EF}",
        index: ["15", "XV"],
        theme: {
          marseilles: { fr: "Le Diable" },
          nouveau: {
            en: "Visual Arts",
            fr: "Arts visuels",
          },
          rws: { en: "The Devil" },
        },
      },
      {
        code: "t16",
        glyph: "\u{1F0F0}",
        index: ["16", "XVI"],
        theme: {
          marseilles: { fr: "La Maison Dieu" },
          nouveau: {
            en: "Spring",
            fr: "Printemps",
          },
          rws: { en: "The Tower" },
        },
      },
      {
        code: "t17",
        glyph: "\u{1F0F1}",
        index: ["17", "XVII"],
        theme: {
          marseilles: { fr: "L’Étoile" },
          nouveau: {
            en: "Summer",
            fr: "Été",
          },
          rws: { en: "The Star" },
        },
      },
      {
        code: "t18",
        glyph: "\u{1F0F2}",
        index: ["18", "XVIII"],
        theme: {
          marseilles: { fr: "La Lune" },
          nouveau: {
            en: "Autumn",
            fr: "Automne",
          },
          rws: { en: "The Moon" },
        },
      },
      {
        code: "t19",
        glyph: "\u{1F0F3}",
        index: ["19", "XIX"],
        theme: {
          marseilles: { fr: "Le Soleil" },
          nouveau: {
            en: "Winter",
            fr: "Hiver",
          },
          rws: { en: "The Sun" },
        },
      },
      {
        code: "t20",
        glyph: "\u{1F0F4}",
        index: ["20", "XX"],
        theme: {
          marseilles: { fr: "Le Jugement" },
          nouveau: {
            en: "The Game",
            fr: "Le Jeu",
          },
          rws: { en: "Judgement" },
        },
      },
      {
        code: "t21",
        glyph: "\u{1F0F5}",
        index: ["21", "XXI"],
        theme: {
          marseilles: { fr: "Le Monde" },
          nouveau: {
            en: "Collective",
            fr: "Collective",
          },
          rws: { en: "The World" },
        },
      },
    ],
    jokers: [
      {
        code: "jB",
        name: { en: "Black" },
        glyph: "\u{1F0BF}",
      },
      {
        code: "jR",
        name: { en: "Red" },
        glyph: "\u{1F0CF}",
      },
      {
        code: "jW",
        name: { en: "White" },
        glyph: "\u{1F0DF}",
      },
    ],
  },
};

// TESTS
// =====
//
// Create new deck
// ---------------
var deck = arcana.createDeck();

// Show stack position, glyph, and card type for all cards in deck
// ---------------------------------------------------------------
//
// DECK PARAMETERS:
// - lang: "en"
// - suitType: "french"
// - Full Minor Arcana with Knights (56 cards)
// - Full Major Arcana (22 cards)
// - Major Arcana theme: "nouveau"
// - No Jokers
//
console.log(`
Cards pushed to \`deck\` array:

| №   | Code | Glyph | Type | Name |
| --- | ---- | ----- | ---- | ---- |`);
deck.forEach((elem, i) => {
  console.log(
    `| ${i + 1} | ${elem.code} | ${elem.glyph} | ${elem.cardType} | ${
      elem.cardType === "minor"
        ? elem.rank.name.en + " of " + elem.suit.name.en
        : ""
    }${
      elem.cardType === "major"
        ? `${elem.index[0]} — ${elem.theme.nouveau.en}`
        : ""
    }${elem.cardType === "joker" ? elem.name.en + " Joker" : ""} |`
  );
});

// Show total number cards in deck
// -------------------------------
console.log(`
Total number of cards in deck: ${deck.length}
`);
