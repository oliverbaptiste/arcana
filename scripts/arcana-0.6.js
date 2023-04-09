export class Card {
  constructor(rank, suit, shortCode, lang) {
    this.rank = rank;
    this.suit = suit;
    this.shortCode = shortCode;
    this.lang = lang;
    this.name = this.getName(lang);
  }

}

export class Deck {
  constructor(
    lang = 'en',
    includeKnights = false,
    includeMajorArcana = false,
    jokers = 0,
    strippedRanks = [],
    strippedCards = [],
  ) {
    this.lang = lang;
    this.includeKnights = includeKnights;
    this.includeMajorArcana = includeMajorArcana;
    this.jokers = jokers;
    this.strippedRanks = strippedRanks;
    this.strippedCards = strippedCards;
    this.cards = [];
    this.createDeck();
  }
  createDeck() {
    console.log("createDeck() invoked!");
    const suits = [
      { 'name': { 'en': 'Hearts', 'fr': 'Cœurs' } },
      { 'name': { 'en': 'Diamonds', 'fr': 'Carreaux' } },
      { 'name': { 'en': 'Clubs', 'fr': 'Trèfles' } },
      { 'name': { 'en': 'Spades', 'fr': 'Piques' } },
    ];
    const ranks = [
      { 'index': 'A', name: { en: 'Ace', fr: 'As' } },
      { 'index': '2', name: { en: 'Two', fr: 'Deux' } },
      { 'index': '3', name: { en: 'Three', fr: 'Trois' } },
      { 'index': '4', name: { en: 'Four', fr: 'Quatre' } },
      { 'index': '5', name: { en: 'Five', fr: 'Cinq' } },
      { 'index': '6', name: { en: 'Six', fr: 'Six' } },
      { 'index': '7', name: { en: 'Seven', fr: 'Sept' } },
      { 'index': '8', name: { en: 'Eight', fr: 'Huit' } },
      { 'index': '9', name: { en: 'Nine', fr: 'Neuf' } },
      { 'index': '10', name: { en: 'Ten', fr: 'Dix' } },
      { 'index': 'J', name: { en: 'Jack', fr: 'Valet' } },
      { 'index': 'C', name: { en: 'Knight', fr: 'Cavalier' } },
      { 'index': 'Q', name: { en: 'Queen', fr: 'Dame' } },
      { 'index': 'K', name: { en: 'King', fr: 'Roi' } },
    ];
    console.log(`Language Code: ${this.lang}`);
    suits.forEach((suit) =>{
      console.log(`${suit.name[this.lang]}:`);
      ranks.forEach((rank, index) => {
        const template = {
          'en': `  ${rank.name.en} of ${suit.name.en}`,
          'fr': `  ${rank.name.fr} de ${(suit.name.fr).replace(/.$/, '').toLowerCase()}`,
        };
        if (index === 11 && this.includeKnights === false) {
          console.log(`->Skipping Knight rank!`);
        } else {
          console.log(template[this.lang]);
        }
      });
    });
    if (this.includeMajorArcana) {
      console.log("Adding Major Arcana to deck!");
    }
    if (this.jokers) {
      console.log(`Adding ${this.jokers} Joker card(s) to deck!`);
    }
    if (this.strippedRanks === undefined || this.strippedRanks.length === 0) {
      console.log('**strippedRanks: false**');
    }
    if (this.strippedCards === undefined || this.strippedCards.length === 0) {
      console.log('**strippedCards: false**');
    };
  }
}
