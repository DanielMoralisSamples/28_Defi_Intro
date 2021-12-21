const serverUrl = "https://mnm8y7sgzwz9.usemoralis.com:2053/server";
const appId = "G2GCPAtiCv6jepP4ybjQ4eeUUVj8LwXyHlmZbtDr";
Moralis.start({ serverUrl, appId }); 

const arbitrageToken = "0xd00ae08403B9bbb9124bB305C09058E32C39A48c";
const flashoanContractAddress = "";
const mockArbitrageAddress = "";
const mockArbitrageABI = [{"inputs": [{"internalType": "uint256", "name": "_requiredFunds", "type": "uint256"}], "stateMutability": "nonpayable", "type": "constructor", "name": "constructor"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "address", "name": "taker", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "takerBalance", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "amountTaken", "type": "uint256"}], "name": "ArbitrageTaken", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "_from", "type": "address"}, {"indexed": true, "internalType": "address", "name": "_assetAddress", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "LogWithdraw", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "uint256", "name": "previousRequiredFunds", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "newRequiredFunds", "type": "uint256"}], "name": "RequiredFundsChanged", "type": "event"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "requiredFunds", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "_requiredFunds", "type": "uint256"}], "name": "setRequiredFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_assetAddress", "type": "address"}], "name": "takeArbitrage", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_assetAddress", "type": "address"}], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}];
const flasloanABI = [{"inputs": [{"internalType": "address", "name": "_addressProvider", "type": "address"}, {"internalType": "address", "name": "_arbitrageContract", "type": "address"}], "stateMutability": "nonpayable", "type": "constructor", "name": "constructor"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "_from", "type": "address"}, {"indexed": true, "internalType": "address", "name": "_assetAddress", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "LogWithdraw", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "address", "name": "oldArbitrageContract", "type": "address"}, {"indexed": false, "internalType": "address", "name": "newArbitrageContract", "type": "address"}], "name": "UpdatedArbitrageContract", "type": "event"}, {"inputs": [], "name": "ADDRESSES_PROVIDER", "outputs": [{"internalType": "contract ILendingPoolAddressesProviderV2", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "LENDING_POOL", "outputs": [{"internalType": "contract ILendingPoolV2", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address[]", "name": "assets", "type": "address[]"}, {"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}, {"internalType": "uint256[]", "name": "premiums", "type": "uint256[]"}, {"internalType": "address", "name": "initiator", "type": "address"}, {"internalType": "bytes", "name": "params", "type": "bytes"}], "name": "executeOperation", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_asset", "type": "address"}, {"internalType": "uint256", "name": "_amount", "type": "uint256"}], "name": "flashloan", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_newArbitrageContract", "type": "address"}], "name": "setArbitrageContract", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_assetAddress", "type": "address"}], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"stateMutability": "payable", "type": "receive"}];
const erc20ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

login();

async function login(){
    Moralis.Web3.enableWeb3().then(async function (){
        const chainIdHex = await Moralis.switchNetwork("0xA869");
        populateArbitrage(); 
    });
}

async function populateArbitrage (){
    document.getElementById("requiredAmount").value = await getRequiredAmount()/1e18;
    document.getElementById("arbitrageAmount").value = await getArbitrageAmount()/1e18;
}

async function takeArbitrage() {
    const web3 = await Moralis.enableWeb3();
    const options = {
        contractAddress: mockArbitrageAddress,
        functionName: "takeArbitrage",
        abi: mockArbitrageABI,
        params: {
          _assetAddress: arbitrageToken
        },
      };
    const receipt = await Moralis.executeFunction(options);
    console.log(receipt)
};

async function getRequiredAmount() {
    const web3 = await Moralis.enableWeb3();
    const options = {
        contractAddress: mockArbitrageAddress,
        functionName: "requiredFunds",
        abi: mockArbitrageABI,
        params: {
        },
      };
    const requiredAmount = await Moralis.executeFunction(options);
    return requiredAmount;
};

async function getArbitrageAmount() {
    const web3 = await Moralis.enableWeb3();
    const options = {
        contractAddress: arbitrageToken,
        functionName: "balanceOf",
        abi: erc20ABI,
        params: {
            _owner: mockArbitrageAddress
        },
      };
    const arbitrageAmount = await Moralis.executeFunction(options);
    return arbitrageAmount;
}


async function flashloan() {
    const web3 = await Moralis.enableWeb3();
    const amount = await Moralis.Units.Token(document.getElementById("flashloanAmount").value,"18");
    const options = {
        contractAddress: flashoanContractAddress,
        functionName: "flashloan",
        abi: flasloanABI,
        params: {
            _asset: arbitrageToken,
            _amount: amount
        },
      };
    const flashloanReceipt = await Moralis.executeFunction(options);
    console.log(flashloanReceipt);
    window.alert("operation concluded with hash " + flashloanReceipt["transactionHash"])
    return flashloanReceipt;
}

async function withdraw() {
    const web3 = await Moralis.enableWeb3();
    const options = {
        contractAddress: flashoanContractAddress,
        functionName: "withdraw",
        abi: flasloanABI,
        params: {
            _assetAddress: arbitrageToken
        },
      };
    const withdrawReceipt = await Moralis.executeFunction(options);
    console.log(withdrawReceipt);
    window.alert("operation concluded with hash " + withdrawReceipt["transactionHash"])
    return withdrawReceipt;
}

