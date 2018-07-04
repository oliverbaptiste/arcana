/*
  arcana:
    data object abstraction of a playing card deck
    * 56 minor arcana cards
    * 22 major arcana cards
    * 3 jokers
*/

let arcana = {
  minor: {
    ranks: [
      '2','3','4','5','6','7','8','9','T',
      'J','C','Q','K','A'
    ],
    suits: ['C','D','H','S']
  },
  major: {
    trumps: [
      'T02','T03','T04','T05', // the four ages
      'T06','T07','T08','T09', // the four times of day
      'T10','T11', // the four elements
      'T12','T13','T14','T15', // the four leisures
      'T16','T17','T18','T19', // the four seasons
      'T20', // the game
      'T21','T01', // folly
      'T00' // the fool
    ]
  },
  jokers: ['JB','JW','JR'] // black, white, red
}

let arcanaText = {
  minor: {
    ranks: {
      en: [
        'Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
        'Jack','Knight','Queen','King','Ace'
      ]
    },
    suits: {
      en: ['Clubs','Diamonds','Hearts','Spades']
    }
  }
}

// initialize deck
let deck = []
// add minor arcana cards to deck
arcana.minor.suits.forEach(function(suit) {
  arcana.minor.ranks.forEach(function(rank) {
    deck.push(rank + suit)
  })
})
// add major arcana cards to deck
arcana.major.trumps.forEach(function(trump) {
  deck.push(trump)
})
// add jokers to deck
arcana.jokers.forEach(function(joker) {
  deck.push(joker)
})

shuffle(deck)

// PixiJS Application
let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){type = "canvas"}
PIXI.utils.sayHello(type) // "sayHello" in console
let app = new PIXI.Application(1280, 720, {backgroundColor: 0x277714}) // create a Pixi Application
document.body.appendChild(app.view) // add Pixi canvas to the HTML document
let deckContainer = new PIXI.Container()
app.stage.addChild(deckContainer)
let cardImages = []
deck.forEach(function(card) {
  let texture = `cards/${card}.png`
  cardImages.push(texture)
})
let cardBackTexture = PIXI.Texture.fromImage('cards/BACK.png')
deck.forEach(function(card, i) {
  let cardFaceTexture = PIXI.Texture.fromImage(cardImages[i])
  let textureArray = [cardBackTexture, cardFaceTexture]
  let sprite = new PIXI.extras.AnimatedSprite(textureArray)
  sprite.anchor.set(0.5) // center the sprite's anchor point
  sprite.scale.set(0.25)
  sprite.interactive = true // opt-in to interactivity
  sprite.buttonMode = true // shows hand cursor
  sprite
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove)
  deckContainer.addChild(sprite)
})
// position container to the center of the screen
deckContainer.x = (app.screen.width - deckContainer.width) / 2
deckContainer.y = (app.screen.height - deckContainer.height) / 2

function onDragStart(event) {
  // store a reference to the data
  // the reason for this is because of multitouch
  // we want to track the movement of this particular touch
  this.data = event.data
  this.alpha = 0.5
  this.dragging = true
}

function onDragEnd() {
  this.alpha = 1
  this.dragging = false
  this.gotoAndStop(1)
  // set the interaction data to null
  this.data = null
}

function onDragMove() {
  if (this.dragging) {
    var newPosition = this.data.getLocalPosition(this.parent)
    this.x = newPosition.x
    this.y = newPosition.y
  }
}

function shuffle(array) { // https://bost.ocks.org/mike/shuffle/
  var currentIndex = array.length, temporaryValue, randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
