import { ethers } from "hardhat";

async function main() {

  // TxHash = "0x3161c17b6009dcd24d3fdd3273c7ed02f5c0b72ae6f2ab9c269c98c2ba2d6123";

  const votingSystemFactoryContract = "0x71f38cc309953993EA6d7b2521ADc714D825f0eb";
  const VotingSystemFactory = await ethers.getContractAt("IVotingSystemFactory", votingSystemFactoryContract);

  const createVotingSystemTx = await VotingSystemFactory.createVotingSystem();
  await createVotingSystemTx.wait();

  console.log(`Successfully created a new Voting System`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});