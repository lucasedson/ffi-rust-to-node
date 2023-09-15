#[no_mangle]
pub extern "C" fn my_sum(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub extern "C" fn my_minus(a: i32, b: i32) -> i32 {
    return a - b;
}
