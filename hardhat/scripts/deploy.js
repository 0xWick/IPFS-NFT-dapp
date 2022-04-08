const { ethers } = require("hardhat")
require("dotenv").config({ path: ".env" });

async function main() {
    // URL from where we can extract the metadata for a Azuki
    const metadataURL = "ipfs://QmXekb3VkENaB8TZ7ZgGNcT99UuEGg3GWXyFFd4GHCDu53"

    /*
    A Contract Factory in ethers.js is an abstraction used to deploy new smart contracts,
    so LW3PunksContract here is a factory for instances of our LW3Punks contract
    */
    const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

    // deploy the contract
    const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

    await deployedLW3PunksContract.deployed();

    // Print the address of the deployed contract
    console.log("LW3Punks Contract Address", deployedLW3PunksContract.address);
}

// Call the main function and catch if there is any error

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })