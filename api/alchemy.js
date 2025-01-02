const { Alchemy, Network } = require('alchemy-sdk');

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,  // Sesuaikan dengan jaringan Ethereum yang digunakan
};

const alchemy = new Alchemy(settings);

async function fetchContractData(contractAddress) {
  const contract = await alchemy.core.getContract(contractAddress);
  const contractData = await contract.getAllTokenHolders();  // Sesuaikan dengan kebutuhan Anda
  return contractData;
}

module.exports = { fetchContractData };
