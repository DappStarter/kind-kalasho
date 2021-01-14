require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food render renew magic home hundred light army giant'; 
let testAccounts = [
"0x5a3bffb9c59e044ca6b83e84129bf0a71b53aa0be29b3ae437010f2e747fd11f",
"0xbece8928d202fab7b60200be47a0540922723364cff5433daf08799f26361ff3",
"0x558a8d1cd26bd666bd3340d693e008668265d99f22527607725a5648744dcf68",
"0x488c35bb502222bde3bd93067d21b711d8be52406f4d74a7f6dc10cac5efee91",
"0x58450fdba6c1f718473c635430e505a224384f311a4423bc6fff45a7906790e5",
"0x62cc0d597e311b30295490d3457082abc69abb8a4cb9df20b346f1eed8738669",
"0x61c675da3ef38f407d81c7dfd4f6cf4b6a46e97e5f1ee049ab5cb73bcdbb724b",
"0x1fa991208c362c156a82d94354cca3f19677f381889ec9e787ea676b975c5696",
"0xb61302f7e9770efcdb51704a0123dad682a5c9f1a171ff0bcfcab1765c082bba",
"0x259e3957f532b9816192e600c4cd122b63df8ec90fa3de94869da64dbb070c7e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
