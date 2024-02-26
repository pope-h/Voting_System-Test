import { ethers } from "hardhat";

async function main() {

  const votingSystemContractAddress = "0x5377A6bDa3a6e7Cf067a88dC74bFfa5e63E63AE3";
  const VotingSystem = await ethers.getContractAt("IVotingSystem", votingSystemContractAddress);

  const initialTransactionTx = await VotingSystem.getTotalVotes();

  console.log(`Total Votes: ${initialTransactionTx}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});