// SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;

import { Withdrawable } from "./Withdrawable.sol";
import "@openzeppelin/contracts@3.0.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@3.0.0/token/ERC20/SafeERC20.sol";


contract MockArbitrage is Withdrawable{

    event ArbitrageTaken(address taker, uint takerBalance, uint amountTaken);
    event RequiredFundsChanged (uint previousRequiredFunds, uint newRequiredFunds);

    uint public requiredFunds;

    constructor (uint _requiredFunds) public {
        requiredFunds = _requiredFunds;
    }

    function takeArbitrage(address _assetAddress) external {
        address _taker = msg.sender;
        uint _takerBalance = ERC20(_assetAddress).balanceOf(address(_taker));
        require (_takerBalance >= requiredFunds, "Not rich enough to take advantage of this arbitrage");
        uint _assetBalance = ERC20(_assetAddress).balanceOf(address(this));
        ERC20(_assetAddress).safeTransfer(_taker, _assetBalance);
        emit ArbitrageTaken(_taker, _takerBalance, _assetBalance);
    }

    function setRequiredFunds(uint _requiredFunds) external onlyOwner {
        uint _previousRequiredFunds = requiredFunds;
        requiredFunds = _requiredFunds;
        emit RequiredFundsChanged(_previousRequiredFunds, _requiredFunds);
    }
}