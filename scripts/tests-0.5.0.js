import arcana from "./arcana-0.5.0.js";

// TESTS

// minor arcana - glyph
console.log(`${arcana.minor.glyphs.S[9]} - ${arcana.minor.ranks.pip.PX.name.en} of ${arcana.minor.suits.french.S.name.en}`); // "🃚 - ten of spades"

// minor arcana - suits
console.log(arcana.minor.suits.french.S.symbol[0]); // "♠"
console.log(arcana.minor.suits.french.S.symbol[1]); // "♤"
console.log(arcana.minor.suits.french.S.name.en); // spades
console.log(arcana.minor.suits.french.S.name.fr); // pique
console.log(arcana.minor.suits.latin.S.name.en); // swords
console.log(arcana.minor.suits.latin.S.name.es); // espadas
console.log(arcana.minor.suits.latin.S.name.it); // spade

// minor arcana - ranks - pip
console.log(arcana.minor.ranks.pip.PX.index); // "10"
console.log(arcana.minor.ranks.pip.PX.name.en); // "ten"
console.log(arcana.minor.ranks.pip.PX.name.es); // "diez"
console.log(arcana.minor.ranks.pip.PX.name.fr); // "dix"

// minor arcana - ranks - court
console.log(arcana.minor.ranks.court.CJ.name.en[0]); // "jack"
console.log(arcana.minor.ranks.court.CJ.name.es[0]); // "jota"
console.log(arcana.minor.ranks.court.CJ.name.fr); // "valet"

// major arcana - glyph
console.log(arcana.major.T13.glyph); // "🃭"

// major arcana - indices & themes
console.log(arcana.major.T13.index[0]); // "13"
console.log(arcana.major.T13.index[1]); // "XIII"
console.log(arcana.major.T13.theme.marseilles.fr[0]); // "L’Arcane sans Nom"
console.log(arcana.major.T13.theme.nouveau.en); // "Shopping"
console.log(arcana.major.T13.theme.nouveau.fr); // "Achats"
console.log(arcana.major.T13.theme.rws.en); // "Death"
