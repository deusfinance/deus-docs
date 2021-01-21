---
id: nutshell
title: What is DEUS in a Nutshell?
description:
---

DEUS finance is a DeFi protocol that enables users to hold and trade blockchain derivatives of traditional assets such as stocks and indices on the Ethereum network.

It does so through [Registrars](registrar.md), virtual copies of assets or baskets of assets, pegged 1:1 to their real-world equivalents. Each Registrar is represented with its own ERC-20 token (wToken). The current market value of assets is continuously provided to the system via [oracles](oracles.md).

Assets can include cryptocurrencies, stocks, bonds, or commodities - virtually any asset whose value a market can capture. There will be mechanisms in place preventing the creation of fraudulent or illegal Registrars. Moreover, high-risk investments will be separated from those with low risks.

Traders invest in Registrars through a platform called [DEUS Swap](swap.md), our decentralized exchange. Their funds are moved to the treasury, called Conductor Custody, and wTokens are minted in return. 

Once a trader decides to sell their investment, they go to Swap during official stock trading hours (tokens can still be moved around the Ethereum blockchain outside the regular trading hours, creating a 24/7 secondary market). wTokens are burned by Swap and an amount equivalent to the current market value of the underlying asset(s) is paid from [the treasury](treasury.md). Users may also trade their wTokens through other exchanges, such as Uniswap, or even stake them.

If by some chance wTokens significantly go up in value and everyone decides to cash out at once, the treasury’s funds would not suffice. That’s why a major part of DEUS is incentivizing the provision of liquidity. 

In order to provide liquidity LPs go to the [Sands of Time Vaults](vaults.md), where a smart contract locks their tokens for a set period of time in exchange for yields. The longer the tokens are locked - the higher the reward. The rewards are paid out in [DEA](dea.md) (latin for “goddess”), the most important token in our ecosystem.

Our unique selling point is the decoupling of traders and LP’s. This is the difference between DEUS and projects like SNX or Linear Finance. We give traders access to the stock market without requiring them to provide any collateral.
