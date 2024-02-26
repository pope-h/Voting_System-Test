// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IVotingSystem {
    function vote() external;

    function addToWhitelist(address _address) external;

    function removeFromWhitelist(address _address) external;

    function getTotalVotes() external view returns (uint256);
}