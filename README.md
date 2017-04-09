# Arcana

**Arcana** is an experiment in JavaScript using playing cards based on:
* the standard 52-card deck,
* the 56-card *Minor Arcana* tarot deck,
* and the 22-card *Major Arcana* tarot deck.

Based on `playingCards.html` HTML/CSS experiment now living in this [CodePen pen](https://codepen.io/ogab/pen/peXpqW).

Developed in conjunction with this [REPL.it session](https://repl.it/HBzu/110).

## References
* https://en.wikipedia.org/wiki/Minor_Arcana
* https://en.wikipedia.org/wiki/Tarot_Nouveau
* https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
* https://en.wikipedia.org/wiki/Playing_cards_in_Unicode
* http://www.unicode.org/charts/PDF/U1F0A0.pdf


## Application (current version)
[*app.js*](js/app.js):
* `App` object:
  * `data` object:
    * `glyphs` array holds strings of each cards as a Unicode glyph
    * `pips` array holds Unicode suit symbols
    * `ranks` array holds rank name/value (Ace, 2, 3 etc. thru King)
    * `suits` array holding strings of suit names
    * `arcanaRanks`, `arcanaSuits`, and `arcanaTrumps` arrays for generating Tarot decks
  * `makeCardNames(ranks, suits)` method
  * `renderCards()` method
  * `init()` method

## Data refactoring for next version
[*data.js*](js/data.js):
* Properties of `data` object:
  * `glyphs` array
  * `ranks` object
  * `suits` object
  * `trumps` object

## Additional References & Inspiration
* http://www.egreenway.com/tarot/
* http://www.tarotpedia.com/
* http://www.ovdiyenko.com/
* https://en.wikipedia.org/wiki/Template:Cards
* http://oll.libertyfund.org/pages/new-playing-cards-for-the-french-republic-1793-94
* https://digitalcollections.nypl.org/collections/playing-cards-engineering#/?tab=about
