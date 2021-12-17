const serverUrl = "https://mnm8y7sgzwz9.usemoralis.com:2053/server";
const appId = "G2GCPAtiCv6jepP4ybjQ4eeUUVj8LwXyHlmZbtDr";
Moralis.start({ serverUrl, appId }); 

const arbitrageToken = "0xd00ae08403B9bbb9124bB305C09058E32C39A48c";
const flashLoanContractAddress = "0xa93AA138b1b8FB81e7E56Fc669c2fF8a8A682e54";
const mockArbitrageAddress = "0xc3749FfE6A0FB7a247F74e5EabC964bDEa4a5AF5";

login();

async function login(){
    Moralis.Web3.enableWeb3().then(async function (){
        renderBridgeData();
        subscribeUpdateBridged();
        const chainIdHex = await Moralis.switchNetwork("0x4"); 
    });
}

