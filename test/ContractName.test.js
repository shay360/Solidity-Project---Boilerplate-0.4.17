const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor function
const web3 = new Web3(ganache.provider());
const mocha = require('mocha');

let accounts;
beforeEach(async () => {
	// Get a list of test accounts
 accounts = await web3.eth.getAccounts();
	// Use account for contract deployment
});

describe('Contract Test', () => {
	it('Deploy Contract', () => {
		console.log(accounts);
	});
});