const arcanaData = {
  "suits": {
    "french": {

      "C": { "symbol": "♠", "name": {"en": "clubs", "fr": "trèfle"} },
      "D": { "symbol": "♦", "name": {"en": "diamonds", "fr": "carreau"} },
      "H": { "symbol": "♥", "name": {"en": "hearts", "fr": "cœur"} },
      "S": { "symbol": "♠", "name": {"en": "spades", "fr": "pique"} }
    }
  },
  "ranks": {
    "pip": {
      "A": { "index": ["A", "1"], "name": { "en": "ace", "fr": "as" } },
      "2": { "index": "2", "name": { "en": "two", "fr": "deux" } },
      "3": { "index": "3", "name": { "en": "three", "fr": "troix" } },
      "4": { "index": "4", "name": { "en": "four", "fr": "quatre" } },
      "5": { "index": "5", "name": { "en": "five", "fr": "cinq" } },
      "6": { "index": "6", "name": { "en": "six", "fr": "six" } },
      "7": { "index": "7", "name": { "en": "seven", "fr": "sept" } },
      "8": { "index": "8", "name": { "en": "eight", "fr": "huit" } },
      "9": { "index": "9", "name": { "en": "nine", "fr": "neuf" } },
      "X": { "index": "10", "name": { "en": "ten", "fr": "dix" } }
    },
    "court": {
      "J": { "name": { "en": [ "jack", "knave", "page" ], "fr": "valet" } },
      "C": { "name": { "en": [ "cavalier", "knight" ], "fr": "cavalier" } },
      "Q": { "name": { "en": "queen", "fr": "dame" } },
      "K": { "name": { "en": "king", "fr": "roi" } }
    },
    "trump": {
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
      "T21": { "index": ["21", "XXI"], "theme": { "nouveau": { "en": "Collective" }, "rws": { "en": "The World" } } }
    },
    "joker": {
      "RJ": { "color": { "en": "Red" } },
      "BJ": { "color": { "en": "Black" } },
      "WJ": { "color": { "en": "White" } }
    }
  }
}

console.log(arcanaData.suits.french.S.name.en) // spades
console.log(arcanaData.suits.french.S.symbol) // "♠"
console.log(arcanaData.ranks.pip.A.name.en) // "ace"
console.log(arcanaData.ranks.court.J.name.en[0]) // "valet"
console.log(arcanaData.ranks.trump.T00.theme.rws.en) // "The Fool"
console.log(arcanaData.ranks.trump.T21.index[1]) // "XXI"
console.log(arcanaData.ranks.joker.BJ.color.en) // "black"
