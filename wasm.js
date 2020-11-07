const binary = require('fs').readFileSync('tree-sitter-Solidity.wasm');
WebAssembly.instantiate(binary).then(({ instance }) => {
  console.log(instance.exports.add(40, 2));
});