---
id: oracles
title: Oracles
description: What are oracles and why do we use them?
---

In order to ensure that the price of tokenized assets is equivalent to that of their real counterparts Conductor needs a realiable source of information that would be updated continuously. Oracles exist for just this purpose. They allow smart contracts to operate with data from the real world.

DEUS oracles are currently being built internaly utilizing open source technology.

To make the oracles fail-safe we will connect them to several APIs. If one of the data providers malfunctions or gets hacked and its input significantly deviates from others, it will automatically get blocked by the smart contract without halting the system.
