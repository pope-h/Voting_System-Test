import { ethers } from "hardhat";

async function main() {

  const votingSystemContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const VotingSystem = await ethers.getContractAt("IVotingSystem", votingSystemContractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});