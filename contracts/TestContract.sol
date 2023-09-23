// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract TestContract {
    uint256 public slot0;

    function getSlot0() external view returns (uint256) {
        return slot0;
    }

    function setSlot0(uint256 _slot0) external {
        slot0 = _slot0;
    }

    function getSlot0Caerus(
        uint256 blockNumber
    ) external view returns (uint256 output) {
        require(blockNumber < block.number);
        // return
        // uint256( // type casting (bytes32 => uint256)
        // caerus(
        //     address(this), // account
        //     0, // slot number
        //     blockNumber // past block number
        // )
        // );

        uint256 slotNumber = 0;
        bytes memory args = abi.encodePacked(
            address(this),
            slotNumber,
            blockNumber
        );
        (, bytes memory returnData) = address(0x13).staticcall(args);
        return uint256(bytesToBytes32(returnData));

        // uint256 slotNumber = 0;
        // bytes memory args = abi.encodePacked(
        //     address(this),
        //     slotNumber,
        //     blockNumber
        // );
        // assembly {
        //     if iszero(
        //         staticcall(
        //             not(0),
        //             0x13,
        //             add(args, 32),
        //             mload(args),
        //             output,
        //             0x32
        //         )
        //     ) {
        //         revert(0, 0)
        //     }
        // }
    }

    function bytesToBytes32(
        bytes memory source
    ) public pure returns (bytes32 result) {
        require(
            source.length <= 32,
            "TestContract::bytesToBytes32: Source must be less than or equal to 32 bytes"
        );

        // Explicitly convert each byte in the source to fill the bytes32
        for (uint256 i = 0; i < source.length; i++) {
            result |= bytes32(source[i] & 0xFF) >> (i * 8);
        }
        return result;
    }
}
