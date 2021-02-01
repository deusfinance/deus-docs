---
id: oracles
title: Oracles
description: What are oracles and why do we use them?
---


## What is an oracle?

Oracles provide smart contracts with data. They serve as bridges between blockchains and the real world. Oracles allow DEUS to ensure that the price of tokenized assets is equivalent to that of their real-world counterparts.

## How does our oracle system work?

1. User goes to DEUS Swap to purchase an asset
2. DEUS Swap calls the nodes
3. Nodes get data from the API
4. Nodes tell DEUS Swap and the blockchain that the price user wanted for asset matches api price feed in real time

*Multiple nodes double check for malicious inputs or erroneous prices.*


## Why create our own oracles and not use others?

Oracles are at the core of DEUS ecosystem which is why we’ve had to create and secure our own oracles. Chainlink and other oracle providers are building general purpose oracles which are useful for a range of functions, but are not equipped for actioning specific tasks. Deus oracles are designed to be more specialized at providing an infinite amount of live prices on demand. This helps us solve the main issue where other protocols suffer - a lag in price feed which allows for frontrunning. Deus oracles will have two phases: centralized and decentralized oracles. We will start with a centralized phase, which will always have three oracles signing the price, with at least two out of the three having to sign the exact same price. Afterwards, when the decentralized phase has been developed, we will have a public node system with a double-check run by the system itself.


*We will connect our oracles to several APIs in order to make them categorically fail-safe. 
If one of the data providers malfunctions, or gets hacked and its input significantly deviates from others, it will automatically be blocked by the smart contract without halting the system.*
