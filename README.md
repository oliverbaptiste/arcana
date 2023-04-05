# arcana

_arcana_ is a Unicode-aware JavaScript library for creating playing card decks.

![Arcana: the 81 Plaing Cards of Unicode](images/arcana-81-cards.png)

## Project goal

_arcana_ generates card decks for gameplay and divination with a variety of options, including:

* **suits**…
  * French:
    * <i style="color:black;">♠</i> Spades
    * <i style="color:red;">♥</i> Hearts
    * <i style="color:red;">♦</i> Diamonds
    * <i style="color:black;">♣</i> Clubs
  * Latin:
    * ⚔️ Swords
    * 🍷 Cups
    * 🪙 Coins / Pentacles
    * 🪄 Clubs / Wands
* **ranks**…
* **patterns**…
* and **colors**…
  * 2-color: black, red
  * 4-color: black, red, blue, green
* using up to eight (8) instances of **81 unique card types**…
  * the fifty-six (56) cards of the **Minor Arcana**:
    * forty (40) **Pip** cards
    * sixteen (16) **Court** cards
  * the twenty-two (22) cards of the **Major Arcana**
  * three (3) **Jokers**
* to load a **complete, stripped, or multi-pack deck** into a dealing **shoe**…
* with customizable **card backs**…
* and an attention to **a11y** / **i18n** / **L10n**

This project includes a **webfont** that contain all 82 glyphs in the [Playing Cards Unicode block](https://en.wikipedia.org/wiki/Playing_Cards_(Unicode_block)) (`U+1F0A0` – `U+1F0FF`). It is a subset of the [_Symbola_ font](https://fontlibrary.org/en/font/symbola) by [George Douros](https://dn-works.com/ufas/), exported using [Font Squirrel's Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).

For more information about how card data is organized, read [CARD_CODES.md](CARD_CODES.md).
### Possible applications

* card games
* cartomancy & divination
* playing card pattern design
* historical re-creation & research
* cardistry & card magic utilities
* probability & statistical analysis

## About the code

### Current version

#### 0.5.0 (in development)

[`arcana-0.5.0.js`](scripts/arcana-0.5.0.js)

* Major data structure refactoring

#### 0.4.0 (current)

[`arcana-0.4.0.js`](scripts/arcana-0.4.0.js):

* Integrated [Web Speech API](https://github.com/mdn/web-speech-api) so the name of a card is read aloud when clicked.
* Converted trump card numbering from Roman to Arabic.
* Added CSS class for card `rank`.

### Previous versions

#### 0.3.0

Adding "Show All Card Backs/Faces" buttons and ability to click on cards to show their faces.

[`arcana-0.3.0.js`](scripts/arcana-0.3.0.js):

* `App` object
  * `DATA` array
    * `GLYPHS` array
    * `RANKS` array
    * `SUITS` array
    * `TRUMP` array
  * `bindEvents()` method
  * `generateDeck()` method
  * `renderDeck(deck)` method
  * `init` method

#### 0.2.0

[`arcana-0.2.0.js`](scripts/arcana-0.2.0.js):

* `App` object:
  * `DATA` object:
    * `GLYPHS` array
    * `RANKS` object
    * `SUITS` object
    * `TRUMP` object
  * `generateDeck()` method
  * `renderDeck(deck)` method
  * `init` method

#### 0.1.0

[`arcana-0.1.0.js`](scripts/arcana-0.1.0.js):

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

## References & Inspiration

* <https://en.wikipedia.org/wiki/Minor_Arcana>
* <https://en.wikipedia.org/wiki/Tarot_Nouveau>
* <https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck>
* <https://en.wikipedia.org/wiki/Playing_cards_in_Unicode>
* <http://www.unicode.org/charts/PDF/U1F0A0.pdf>
* <http://www.cardmagic.info/know_more.htm>
* <http://www.egreenway.com/tarot/>
* <http://www.tarotpedia.com/>
* <http://www.ovdiyenko.com/>
* <https://en.wikipedia.org/wiki/Template:Cards>
* <http://oll.libertyfund.org/pages/new-playing-cards-for-the-french-republic-1793-94>
* <https://digitalcollections.nypl.org/collections/playing-cards-engineering#/?tab=about>
* <https://archive.org/details/aen4317.0001.001.umich.edu>
* <https://archive.org/details/cu31924029917576>

Based on experiments developed in [CodePen](https://codepen.io/ogab/pen/peXpqW) and [repl.it](https://repl.it/HBzu/110).

-----

Last updated: 2023-04-04
