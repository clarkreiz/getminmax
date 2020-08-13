function mul(factor) {
    return number => number * factor;
}



let twice = mul(2);

console.log(twice(16));

