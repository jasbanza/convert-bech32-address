/*
Snippets taken from https://github.com/chainapsis/cosmosjs/blob/a2888c8b2d5f63064b67704de46e554ad755f495/src/common/address.ts
and adapted for JavaScript in the browser
 */

var bech32 = getLibraryFromEncoding("bech32");

function fromBech32(bech32Addr, prefix = null) {
  if (prefix === "") {
    throw new Error("Empty bech32 prefix");
  }
  const {
    prefix: b32Prefix,
    words
  } = bech32.decode(bech32Addr);
  if (prefix != null && b32Prefix !== prefix) {
    throw new Error("Prefix doesn't match");
  }
  return {
    from: bech32.fromWords(words),
    prefix: (prefix != null ? prefix : b32Prefix)
  };
}


function toBech32(words, prefix = null) {
  if (!prefix) {
    throw new Error("Empty bech32 prefix");
  }
  var ret_words = bech32.toWords(Buffer.from(words));
  return bech32.encode(prefix, ret_words);
}

function lookup(fromAddress, toPrefix) {
  return toBech32(fromBech32(fromAddress).from, toPrefix);
}
