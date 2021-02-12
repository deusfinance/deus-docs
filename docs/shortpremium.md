---
id: shortpremium
title: How is the Short price calculated?
description: What is the Short Premium?

---




On Deus Finance Layer 1, all of the Registrars are tokenized when “conducted” by a conductor (can be the Deus DAO or any individual). <br/>

This “conducting event” creates the smart contract that is pegged 1:1 with the native Deus oracle that will feed the price to the contract. <br/>

 When the price of the registrar changes from the “conducting event” a short premium will be added to keep the short position token pegged to the Deus oracle 
 Short premiums are calculated from the percentage lost or gained since being conducted on the blockchain 
 Short premiums can be positive or negative compared to the current oracle price of a registrar <br/>
 When a short premium is higher than the registrar’s oracle price it indicates the value has gone down since tokenization  <br/>
 A lower short premium vs. the registrar’s oracle price indicates the price has moved up since tokenization <br/>
 Short premiums do not cost the short trader anything, it is simply a mechanism to keep the short token pegged to the oracle price <br/>

### Example: 
 A stock trades at $10 dollars when it is conducted and the next day it trades for $5 dollars. 
 If you decide to short it on the traditional stock market with $100 you will be short 20 shares.   
 When the stock price declines to $1 dollar and you buy back the shares you book $80 dollars in profit. 

 If you take the same short position in Deus with $100, you will pay a short premium of $5 because the asset price has fallen 50% since it was conducted.  
 You will receive 10 short tokens instead of receiving 20 “shares short” in traditional finance 
 However when the asset declines in price to $1 and you swap back into the Deus synchronizer the premium will have increased 80%  
 (from $5 to $1) and you will book the same $80 profit as in the traditional stock market example above. 

### Key Takeaway:  
- The “short premium” does not cost the trader anything. 
- Short sellers get to “keep” the premium they pay because the premium is a constantly changing percentage that mathematically adjusts the short token price to keep track of gains and losses on the blockchain.
- The short premium enables the smart contract to peg the short token to the oracle price via the conducting event and allows for the decentralized shorting of registrars. 

Here is an example of TSLA which went up in price since it was conducted:

![alt text](https://i.ibb.co/dL6mwvB/t.jpg "Comparison")

As you can see, it takes less money to buy 1 Tesla short token than it does to long 1 Tesla token in this example. 
If the TSLA price keeps rising, the short premium will continue to decline. 
Correspondingly, the owner of dTSLA-S will see their tokens lose value as the asset they are shorting is gaining in price.
