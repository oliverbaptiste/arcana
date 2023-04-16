import * as arcana from './arcana-0.6.js';

// BEGIN TESTS
console.log('Running tests…\n');

// STANDARD 52-CARD DECK
// console.log('STANDARD 52-CARD DECK');
// console.log('---------------------')
// const standardDeck = new arcana.Deck();
// console.log('');

// MINOR ARCANA (56 cards)
// console.log('56-CARD MINOR ARCANA');
// console.log('--------------------')
// const minorArcanaDeck = new arcana.Deck("fr", true, false, 0, [], []);
// console.log('');

// MAJOR ARCANA (22 cards)
// console.log('22-CARD MAJOR ARCANA');
// console.log('--------------------')
// const majorArcanaDeck = new arcana.Deck("fr", true, false, 0, [], []);
// console.log('');

// MAJOR & MINOR ARCANA (78 cards)
console.log('78-CARD TAROT DECK');
console.log('==================')
const tarotDeck = new arcana.Deck("en", true, true, 0, [], []);
