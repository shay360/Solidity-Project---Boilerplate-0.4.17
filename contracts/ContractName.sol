pragma solidity ^0.4.17;

contract ContractName {

	string public message;

	function ContractName (string senderMessage) public { // constructor
		message = senderMessage;
	}

	function setMessage(string responseMessage) public {
		message = responseMessage;
	}
}