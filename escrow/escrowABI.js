
// Set this address to the escrow contract you deployed in Remix.
const escrowContractAddress = '0xc337B3F7c7ddefc5bf109cF59f1Df7c634800EF6';

// Set this address to the token you want to send to the escrow contract.
const escrowTokenAddress = "0x20A123112Fa53A1aeCe40D3b6af4C4A9d4e2a325";

// Below are 2 ABIs you need to copy from Remix: the contract and the token.
//	See the Loom video for instructions.
const escrowABI = [
	{
		"inputs": [],
		"name": "cancel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "paySeller",
				"type": "uint256"
			}
		],
		"name": "closeEscrow",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "escrowAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "escrowSeller",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "escrowMediator",
				"type": "address"
			}
		],
		"name": "openEscrow",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "amountToEscrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mediatorAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
