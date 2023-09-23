const { ethers } = require("hardhat");
const assert = require("assert");

describe("TestContract Smart Contract", function () {
    let testContract;
    let setBlockNumber; // To store the block number after setting slot0 to 42

    before(async () => {
        const TestContract = await ethers.getContractFactory("TestContract");
        testContract = await TestContract.deploy();
        await testContract.deployed();
        console.log("testContract address:", testContract.address);
    });

    it("should initially set and retrieve slot0 correctly to 42", async function () {
        await testContract.setSlot0(42);
        const value = await testContract.getSlot0();
        assert.equal(value.toString(), "42", "Failed to set or retrieve initial slot0 value");

        setBlockNumber = await ethers.provider.getBlockNumber();
    });

    it("should update and retrieve slot0 correctly to 52", async function () {
        await testContract.setSlot0(52);
        const value = await testContract.getSlot0();
        assert.equal(value.toString(), "52", "Failed to update or retrieve new slot0 value");
    });

    it("should verify if tetTestContract retrieves 42 using the recorded block number", async function () {
        const value = await testContract.getSlot0Caerus(setBlockNumber);
        //TODO assert.equal(value.toString(), "42", "getSlot0Caerus did not return the expected value for the recorded block number");
    });
});
