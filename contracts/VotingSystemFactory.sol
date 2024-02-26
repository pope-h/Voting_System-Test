// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./VotingSystem.sol";

contract VotingSystemFactory {
    event VotingSystemDeployed(address indexed deployedAddress, address indexed creator, uint256 timestamp);
    VotingSystem[] votingSystemClones;

    function createVotingSystem() external {
        VotingSystem newVotingSystem = new VotingSystem();
        emit VotingSystemDeployed(address(newVotingSystem), msg.sender, block.timestamp);
        votingSystemClones.push(newVotingSystem);
    }

    function getVotingSystemClones() external view returns (VotingSystem[] memory) {
        return votingSystemClones;
    }
}