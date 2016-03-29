const
    fs = require("fs"),
    http = require("http"),
    Web3 = require("web3");


function getContract() {
    const web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    const contractInfo = require("../contract/hello_info.json");
    return web3.eth.contract(contractInfo.abi).at(contractInfo.address);
}

const greetings = [];
const helloContract = getContract();
helloContract.Greeting().watch((err, event) => {
    if (err) throw err;
    greetings.push(event.args);
});

http.createServer(function (req, resp) {
    if (req.method === "GET") {
        resp.end(JSON.stringify({
            address: helloContract.address,
            greetings: greetings
        }))
    }
    resp.end();
}).listen(3000, () => console.log("Running on 3000"));
