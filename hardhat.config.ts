import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
    ],   
  }, 
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      // gasLimit: 6000000000,
      // defaultBalanceEther: 10,
    },
    // goerli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/ALCHEMY-KEY",
    //   accounts: ["PRIVATE-KEY"],
    //   gasPrice: 20000000000,
    // }
  }
};

export default config;
