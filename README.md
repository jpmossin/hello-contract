A simple example of using web3 to interact with ethereum.

* contract/
 A contract for storing a greeting on the blockchain, together with some code for deploying the contract. Similar to the example given here: https://www.ethereum.org/greeter.
* server/ A http server that listens to events from the greeting contract.
   
To try on a local testnest using geth, start geth with for example:
"$ geth --dev --rpc --unlock 0 --mine --minerthreads 1 console". 
Then deploy the contract with deploy-contract.js, and interact with the contract with
scratch.js or server.js