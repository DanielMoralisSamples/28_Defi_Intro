# Intro to Defi - Aave Flash Loan Lab

![Aave Banner](box-img-sm.png)

##Adapted from 
- *[aave/code-examples-protocol](https://github.com/aave/code-examples-protocol) by [mrdavey](https://github.com/mrdavey/).*
- *[fifikobayashi/AaveV2-BatchFlashDemo](https://github.com/aave/code-examples-protocol) by [fifikobayashi](https://github.com/fifikobayashi).*
- *[PatrickAlphaC/aave-flashloan-mix](https://github.com/PatrickAlphaC/aave-flashloan-mix) by [PatrickAlphaC](https://github.com/PatrickAlphaC).*

## Installation and Setup

- Clone the Repo. 
- Open a Moralis Account and set a server
- Get a link to connect your metamask to Avalanche Fuji (This is the network used in the code)
- Copy the contents of the solidity folder into Remix. 
- Connect your remix to injected web3 (Avalanche Fuji)
- Deploy the MockArbitrage and FlashloanDemo contract.
- Copy the addresses to the Logic.js in the UI folder.
- Launch the UI.
- Get Wavax from the Avalanche Faucet and Wrap some into Wavax (See references for the links to the Faucet and Wrapper contract)
- Create your own arbitrage by depositing Wavax in the MockArbitrage contract.
- Decide how much required Wavax your MockArbitrage will require to take the Arbitrage.
- Check the liquidity in the Aave staging protocol and provide your own liquidity if needed.
- Run the functions in the UI.