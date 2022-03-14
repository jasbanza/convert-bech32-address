/*
# example node.js application. Run the following command
 node main.js cosmos1r5qkmvn9hnv0pugejr73639w07d2mughnm7qxa juno

 */
var converter = require('./convert-bech32-address.js');

const args = process.argv.slice(2);

var newAddress = converter.lookup(args[0],args[1]);

console.log(newAddress);
