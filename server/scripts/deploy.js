const main = async() => {
  const contractFactory = await ethers.getContractFactory('TaskContract');
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log("Contract deploy to: ", contract.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();