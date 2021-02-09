---
id: deus
title: DEUS token (Value)
description: 'Benefit from constant buybacks, and a less volatile setup'
---
### DEUS can be seen as a Store of Value inside the Ecosystem. It's a proxy of the ethereum token.
#### This single unique feature distinguishes DEUS from the majority of coins. It enables the DEUS ecosystem itself to be more flexible and opens a world to unlimited possibilties.

---
- DEUS has very deep liquidity, a 1000 ETH buy at 0.0040 ETH only has around 10% slippage.
- The DEUS Token itself has NO usecase inside of the DEUS ecosystem other than being a stable backbone through its ETH Backing.
- DEA is the Token that will inherit all USECases in the DEUS Ecosystem
- DEUS is backed by Ethereum: [Treasury1](https://etherscan.io/address/0xD77700fC3C78d1Cb3aCb1a9eAC891ff59bC7946D) & [Treasury2](https://etherscan.io/address/0xc2fB644cd18325C58889Cf8BB0573e4a8774BCD2)
- Can be exchanged for Ethereum at any time on [DEUS Swap](https://app.deus.finance/swap). 
- The liquidity mining event created a price bottom for DEUS at 0.0015ETH.
- DEUS supply is infinite and DEUS price moves along the bonding curve. The curve, thus, has no upper limit.
- Buying on [DEUS Swap](https://app.deus.finance/swap) increases the supply. Higher supply means higher price. Buying on Uniswap is considered buying from a secondary market and does not increase the price/affect the bonding curve. 

___


#### For example:
Currently at 1,644,162 DEUS in circulation the price is at 0.0025 ETH.
At 2,317,537 DEUS in circulation the price would be 0.005 ETH.
The config of the market maker (bonding curve) is designed so that there is a steady, linear price progression ([visualized here](https://simulate.deus.finance)).

-----

### The Math used in the DEUS Bonding curve:

DeusPrice = [Treasury1](https://etherscan.io/address/0xD77700fC3C78d1Cb3aCb1a9eAC891ff59bC7946D) + [Treasury2](https://etherscan.io/address/0xc2fB644cd18325C58889Cf8BB0573e4a8774BCD2) - ReverseShiftAmount / ( DEUSsupply * 0.4) <br/>
reserveShiftAmount = firstReserve * (1e6 - (0.4*1e6)) / (1e6);
![Picture](https://i.ibb.co/94FRsDZ/image-2021-02-07-12-28-15.png "Comparison")

### Read the [DEUS continuous token offering blogpost](https://lafayettetabor.medium.com/deus-continious-token-model-faq-36953ca5e561) from Lafayette to understand everything better.
#### The Bonding Curve Model is based on the [Bancor Formulas](https://billyrennekamp.medium.com/converting-between-bancor-and-bonding-curve-price-formulas-9c11309062f5).