# Arcana

**Arcana** is an experiment in JavaScript using playing cards based on:
* the standard 52-card deck,
* the 56-card *Minor Arcana* tarot deck,
* and the 22-card *Major Arcana* tarot deck.

Based on [this HTML/CSS experiment](playingCards.html) and the following references:  

* https://en.wikipedia.org/wiki/Playing_cards_in_Unicode
* https://en.wikipedia.org/wiki/Tarot_Nouveau
* https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
* http://www.unicode.org/charts/PDF/U1F0A0.pdf


## Application
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
* `DATA` object:
  * `CARD_GLYPHS` object
  * `RANKS` object
  * `SUITS` object
  * `TRUMPS` object

## Additional References & Inspiration
* http://www.egreenway.com/tarot/
* http://www.tarotpedia.com/
* http://www.ovdiyenko.com/
