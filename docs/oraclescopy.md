---
id: ooracles
title: Oracles
description: What are oracles and why do we use them?
---


## What is an oracle?

Oracles provide smart contracts with data. They serve as bridges between blockchains and the real world. Oracles allows DEUS to ensure that the price of tokenized assets is equivalent to that of their real-world counterparts.

## How does our oracle system work?

1. User goes to DEUS Swap to purchase asset
2. DEUS Swap calls the nodes
3. Nodes get data from the api
4. Nodes tell DEUS Swap and the blockchain that the price user wanted for asset matches api price feed in real time

*Since there are multiple nodes they double check for malicious inputs or erroneous prices.*


## Why create our own oracles and not use others?
Chainlink is building general purpose oracles, it is good and can do multiple tasks, but not the best at specific tasks. Deus is more specific, providing live and infinite prices on demand. This helps us solve the main issue that other protocols have which is lag in price feed that allows for frontrunning. There are two phases: centralized oracles and decentralized oracles. For the centralized phase there is always three oracles signing the price and there must be at least two signing the same price. For the decentralized phase there will be a public node system and there will be a double check by the system.


*To make the oracles fail-safe we will connect them to several APIs. If one of the data providers malfunctions or gets hacked and its input significantly deviates from others it will automatically be blocked by the smart contract without halting the system.*
