var CONSTANTS = {
  SUITS: [
    {
      standard: { name: 'Spades', pip: '♠', color: 'black' },
      tarot: { name: 'Swords' }
    },
    {
      standard: { name: 'Hearts', pip: '♥', color: 'red' },
      tarot: { name: 'Cups' }
    },
    {
      standard: { name: 'Diamonds', pip: '♦', color: 'red' },
      tarot: { name: 'Pentacles' }
    },
    {
      standard: { name: 'Clubs', pip: '♣', color: 'black' },
      tarot: { name: 'Wands' }
    }
  ],
  RANKS: [
    {
      pipCard: {
        1: 'Ace',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten' }
    },
    {
      courtCard: {
        standard: [ 'Jack', 'Queen', 'King' ],
        tarot: [ 'Page', 'Knight', 'Queen', 'King' ]
      }
    }
  ],
  TRUMPS:  [
    { 0: 'The Fool' },
    { 1: { arcana: 'The Magician', nouveau: 'Individual' } },
    { 2: { arcana: 'The High Priestess', nouveau: 'Childhood' } },
    { 3: { arcana: 'The Empress', nouveau: 'Youth' } },
    { 4: { arcana: 'The Emperor', nouveau: 'Maturity' } },
    { 5: { arcana: 'The Hierophant', nouveau: 'Old Age' } },
    { 6: { arcana: 'The Lovers', nouveau: 'Morning' } },
    { 7: { arcana: 'The Chariot', nouveau: 'Afternoon' } },
    { 8: { arcana: 'Strength', nouveau: 'Evening' } },
    { 9: { arcana: 'The Hermit', nouveau: 'Night' } },
    { 10: { arcana: 'Wheel of Fortune', nouveau: 'Earth and Air' } },
    { 11: { arcana: 'Justice', nouveau: 'Water and Fire' } },
    { 12: { arcana: 'The Hanged Man', nouveau: 'Dance' } },
    { 13: { arcana: 'Death', nouveau: 'Shopping' } },
    { 14: { arcana: 'Temperance', nouveau: 'Open Air' } },
    { 15: { arcana: 'The Devil', nouveau: 'Visual Arts' } },
    { 16: { arcana: 'The Tower', nouveau: 'Spring' } },
    { 17: { arcana: 'The Star', nouveau: 'Summer' } },
    { 18: { arcana: 'The Moon', nouveau: 'Autumn' } },
    { 19: { arcana: 'The Sun', nouveau: 'Winter' } },
    { 20: { arcana: 'Judgement', nouveau: 'The Game' } },
    { 21: { arcana: 'The World', nouveau: 'Collective' } }
  ],
  GLYPHS: {
    spades:   [ '🂡','🂢','🂣','🂤','🂥','🂦','🂧','🂨','🂩','🂪','🂫','🂬','🂭','🂮' ],
    hearts:   [ '🂱','🂲','🂳','🂴','🂵','🂶','🂷','🂸','🂹','🂺','🂻','🂼','🂽','🂾' ],
    diamonds: [ '🃁','🃂','🃃','🃄','🃅','🃆','🃇','🃈','🃉','🃊','🃋','🃌','🃍','🃎' ],
    clubs:    [ '🃑','🃒','🃓','🃔','🃕','🃖','🃗','🃘','🃙','🃚','🃛','🃜','🃝','🃞' ],
    trumps:   [ '🃠','🃡','🃢','🃣','🃤','🃥','🃦','🃧','🃨','🃩','🃪','🃫','🃬','🃭','🃮','🃯','🃰','🃱','🃲','🃳','🃴','🃵' ],
    jokers:   [ '🂿','🃏','🃟' ],
    cardBack: '🂠'
  }
};
