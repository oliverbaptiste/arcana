# _arcana_ card codes

## A note on terminology

The terms "pack" and "deck" are usually considered synonyms in the world of playing cards. However, I am using these terms to represent two different concepts.

A **pack** refers to a set of cards with a maximum of one (1) instance of any unique card type.

A **deck** is generated using one or more packs. A better analogy might be a _dealer's shoe_ that has been loaded with multiple packs for a Power or Blackjack game.

## Card Type

Each of the 81 possible **card types** in a **pack** is associated with a unique **3-digit code**.

### Minor Arcana

#### Pip cards

|              | Ace | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
|--------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| **Clubs**    | CPA | CP2 | CP3 | CP4 | CP5 | CP6 | CP7 | CP8 | CP9 | CPX |
| **Diamonds** | DPA | DP2 | DP3 | DP4 | DP5 | DP6 | DP7 | DP8 | DP9 | DPX |
| **Hearts**   | HPA | HP2 | HP3 | HP4 | HP5 | HP6 | HP7 | HP8 | HP9 | HPX |
| **Spades**   | SPA | SP2 | SP3 | SP4 | SP5 | SP6 | SP7 | SP8 | SP9 | SPX |

#### Court cards

|              | Jack | Knight | Queen | King |
|--------------|------|--------|-------|------|
| **Clubs**    | CCJ  | CCC    | CCQ   | CCK  |
| **Diamonds** | DCJ  | DCC    | DCQ   | DCK  |
| **Hearts**   | HCJ  | HCC    | HCQ   | HCK  |
| **Spades**   | SCJ  | SCC    | SCQ   | SCK  |

### Major Arcana

| Index | Code |
|-------|------|
| 0     | T00  |
| I     | T01  |
| II    | T02  |
| III   | T03  |
| IV    | T04  |
| V     | T05  |
| VI    | T06  |
| VII   | T07  |
| VIII  | T08  |
| IX    | T09  |
| X     | T10  |
| XI    | T11  |
| XII   | T12  |
| XII   | T13  |
| XIV   | T14  |
| XV    | T15  |
| XVI   | T16  |
| XVII  | T17  |
| XVIII | T18  |
| XIX   | T19  |
| XX    | T20  |
| XXI   | T21  |

### Jokers

| Color | Code |
| ----- | ---- |
| Black | JKB  |
| Red   | JKR  |
| White | JKW  |

## Card Instances

When a **deck** — consisting of one or more packs of cards — is generated, the card type code is appended with a **zero-based identifier for each instance**.

For example: a deck of four (4) standard 52-card packs would have these unique 5-digit codes for the multiple instances of the _Ace of Spades_:

- `SPA_0`
- `SPA_1`
- `SPA_2`
- `SPA_3`

You can have a maximum of eight (8) packs in a deck, for a total of 648 cards (81 * 8).

-----

Go back to [README.md](README.md)

Last updated: 2023-04-04
