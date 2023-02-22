require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/HVYIe_Ipr3f7h8_BsNNf6ahNfmDGZ2A6",
      // url: process.env.POLYGON_MUMBAI,
      accounts: [
        `0x${"b7377c080931d72d40a22cf075d57d2033de99eeb5ed5c75f0721e2d2a51dc87"}`,
      ],
    },

    // fuji: {
    //   url: `Your URL`,
    //   accounts: [
    //     `0x${"Your Account"}`,
    //   ],
    // },
  },
};
