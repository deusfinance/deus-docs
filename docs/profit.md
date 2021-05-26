---
id: profit
title: Collateral Model
description: 'How are trades collateralized?'
---

### The DEUS Collateral system

The best overview of how the DEUS collateral system works can be taken from the Radix Podcast with Piers & Lafayette.
https://www.youtube.com/watch?v=v_q5RaxXWWU&t=666s

### Abstract
Trading is usually referred to as a zero-sum game because gaining is equivalent to someone else losing. This is the long-term means traders paying each other out. 
Now, at the beginning, where there is a disbalance of traders or more are just profiting, then losing the exchange is the one that pays out.

The overall collateral bigger picture: <br/>
(((((((Longs / Shorts ) -  Funding rate (V2) ) Synchronizer Balance) Vaults) DEA Insurance Fund ) DEUS ETH Treasury)

1. Longs pay Shorts, <br/>
2. A funding rate gets applied on an hourly basis (will be implemented in DEUS V2) Funding rates explainer: https://www.binance.com/en/support/faq/360033525031
3. initial / short term liquidity shortages are backed up by the synchronizer balance itself, ETH MAINNET (0x7a27a7BF25d64FAa090404F94606c580ce8E1D37). <br/>
4. Vaults as explained in the next Section
5. DEA Insurance Fund covers Black Swan Events (currently at 18 Million Dollar) ETH Mainnet 0xd9775d818fc23e07ac4b8efd4c58972f7c59bc0f[https://etherscan.io/address/0xd9775d818fc23e07ac4b8efd4c58972f7c59bc0f]
6. DEUS ETH Treasury, covers the whole system as a last resort.


## DEUS V1 How does it currently work?

DEUS V1 is mainly based on over-collateralization, meaning Liquidity Providers or so-called "Vault Stakers" are locking, <br/>
as collateral approved assets into timelock contracts the so-called "Vaults." <br/>

#### Date: April 2021 $37,729,725 locked as collateral.
can be verified here in real-time:

https://app.deus.finance/tvl.json <br/>
````

Dea    0x1591Da306e9726CF8a60BfF1CE96d7714D7b24cd

Deus   0xF8bcAF889F60E3d277EA0139e75047a0301D3307 

Uni-DE 0xc8c91801Bed699598b5483F2ad55f89eBd35157F 

Uni-DU 0x4D01703442509233eFa9879E638278a59b4A5EBB 

Uni-DD 0xEC7269Ebb7D219C905c28E3fD5Cc35F30dfB870b 
````
Then there is the Synchronizer Cap, which is currently set to 1,000,000 DAI on xDAI & 500,000 DAI on ETH Mainnet, so a total of 1,500,000 DAI.
The over-collateralization rate is, therefore, currently set to 1:25.


For every dollar that can be traded on the DEUS platform, 25 Dollars have to be locked inside the vaults.

A more detailed description of how exactly the Profit is transferred from the Vaults to the Synchronizers will be released together with the Vault exit system currently being developed.



### How will DEUS V2 and the funding work?

When the information from the Radix & DEUS podcast wasn't enough for you yet, stay tuned. We are currently working on a full Whitepaper describing our Ideas and planned implementations of a fully decentralized funding system.





