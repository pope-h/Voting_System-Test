# VotingSystem Contract

The VotingSystem contract is a Solidity smart contract developed for managing a simple voting system on the Ethereum blockchain. It provides functionalities for creating a voting system, casting votes, and managing a whitelist of addresses allowed to vote.

## Features

- **Vote Casting**: Any address whitelisted by the contract owner can cast a vote.
- **Whitelist Management**: The contract owner can add or remove addresses from the whitelist.
- **Factory Contract**: This contract can be deployed multiple times using the `VotingSystemFactory` to create separate instances of voting systems.

## Usage

### Deployment

To deploy the contract, you can use the provided `VotingSystemFactory` contract, which allows for the creation of multiple instances of the `VotingSystem`.

The `VotingSystemFactory` contract was deployed on the Sepolia testnet with the following information:

- **Voting System Factory Contract Address**: `0x71f38cc309953993EA6d7b2521ADc714D825f0eb`
- **Voting System Contract Address**: `0x5377A6bDa3a6e7Cf067a88dC74bFfa5e63E63AE3`
- **Transaction Hash**: `0x3161c17b6009dcd24d3fdd3273c7ed02f5c0b72ae6f2ab9c269c98c2ba2d6123`

### Interaction

Once deployed, you can interact with the deployed `VotingSystem` contract through its functions:

- `vote()`: Casts a vote. The caller must be whitelisted.
- `addToWhitelist(address _address)`: Adds an address to the whitelist. Only the contract owner can call this function.
- `removeFromWhitelist(address _address)`: Removes an address from the whitelist. Only the contract owner can call this function.
- `getTotalVotes()`: Retrieves the total number of votes casted.

## Development

The contract is written in Solidity and can be compiled and deployed using Ethereum development frameworks like Hardhat or Truffle.

## Testing

Ensure comprehensive testing of the contract's functionalities before deploying to a live network. You can use tools like Hardhat or Truffle for writing and running tests.

## License

This contract is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.