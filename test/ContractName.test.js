const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor function
const web3 = new Web3(ganache.provider());