const HDWalletProvider = require("@truffle/hdwallet-provider");
const WanProvider = require('wanchain-truffle-sdk').WanProvider;
const wanProvider = new WanProvider("", "https://gwan-ssl.wandevs.org:46891");

require("dotenv").config({ path: `./.env.prod` });

module.exports = {
  networks: {
    development: {
      protocol: "http",
      host: "localhost",
      port: 8545,
      gas: 8000000,
      gasPrice: 5e9,
      networkId: "*",
    },
    ropsten: {
      provider: wanProvider,
      networkId: 3,
      gas: 10000000,
      gasPrice: 10e9,
    },
    mainnet: {
      provider: wanProvider,
      networkId: 1,
      gas: 10000000,
      gasPrice: 10e9,
    },
    xdai: {
      provider: () =>
        new HDWalletProvider(
          process.env.deployer_mnemonic,
          `https://dai.poa.network/`
        ),
      networkId: 100,
      gas: 8000000,
      gasPrice: 1e9,
    },
    personalGanache: {
      provider: () =>
        new HDWalletProvider(
          process.env.deployer_mnemonic,
          "https://dark-forest.online:8545"
        ),
      gas: 8000000,
      gasPrice: 1e8,
    },
  },
};
