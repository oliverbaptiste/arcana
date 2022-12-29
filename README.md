# Arcana

_Arcana_ is a tool for creating "Unicode" playing card decks.

![Arcana: the 81 Plaing Cards of Unicode](images/arcana-81-cards.png)

Based on experiments developed in [CodePen](https://codepen.io/ogab/pen/peXpqW) and [repl.it](https://repl.it/HBzu/110).

## Project goal

_Arcana_ should generate card decks in a variety of… 

* **suits**…
  * French
    * ♠ Spades
    * <span style="color:red;">♥ Hearts</span>
    * <span style="color:red;">♦ Diamonds</span>
    * ♣ Clubs
  * Latin:
    * ⚔️ Swords
    * 🍷 Cups
    * 🪙 Coins
    * 🪄 Wands
* **ranks**…
* **patterns**…
* and **colors**…
  * 2-color: <b style="color:black;">black</b>, <b style="color:red;">red</b>
  * 4-color: <b style="color:black;">black</b>, <b style="color:red;">red</b>, <b style="color:blue;">blue</b>, <b style="color:green;">green</b>
* using one or more instances of **81 unique cards**…
  * 40 pip
  * 16 court
  * 3 jokers
  * 22 trumps
* within a **complete, stripped, or multi-pack deck**…
* with a **customizable card back**…
* …and be **accessible** for users with visual disabilities.

_Arcana_ includes a **webfont** with all 82 glyphs in Unicode's Playing Cards range (1F0A0–1F0FF) from _Symbola_ by George Douros, generated using [Font Squirrel's Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).

### Possible applications

* gameplay
* game design
* divination
* cardistry and magic utilities
* history of playing cards and games
* probability/statistical analysis

## About the code

### Current version

#### 0.4.0

* Integrated [Web Speech API](https://github.com/mdn/web-speech-api): the name of a clicked card is spoken.
* Converted trump card numbering from Roman to Arabic.
* Added CSS class for card **rank**.

### Previous versions

#### 0.3.0

Adding "Show All Card Backs/Faces" buttons and ability to click on cards to show their faces.

[*arcana-0.3.0.js*](scripts/arcana-0.3.0.js):

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

[*arcana-0.2.0.js*](scripts/arcana-0.2.0.js):

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

[*arcana-0.1.0.js*](scripts/arcana-0.1.0.js):

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
