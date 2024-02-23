// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy("mk4ywTDFJN5PAOiXOn3hwnhBgbAPivFy",config);

const main = async () => {
  // Wallet address
  const address = "vitalik.eth";

  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address);

 // Parse output
 const numNfts = nfts["totalCount"];
 const nftList = nfts["ownedNfts"];

 console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);

 let i = 1;

 for (let nft of nftList) {
   console.log(`${i}. ${nft.name}`);
   i++;
 }
};
main().catch((error) => {
    console.error("Error:", error);
  });