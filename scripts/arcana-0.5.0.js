const arcana = {
  "minor": {
    "glyphs": {
      "C": ['🂡','🂢','🂣','🂤','🂥','🂦','🂧','🂨','🂩','🂪','🂫','🂬','🂭','🂮'],
      "D": ['🂱','🂲','🂳','🂴','🂵','🂶','🂷','🂸','🂹','🂺','🂻','🂼','🂽','🂾'],
      "H": ['🃁','🃂','🃃','🃄','🃅','🃆','🃇','🃈','🃉','🃊','🃋','🃌','🃍','🃎'],
      "S": ['🃑','🃒','🃓','🃔','🃕','🃖','🃗','🃘','🃙','🃚','🃛','🃜','🃝','🃞']
    },
    "suits": {
      "french": {
        "C": {
          "symbol": ["♣️", "♧"],
          "name": {
            "en": "clubs",
            "fr": "trèfle"
          }
        },
        "D": {
          "symbol": ["♦","♢"],
          "name": {
            "en": "diamonds",
            "fr": "carreau"
          }
        },
        "H": {
          "symbol": ["♥","♡"],
          "name": {
            "en": "hearts",
            "fr": "cœur"
          }
        },
        "S": {
          "symbol": ["♠","♤"],
          "name": {
            "en": "spades",
            "fr": "pique"
          }
        },
      },
      "latin": {
        "C": {
          "name": {
            "en": ["clubs", "wands"],
            "es": "bastos",
            "fr": "bâton",
            "it": "bastoni"
          }
        },
        "D": {
          "name": {
            "en": ["coins", "pentacles"],
            "es": "oros",
            "fr": "denier",
            "it": "denari"
          }
        },
        "H": {
          "name": {
            "en": "cups",
            "es": "copas",
            "fr": "coupe",
            "it": "coppe"
          }
        },
        "S": {
          "name": {
            "en": "swords",
            "es": "espadas",
            "fr": "épée",
            "it": "spade"
          }
        },
      },
    },
    "ranks": {
      "pip": {
        "PA": {
          "index": ["A", "1"],
          "name": {
            "en": "ace",
            "es": "as",
            "fr": "as"
          }
        },
        "P2": {
          "index": "2",
          "name": {
            "en": "two",
            "es": "dos",
            "fr": "deux"
          }
        },
        "P3": {
          "index": "3",
          "name": {
            "en": "three",
            "es": "tres",
            "fr": "troix"
          }
        },
        "P4": {
          "index": "4",
          "name": {
            "en": "four",
            "es": "cuatro",
            "fr": "quatre"
          }
        },
        "P5": {
          "index": "5",
          "name": {
            "en": "five",
            "es": "cinco",
            "fr": "cinq"
          }
        },
        "P6": {
          "index": "6",
          "name": {
            "en": "six",
            "es": "seis",
            "fr": "six"
          }
        },
        "P7": {
          "index": "7",
          "name": {
            "en": "seven",
            "es": "siete",
            "fr": "sept"
          }
        },
        "P8": {
          "index": "8",
          "name": {
            "en": "eight",
            "es": "ocho",
            "fr": "huit"
          }
        },
        "P9": {
          "index": "9",
          "name": {
            "en": "nine",
            "es": "neuve",
            "fr": "neuf"
          }
        },
        "PX": {
          "index": "10",
          "name": {
            "en": "ten",
            "es": "diez",
            "fr": "dix"
          }
        },
      },
      "court": {
        "CJ": {
          "name": {
            "en": ["jack", "knave", "page"],
            "es": ["jota", "sota"],
            "fr": "valet"
          }
        },
        "CC": {
          "name": {
            "en": ["cavalier", "knight"],
            "es": "caballo",
            "fr": ["cavalier", "chevalier"]
          }
        },
        "CQ": {
          "name": {
            "en": "queen",
            "es": ["dama", "reina"],
            "fr": "dame"
          }
        },
        "CK": {
          "name": {
            "en": "king",
            "es": "rey",
            "fr": "roi"
          }
        },
      },
    },
  },
  "major": {
    "T00": {
      "glyph": "\u{1F0E0}",
      "index": ["", "0"],
      "theme": {
        "marseilles": {
          "fr": ["Le Mat", "Le Fou", "Le Fol"]
        },
        "nouveau": { "en": "Fool" },
        "rws": { "en": "The Fool" }
      }
    },
    "T01": {
      "glyph": "\u{1F0E1}",
      "index": ["1", "I"],
      "theme": {
        "marseilles": { "fr": "Le Bateleur" },
        "nouveau": {
          "en": "Individual",
          "fr": "Individuelle"
        },
        "rws": { "en": "The Magician" }
      }
    },
    "T02": {
      "glyph": "\u{1F0E2}",
      "index": ["2", "II"],
      "theme": {
        "marseilles": { "fr": "La Papesse" },
        "nouveau": {
          "en": "Childhood",
          "fr": "Enfance"
        },
        "rws": { "en": "The High Priestess" }
      }
    },
    "T03": {
      "glyph": "\u{1F0E3}",
      "index": ["3", "III"],
      "theme": {
        "marseilles": { "fr": "L’Impératrice" },
        "nouveau": {
          "en": "Youth",
          "fr": "Jeunesse"
        },
        "rws": { "en": "The Empress" }
      }
    },
    "T04": {
      "glyph": "\u{1F0E4}",
      "index": ["4", "IV"],
      "theme": {
        "marseilles": { "fr": "L’Empereur" },
        "nouveau": {
          "en": "Maturity",
          "fr": "Maturité"
        },
        "rws": { "en": "The Emperor" }
      }
    },
    "T05": {
      "glyph": "\u{1F0E5}",
      "index": ["5", "V"],
      "theme": {
        "marseilles": { "fr": "Le Pape" },
        "nouveau": {
          "en": "Old Age",
          "fr": "Vieillesse"
        },
        "rws": { "en": "The Hierophant" }
      }
    },
    "T06": {
      "glyph": "\u{1F0E6}",
      "index": ["6", "VI"],
      "theme": {
        "marseilles": { "fr": "L’Amoureux" },
        "nouveau": {
          "en": "Morning",
          "fr": "Matin"
        },
        "rws": { "en": "The Lovers" }
      }
    },
    "T07": {
      "glyph": "\u{1F0E7}",
      "index": ["7", "VI"],
      "theme": {
        "marseilles": { "fr": "Le Chariot" },
        "nouveau": {
          "en": "Afternoon",
          "fr": "Après-midi"
        },
        "rws": { "en": "The Chariot" }
      }
    },
    "T08": {
      "glyph": "\u{1F0E8}",
      "index": ["8", "VIII"],
      "theme": {
        "marseilles": { "fr": "La Justice" },
        "nouveau": {
          "en": "Evening",
          "fr": "Soir"
        },
        "rws": { "en": "Strength" }
      }
    },
    "T09": {
      "glyph": "\u{1F0E9}",
      "index": ["9", "IX"],
      "theme": {
        "marseilles": { "fr": "L’Ermite" },
        "nouveau": {
          "en": "Night",
          "fr": "Nuit"
        },
        "rws": { "en": "The Hermit" }
      }
    },
    "T10": {
      "glyph": "\u{1F0EA}",
      "index": ["10", "X"],
      "theme": {
        "marseilles": { "fr": "La Roue de Fortune" },
        "nouveau": {
          "en": "Earth & Air",
          "fr": "Terre / Air"
        },
        "rws": { "en": "Wheel of Fortune" }
      }
    },
    "T11": {
      "glyph": "\u{1F0EB}",
      "index": ["11", "XI"],
      "theme": {
        "marseilles": { "fr": "La Force" },
        "nouveau": {
          "en": "Water & Fire",
          "fr": "Eau / Feu"
        },
        "rws": { "en": "Justice" }
      }
    },
    "T12": {
      "glyph": "\u{1F0EC}",
      "index": ["12", "XII"],
      "theme": {
        "marseilles": { "fr": "Le Pendu" },
        "nouveau": {
          "en": "Dance",
          "fr": "Danse"
        },
        "rws": { "en": "The Hanged Man" }
      }
    },
    "T13": {
      "glyph": "\u{1F0ED}",
      "index": ["13", "XIII"],
      "theme": {
        "marseilles": {
          "fr": ["L’Arcane sans Nom", "La Mort"]
        },
        "nouveau": {
          "en": "Shopping",
          "fr": "Achats"
        },
        "rws": { "en": "Death" }
      }
    },
    "T14": {
      "glyph": "\u{1F0EE}",
      "index": ["14", "XIV"],
      "theme": {
        "marseilles": { "fr": "Tempérance" },
        "nouveau": {
          "en": "Open Air",
          "fr": "Grand air"
        },
        "rws": { "en": "Temperance" }
      }
    },
    "T15": {
      "glyph": "\u{1F0EF}",
      "index": ["15", "XV"],
      "theme": {
        "marseilles": { "fr": "Le Diable" },
        "nouveau": {
          "en": "Visual Arts",
          "fr": "Arts visuels"
        },
        "rws": { "en": "The Devil" }
      }
    },
    "T16": {
      "glyph": "\u{1F0F0}",
      "index": ["16", "XVI"],
      "theme": {
        "marseilles": { "fr": "La Maison Dieu" },
        "nouveau": {
          "en": "Spring",
          "fr": "Printemps"
        },
        "rws": { "en": "The Tower" }
      }
    },
    "T17": {
      "glyph": "\u{1F0F1}",
      "index": ["17", "XVII"],
      "theme": {
        "marseilles": { "fr": "L’Étoile" },
        "nouveau": {
          "en": "Summer",
          "fr": "Été"
        },
        "rws": { "en": "The Star" }
      }
    },
    "T18": {
      "glyph": "\u{1F0F2}",
      "index": ["18", "XVIII"],
      "theme": {
        "marseilles": { "fr": "La Lune" },
        "nouveau": {
          "en": "Autumn",
          "fr": "Automne"
        },
        "rws": { "en": "The Moon" }
      }
    },
    "T19": {
      "glyph": "\u{1F0F3}",
      "index": ["19", "XIX"],
      "theme": {
        "marseilles": { "fr": "Le Soleil" },
        "nouveau": {
          "en": "Winter",
          "fr": "Hiver"
        },
        "rws": { "en": "The Sun" }
      }
    },
    "T20": {
      "glyph": "\u{1F0F4}",
      "index": ["20", "XX"],
      "theme": {
        "marseilles": { "fr": "Le Jugement" },
        "nouveau": {
          "en": "The Game",
          "fr": "Le Jeu"
        },
        "rws": { "en": "Judgement" }
      }
    },
    "T21": {
      "glyph": "\u{1F0F5}",
      "index": ["21", "XXI"],
      "theme": {
        "marseilles": { "fr": "Le Monde" },
        "nouveau": {
          "en": "Collective",
          "fr": "Collective"
        },
        "rws": { "en": "The World" }
      }
    },
  },
  "jokers": {
    "JKB": {
      "color": "black",
      "glyph": "\u{1F0CF}"
    },
    "JKR": {
      "color": "red",
      "glyph": "\u{1F0BF}"
    },
    "JKW": {
      "color": "white",
      "glyph": "\u{1F0DF}"
    }
  }
}

export default arcana;
