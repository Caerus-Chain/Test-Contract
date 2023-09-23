const { ethers } = require("hardhat");

const deployedAddress = require("../config/contractAddrs.json").testContract;

async function main() {
    // Get the deployed contract
    const testContract = await ethers.getContractAt("TestContract", deployedAddress);

    // Set slot0 to 42
    let tx = await testContract.setSlot0(42);
    await tx.wait();
    console.log("Set slot0 to 42");

    // Retrieve and log the value of slot0
    let value = await testContract.getSlot0();
    console.log("Retrieved slot0:", value.toString());

    // Store current block number
    const setBlockNumber = await ethers.provider.getBlockNumber();

    // Update slot0 to 52
    tx = await testContract.setSlot0(52);
    await tx.wait();
    console.log("Updated slot0 to 52");

    // Retrieve and log the updated value of slot0
    value = await testContract.getSlot0();
    console.log("Retrieved updated slot0:", value.toString());

    // Retrieve the value of slot0 using getSlot0Caerus with the stored block number
    const caerusValue = await testContract.getSlot0Caerus(setBlockNumber);
    console.log("Retrieved slot0 using getSlot0Caerus:", caerusValue.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
