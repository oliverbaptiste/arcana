import * as arcana from './arcana-0.6.js';

// BEGIN TESTS
console.log('Running tests…\n');

// STANDARD 52-CARD DECK
console.log('STANDARD 52-CARD DECK');
console.log('---------------------')
const standardDeck = new arcana.Deck();
console.log('');

// 56-CARD MINOR ARCANA
console.log('56-CARD MINOR ARCANA');
console.log('--------------------')
const minorArcana = new arcana.Deck("fr", true, false, 0, [], []);
console.log('');
