require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note situate coach guess clip success slot'; 
let testAccounts = [
"0xdc5fdf37536bad157e5cc73705c2a8c2b18705839b6c6715f0dc167f1c9196bf",
"0x0a9466b2709342f0b838779a3fb1783a94471ec000134eaaf54bb7ee2a916f96",
"0xc2851296d468fb347050b1049b5bf3c403c3add7fa617178408468d67e9a5ffb",
"0xe928a05a3556e1d0d63e94a77e5739fb58c221cf4cb47bdc4160b6789a944b08",
"0xb3121ef6ba3e9f1b7a15ec9a2594e1989066375715aabcb20dfa6ed035da1e12",
"0xe9a844d3fdeedd6e8731293a8223253857d7b3c4da2956c2fa5922d008e7231b",
"0x7fc9f51524b6c85393fe0cdb69c7fb523c0c12f939a0c161df1a3c711086bfc3",
"0x35a756de468afd6be9e4fcf90e3c3479d32c17ed9e45e8e6c259813f4ff03ac0",
"0x52d869a757da9cbefd4be5cb57f85a280d34f18f6975896a906762454ad53bf2",
"0x6928168009edab4b2828e2d6bf0f7db905a33b59c9a9b3945e855a2358766072"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

