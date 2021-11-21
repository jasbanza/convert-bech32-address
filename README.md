# convert-bech32-address
Zero dependancy bech32 address converter, in javascript for browsers.

Derives an address with a custom prefix, from a source BIP32 HD wallet address


### Usage:
- include the 3 javascript source files in the "lib" folder.
- calling the function: `lookup(address,prefix)` will generate an address with a prefix derived from the source address

### Example:
- Git clone this repo, and open `test.html` in your browser.
- Enter any wallet address, e.g. `cosmos1aaaaa...zzzz` and the prefix of the target address, e.g. `akash`
- Click `Convert` and your target address will be generated: `akash1aaaaa...yyyy`
