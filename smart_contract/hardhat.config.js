//https://eth-ropsten.alchemyapi.io/v2/qEDBHlnsVi2RbWncv-6O1moeHPMcHkU4
require('@nomiclabs/hardhat-waffle'); // plug-in to built smart contracts test

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/qEDBHlnsVi2RbWncv-6O1moeHPMcHkU4',
      accounts: ['1b52e68f50ba19030880559c03d9be05c3f2c3a3a89b9d94cb3925fc430c744a'],
    },
  },
};