// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VotingSystem {
    address public owner;
    uint256 totalVotes;
    mapping(address => bool) public whitelist;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    event VoteCasted(address indexed voter);

    constructor() {
        owner = msg.sender;
    }

    function vote() external {
        require(whitelist[msg.sender], "Address not whitelisted for voting");
        totalVotes++;
        emit VoteCasted(msg.sender);
    }

    function addToWhitelist(address _address) external onlyOwner {
        whitelist[_address] = true;
    }

    function removeFromWhitelist(address _address) external onlyOwner {
        whitelist[_address] = false;
    }

    function getTotalVotes() external view returns (uint256) {
        return totalVotes;
    }
}