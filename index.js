const ffi = require('ffi-napi')

var lib = ffi.Library("simple-ffi/target/release/libsimple_ffi", {
    'my_sum' : ['int', ['int', 'int'] ],
    'my_minus' : ['int', ['int', 'int'] ]
})

const {my_sum, my_minus} = lib

let soma = my_sum(150,14)

let menos = my_minus(250, 48)

console.log(soma);
console.log(menos)