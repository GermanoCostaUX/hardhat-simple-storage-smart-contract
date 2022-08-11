const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // known as "anonymous function" in JS
    // const blockTest = async function() => {}
    // async function blockTask() {}
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNUmber()
        console.log(`Current Block Number: ${blockNumber}`)
    }
)

module.exports = {}
