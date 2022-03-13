# convert-bech32-address
Zero dependancy bech32 address converter for node.js, including browser javascript version.

Derives an address with a custom prefix, from a source BIP32 HD wallet address

### Install

From npm repo:
```bash
npm install convert-bech32-address
```
OR clone from GitHub repo:
```bash
git clone https://github.com/jasbanza/convert-bech32-address.git
```


### Node.js Usage:
```bash
node main.js cosmos1r5qkmvn9hnv0pugejr73639w07d2mughnm7qxa juno
```

#### Output:
```bash
juno1r5qkmvn9hnv0pugejr73639w07d2mugh9fampp
```

### Browser Usage:
- include the 3 javascript source files (OR the minified version: `script.min.js`) found in the `src` folder,
- calling the function: `lookup(address,prefix)` (found in `src\address.js`) will generate an address with a prefix derived from the source address


### Live Browser Example:
- view [https://jasbanza.github.io/convert-bech32-address/](https://jasbanza.github.io/convert-bech32-address/) or git clone this repo, and open `index.html` in your browser.
- Enter any wallet address, e.g. `cosmos1aaaaa...zzzz` and the prefix of the target address, e.g. `akash`
- Click `Convert` and your target address will be generated: `akash1aaaaa...yyyy`
