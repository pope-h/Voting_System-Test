import { ethers } from "hardhat";

async function main() {

  const votingSystemFactoryContract = "0x71f38cc309953993EA6d7b2521ADc714D825f0eb";
  const VotingSystemFactory = await ethers.getContractAt("IVotingSystemFactory", votingSystemFactoryContract);

  const createVotingSystemTx = await VotingSystemFactory.createVotingSystem();
  await createVotingSystemTx.wait();

  console.log(`Successfully created a new Voting System`);

  const clones = await VotingSystemFactory.getVotingSystemClones();

  console.log(`Successfully created a new Voting System with address: ${clones}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});