export const supportedChains = [11155111, 84531]; // ChainId

export const networkInfoMap = {
  11155111: {
    chainId: `0x${(11155111).toString(16)}`,
    chainName: "Sepolia test network",
    rpcUrls: ["https://sepolia.infura.io/v3/"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
  },
  84531: {
    chainId: `0x${(84531).toString(16)}`,
    chainName: "Base Goerli",
    rpcUrls: ["https://goerli.base.org/"],
    blockExplorerUrls: ["https://goerli.basescan.org/"],
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
  },

  //   80001: {
  //     chainId: `0x${(80001).toString(16)}`,
  //     chainName: "Mumbai Testnet",
  //     rpcUrls: ["https://polygon-mumbai.g.alchemy.com/v2/"],
  //     blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  //     nativeCurrency: {
  //       name: "MATIC",
  //       symbol: "MATIC",
  //       decimals: 18,
  //     },
  //   },
};
