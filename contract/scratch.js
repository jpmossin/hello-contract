
const fs = require("fs");
const Web3 = require("web3");

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.defaultAccount = web3.eth.coinbase;

const contractInfo = require("./hello_info.json");
const HelloContract = web3.eth.contract(contractInfo.abi);
const contract = HelloContract.at(contractInfo.address);

const greetingEvent = contract.Greeting();
greetingEvent.watch((err, event) =>{
    console.log("event", event);
});

   
contract.greet("Hello World!");
console.log(contract.greeting());
