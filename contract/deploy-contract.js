const fs = require("fs");
const Web3 = require("web3");

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

function handleContractEvent(err, contract) {
    if (err) throw err;
    if (!contract.address) {
        console.log("Waiting to be mined, transaction hash:", contract.transactionHash);
    }
    else {
        console.log("Contract mined! Address:", contract.address);
        const contractInfo = {
            address: contract.address,
            abi: contract.abi
        };
        fs.writeFileSync("./hello_info.json", JSON.stringify(contractInfo), "utf8");
    }
}


function deploy(source) {
    const compiled = web3.eth.compile.solidity(source.replace(/\n/g, ""));
    contractData = (compiled.hello || compiled['<stdin>:hello']); // after upgrading geth suddenly the key was '<stdin>:hello' instead of just 'hello'
    const HelloContract = web3.eth.contract(contractData.info.abiDefinition);
    HelloContract.new({
        from: web3.eth.coinbase,
        data: contractData.code,
        gas: 3e5
    }, handleContractEvent);
}

fs.readFile("./hello.sol", 'utf8', (err, data) => {
    if (err) throw err;
    deploy(data)
});



