const ffi = require('ffi-napi')

var lib = ffi.Library("simple-ffi/target/release/libsimple_ffi", {
    'my_sum' : ['int', ['int', 'int'] ]
})

const {my_sum} = lib

let soma = my_sum(150,14)

console.log(soma);