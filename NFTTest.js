const ethers = require('ethers');
const BobaNFTJson = require("./BobaNFT.json")

const L2_NODE_WEB3_URL = "https://rinkeby.boba.network";

const main = async () => {

  const pk = "40ed5a206385a773e44d7476f6fa651670566b6f0b1cdaeff837ec06a64851f0"

  const L2Web3 = new ethers.providers.JsonRpcProvider(L2_NODE_WEB3_URL);
  const L2Wallet = new ethers.Wallet(pk).connect(L2Web3);

  const NFTContract = new ethers.Contract(
    "0x9E540Df3e02aA459F3CD03F31691024179c49B66",
    BobaNFTJson.abi,
    L2Wallet
  )

  const tx = await NFTContract.claimBoba('test')
  await tx.wait()

}

main()