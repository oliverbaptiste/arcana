## Arcana #
**Arcana** models, generates, and manipulates playing card sets, decks, and packs.

Inspired by the Playing Cards range (1F0A0–1F0FF) of Unicode.

Based on an experiment now living in [CodePen](https://codepen.io/ogab/pen/peXpqW) and [repl.it](https://repl.it/HBzu/110).

## Possible applications ##
  * gameplay
  * game design
  * divination
  * cardistry and magic utilities
  * history of playing cards and games
  * probability/statistical analysis

## Application requirements ##
* **It should use all extant traditional game and divination suit names**...
  * French/Anglo-American: Spades, Hearts, Diamonds, Clubs
  * Latin/Spanish/Italian:  Swords, Cups, Coins (Pentacles), Wands (Batons)
  * German: Leaves, Hearts, Bells, Acorns
  * Swiss: Shields, Roses, Bells, Acorns
* ...in **multiple languages**...
  * English
  * French
  * Spanish
  * Italian
  * German
* ...**colors**...
  * 2-color: black and red
  * 4-color: black, red, blue, green
* ...using **one or more instance of 81 possible cards**...
  * 40 pip
  * 16 court
  * 3 jokers
  * 22 trumps
* ...with a **customizable card back**...
* ...and **be accessible for users with visual disabilities**.
* **It should utilize all 82 Unicode card glyphs**.
  * Since the 22 trump glyphs don't yet exist in any default macOS font, **it should provide a Trumps icon font**. Consider using [Symbola](http://users.teilar.gr/~g1951d/Symbola.zip) from [George Douros](http://users.teilar.gr/~g1951d/).

## Code explanation ##

### Current API ###
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

### Future API in progress ###
[*data.js*](js/data.js):
* Properties of `data` object:
  * `glyphs` array
  * `ranks` object
  * `suits` object
  * `trumps` object

## References ##
* https://en.wikipedia.org/wiki/Minor_Arcana
* https://en.wikipedia.org/wiki/Tarot_Nouveau
* https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck
* https://en.wikipedia.org/wiki/Playing_cards_in_Unicode
* http://www.unicode.org/charts/PDF/U1F0A0.pdf
* http://www.cardmagic.info/know_more.htm

## Additional References & Inspiration
* http://www.egreenway.com/tarot/
* http://www.tarotpedia.com/
* http://www.ovdiyenko.com/
* https://en.wikipedia.org/wiki/Template:Cards
* http://oll.libertyfund.org/pages/new-playing-cards-for-the-french-republic-1793-94
* https://digitalcollections.nypl.org/collections/playing-cards-engineering#/?tab=about
