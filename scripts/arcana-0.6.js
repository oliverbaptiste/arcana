import data from "./data-0.6.js";

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

class Deck {
  constructor(
    lang = "en",
    includeKnights = false,
    includeMajorArcana = false,
    jokers = 0,
    strippedRanks = [],
    strippedCards = []
  ) {
    this.lang = lang;
    this.includeKnights = includeKnights;
    this.includeMajorArcana = includeMajorArcana;
    this.jokers = jokers;
    this.strippedRanks = strippedRanks;
    this.strippedCards = strippedCards;
    this.createDeck();
  }
  createDeck() {
    console.log("\nAdding Minor Arcana to deck…");
    console.log("----");
    const d = data;
    d.minor.suits.french.forEach((suit) => {
      d.minor.ranks.forEach((rank, i) => {
        if (rank.index !== "C" || (rank.index === "C" && this.includeKnights === true)) {
          console.log(`${suit.cardGlyphs[i]} — ${rank.name.en} of ${suit.name.en}`);
        }
      });
    });
    if (this.includeMajorArcana) {
      console.log("\nAdding Major Arcana to deck…");
      console.log("----");
      d.major.forEach((t, i) => {
        console.log(i, t);
      });
    }
    if (this.jokers) {
      console.log(`\nAdding ${this.jokers} Joker card(s) to deck…`);
      console.log("----");
    } else {
      console.log("* No jokers added to deck!");
    }
    if (this.strippedRanks === undefined || this.strippedRanks.length === 0) {
      console.log("* No ranks stripped from deck!");
    }
    if (this.strippedCards === undefined || this.strippedCards.length === 0) {
      console.log("* No cards stripped from deck!");
    }
  }
}

export { Card, Deck };
