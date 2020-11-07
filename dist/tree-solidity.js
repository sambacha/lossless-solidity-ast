
const buffer = new ArrayBuffer(592187);
const uint8 = new Uint8Array(buffer);

const WebAssemblyModule = function(deps) {
	if(!deps) {  
		const memory = new WebAssembly.Memory({initial: 256, maximum: 256});
		const env = {
			abortStackOverflow: _ => { throw new Error('overflow'); },
			table: new WebAssembly.Table({initial: 0, maximum: 0, element: 'anyfunc'}),
			tableBase: 0,
			memory: memory,
			memoryBase: 1024,
			STACKTOP: 0,
			STACK_MAX: memory.buffer.byteLength,
		};
		deps = {env};
	}
	return WebAssembly.instantiate(buffer, deps);
}

module.exports = WebAssemblyModule;