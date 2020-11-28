---
id: nutshell
title: In a Nutshell
description:
---

DEUS finance is a DeFi protocol that enables users to hold and trade blockchain derivatives of traditional assets such as stocks and indices on the Ethereum network.

It does so through [Registrars](registrar.md), virtual copies of assets or baskets of assets, pegged 1:1 to their real-world equivalents. Each Registrar is represented with its own ERC-20 token (rToken). The current market value of assets is continuously provided to the system via [oracles](oracles.md).

Assets can include cryptocurrencies, stocks, bonds, or commodities - virtually any asset whose value a market can capture. There will be mechanisms in place preventing the creation of fraudulent or illegal Registrars. Moreover, high-risk investments will be separated from those with low risks.

Users invest in Registrars through a platform called [Registrar Conductor](conductor.md). Their funds are moved to the treasury, and rTokens are minted in return. 

Once a user decides to sell their investment, they go to [DEUS Swap](swap.md), our decentralized exchange, during official stock trading hours (tokens can still be moved around the Ethereum blockchain outside the regular trading hours, creating a 24/7 secondary market).

rTokens are burned by Swap and an amount equivalent to the current market value of the underlying asset(s) is paid from [the treasury](treasury.md). Users may also trade their rTokens through other exchanges, such as Uniswap, or even stake them.

If by some chance rTokens significantly go up in value, and everyone decides to cash out at once, the treasury’s funds would not suffice. That’s why a major part of DEUS is incentivizing the provision of liquidity. 

In order to provide liquidity users go to the [Sands of Time Vaults](vaults.md), where a smart contract locks their tokens for a set period of time in exchange for yields. The longer the tokens are locked - the higher the reward. Together, the Vaults back a stablecoin called [DEA](dea-token.md) (latin for “goddess”, nothing to do with drug enforcement), the most important token in our ecosystem.

Our unique selling point is the decoupling of traders and LP’s. This is the difference between DEUS and projects like SNX or Linear Finance. We give traders the possibility to enter the markets without providing any collateral.
