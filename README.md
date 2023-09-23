# TestContract
The `TestContract` is designed to interact with Caerus's storage slots. It allows users to set and get a storage variable (`slot0`) and offers a method to fetch the storage value based on a historical block number.

### Methods:
1. **setSlot0(uint256 _slot0)**
- Sets the value of `slot0` to the provided integer `_slot0`.
2. **getSlot0()**
- Returns the current value stored in `slot0`.
3. **getSlot0Caerus(uint256 blockNumber)**
- Fetches the value of `slot0` at a specified block number.
- Throws an error if the provided block number is greater than or equal to the current block number.

## Set Up Configuration:
1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

For Linux or macOS:
```
cp .example.env .env
```
For Windows:
```
copy .example.env .env
```

## Quick Start Guide
### 1. Installation:
Run `npm install` to install the necessary dependencies. Clone the repository to your local system.
```
npm install
```

### 2. Deployment:
Run the following command to compile the contracts using the Solidity compiler and deploy the `TestContract` to your Caerus network.
```
npx hardhat run scripts/deploy.js --network caerus
```
 
### 3. Interaction:
Before running the script, make sure to replace the placeholder contract address in `test.js` with your deployed contract address.
```
npx hardhat run scripts/test.js --network caerus
```
- Use the `setSlot0` function to change the value of `slot0`.
- Use the `getSlot0` and `getSlot0Caerus` functions to fetch the value stored in `slot0`.

### 4. Running Tests:
Run the following command to execute the contract tests. Make sure you've written the tests in your Hardhat project's `test` directory.
```
npx hardhat test
```

## Conclusion
If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!