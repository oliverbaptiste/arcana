// ARCANA v0.6
// © 2023 Oliver G. A. Baptiste
const arcana = {
  createDeck: function (
    suitType = "french",
    includeKnights = true,
    includeMajorArcana = true,
    jokers = 0,
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
            name: {
              en: ["clubs", "wands"],
              es: "bastos",
              fr: "bâton",
              it: "bastoni",
            },
          },
          {
            name: {
              en: ["coins", "pentacles"],
              es: "oros",
              fr: "denier",
              it: "denari",
            },
          },
          {
            name: {
              en: "cups",
              es: "copas",
              fr: "coupe",
              it: "coppe",
            },
          },
          {
            name: {
              en: "swords",
              es: "espadas",
              fr: "épée",
              it: "spade",
            },
          },
        ],
      },
      ranks: [
        { index: "A", name: { en: "Ace", fr: "As" } },
        { index: "2", name: { en: "Two", fr: "Deux" } },
        { index: "3", name: { en: "Three", fr: "Trois" } },
        { index: "4", name: { en: "Four", fr: "Quatre" } },
        { index: "5", name: { en: "Five", fr: "Cinq" } },
        { index: "6", name: { en: "Six", fr: "Six" } },
        { index: "7", name: { en: "Seven", fr: "Sept" } },
        { index: "8", name: { en: "Eight", fr: "Huit" } },
        { index: "9", name: { en: "Nine", fr: "Neuf" } },
        { index: "10", name: { en: "Ten", fr: "Dix" } },
        { index: "J", name: { en: "Jack", fr: "Valet" } },
        { index: "C", name: { en: "Knight", fr: "Cavalier" } },
        { index: "Q", name: { en: "Queen", fr: "Dame" } },
        { index: "K", name: { en: "King", fr: "Roi" } },
      ],
    },
    major: [
      {
        glyph: "\u{1F0E0}",
        index: ["", "0"],
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
        glyph: "\u{1F0ED}",
        index: ["13", "XIII"],
        theme: {
          marseilles: {
            fr: ["L’Arcane sans Nom", "La Mort"],
          },
          nouveau: {
            en: "Shopping",
            fr: "Achats",
          },
          rws: { en: "Death" },
        },
      },
      {
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
        name: { en: "Black" },
        glyph: "\u{1F0BF}",
      },
      {
        name: { en: "Red" },
        glyph: "\u{1F0CF}",
      },
      {
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

| №   | Glyph | Type | Name |
| --- | ----- | ---- | ---- |`);
deck.forEach((elem, i) => {
  console.log(
    `| ${i + 1} | ${elem.glyph} | ${elem.cardType} | ${
      elem.cardType === "minor"
        ? elem.rank.name.en + " of " + elem.suit.name.en
        : ""
    }${
      elem.cardType === "major"
        ? `${elem.index[0]} _${elem.theme.nouveau.en}_`
        : ""
    }${elem.cardType === "joker" ? elem.name.en + " Joker" : ""} |`
  );
});

// Show total number cards in deck
// -------------------------------
console.log(`
Total number of cards in deck: ${deck.length}
`);
