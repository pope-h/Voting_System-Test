// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../VotingSystem.sol";

interface IVotingSystemFactory {
    function createVotingSystem() external;

    function getVotingSystemClones() external view returns (VotingSystem[] memory);
}