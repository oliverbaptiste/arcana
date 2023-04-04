export const arcana = {
  "glyphs": {
    // TODO
  },
  "minor": {
    "suits": {
      "french": {
        "C": { "symbol": "♠", "name": { "en": "clubs", "fr": "trèfle" } },
        "D": { "symbol": "♦", "name": { "en": "diamonds", "fr": "carreau" } },
        "H": { "symbol": "♥", "name": { "en": "hearts", "fr": "cœur" } },
        "S": { "symbol": "♠", "name": { "en": "spades", "fr": "pique" } },
      },
      "latin": {
        "C": { "name": { "en": ["clubs", "wands"], "es": "bastos", "it": "bastoni" } },
        "D": { "name": { "en": ["coins", "pentacles"], "es": "oros", "it": "denari", } },
        "H": { "name": { "en": "cups", "es": "copas", "it": "coppe" } },
        "S": { "name": { "en": "swords", "es": "espadas", "it": "spade" } },
      },
    },
    "ranks": {
      "pip": {
        "PA": { "index": ["A", "1"], "name": { "en": "ace", "es": "as", "fr": "as" } },
        "P2": { "index": "2", "name": { "en": "two", "es": "dos", "fr": "deux" } },
        "P3": { "index": "3", "name": { "en": "three", "es": "tres", "fr": "troix" } },
        "P4": { "index": "4", "name": { "en": "four", "es": "cuatro", "fr": "quatre" } },
        "P5": { "index": "5", "name": { "en": "five", "es": "cinco", "fr": "cinq" } },
        "P6": { "index": "6", "name": { "en": "six", "es": "seis", "fr": "six" } },
        "P7": { "index": "7", "name": { "en": "seven", "es": "siete", "fr": "sept" } },
        "P8": { "index": "8", "name": { "en": "eight", "es": "ocho", "fr": "huit" } },
        "P9": { "index": "9", "name": { "en": "nine", "es": "neuve", "fr": "neuf" } },
        "PX": { "index": "10", "name": { "en": "ten", "es": "diez", "fr": "dix" } },
      },
      "court": {
        "CJ": { "name": { "en": ["jack", "knave", "page"], "es": ["jota", "sota"], "fr": "valet" } },
        "CC": { "name": { "en": ["cavalier", "knight"], "es": "caballo", "fr": "cavalier" } },
        "CQ": { "name": { "en": "queen", "es": ["dama", "reina"], "fr": "dame" } },
        "CK": { "name": { "en": "king", "es": "rey", "fr": "roi" } },
      },
    },
  },
  "major": {
    "T00": { "index": ["", "0"], "theme": { "nouveau": { "en": "Fool" }, "rws": { "en": "The Fool" } } },
    "T01": { "index": ["1", "I"], "theme": { "nouveau": { "en": "Individual" }, "rws": { "en": "The Magician" } } },
    "T02": { "index": ["2", "II"], "theme": { "nouveau": { "en": "Childhood" }, "rws": { "en": "The High Priestess" } } },
    "T03": { "index": ["3", "III"], "theme": { "nouveau": { "en": "Youth" }, "rws": { "en": "The Empress" } } },
    "T04": { "index": ["4", "IV"], "theme": { "nouveau": { "en": "Maturity" }, "rws": { "en": "The Emperor" } } },
    "T05": { "index": ["5", "V"], "theme": { "nouveau": { "en": "Old Age" }, "rws": { "en": "The Hierophant" } } },
    "T06": { "index": ["6", "VI"], "theme": { "nouveau": { "en": "Morning" }, "rws": { "en": "The Lovers" } } },
    "T07": { "index": ["7", "VI"], "theme": { "nouveau": { "en": "Afternoon" }, "rws": { "en": "The Chariot" } } },
    "T08": { "index": ["8", "VIII"], "theme": { "nouveau": { "en": "Evening" }, "rws": { "en": "Strength" } } },
    "T09": { "index": ["9", "IX"], "theme": { "nouveau": { "en": "Night" }, "rws": { "en": "The Hermit" } } },
    "T10": { "index": ["10", "X"], "theme": { "nouveau": { "en": "Earth & Air" }, "rws": { "en": "Wheel of Fortune" } } },
    "T11": { "index": ["11", "XI"], "theme": { "nouveau": { "en": "Water & Fire" }, "rws": { "en": "Justice" } } },
    "T12": { "index": ["12", "XII"], "theme": { "nouveau": { "en": "Dance" }, "rws": { "en": "The Hanged Man" } } },
    "T13": { "index": ["13", "XIII"], "theme": { "nouveau": { "en": "Shopping" }, "rws": { "en": "Death" } } },
    "T14": { "index": ["14", "XIV"], "theme": { "nouveau": { "en": "Open Air" }, "rws": { "en": "Temperance" } } },
    "T15": { "index": ["15", "XV"], "theme": { "nouveau": { "en": "Visual Arts" }, "rws": { "en": "The Devil" } } },
    "T16": { "index": ["16", "XVI"], "theme": { "nouveau": { "en": "Spring" }, "rws": { "en": "The Tower" } } },
    "T17": { "index": ["17", "XVII"], "theme": { "nouveau": { "en": "Summer" }, "rws": { "en": "The Star" } } },
    "T18": { "index": ["18", "XVIII"], "theme": { "nouveau": { "en": "Autumn" }, "rws": { "en": "The Moon" } } },
    "T19": { "index": ["19", "XIX"], "theme": { "nouveau": { "en": "Winter" }, "rws": { "en": "The Sun" } } },
    "T20": { "index": ["20", "XX"], "theme": { "nouveau": { "en": "The Game" }, "rws": { "en": "Judgement" } } },
    "T21": { "index": ["21", "XXI"], "theme": { "nouveau": { "en": "Collective" }, "rws": { "en": "The World" } } },
  },
  "jokers": {
    // TODO
  },
}

// TESTS

// minor arcana - suits
console.log(arcana.minor.suits.french.S.symbol); // "♠"
console.log(arcana.minor.suits.french.S.name.en); // spades
console.log(arcana.minor.suits.french.S.name.fr); // pique
console.log(arcana.minor.suits.latin.S.name.en); // swords
console.log(arcana.minor.suits.latin.S.name.es); // espadas
console.log(arcana.minor.suits.latin.S.name.it); // spade

// minor arcana - pip
console.log(arcana.minor.ranks.pip.PX.index); // "10"
console.log(arcana.minor.ranks.pip.PX.name.en); // "ten"
console.log(arcana.minor.ranks.pip.PX.name.es); // "diez"
console.log(arcana.minor.ranks.pip.PX.name.fr); // "dix"

// minor arcana - court
console.log(arcana.minor.ranks.court.CJ.name.en[0]); // "jack"
console.log(arcana.minor.ranks.court.CJ.name.es[0]); // "jota"
console.log(arcana.minor.ranks.court.CJ.name.fr); // "valet"

// major arcana - indices & themes
console.log(arcana.major.T13.index[0]); // "13"
console.log(arcana.major.T13.index[1]); // "XIII"
console.log(arcana.major.T13.theme.nouveau.en); // "Shopping"
console.log(arcana.major.T13.theme.rws.en); // "Death"
