function digital_root(n) {
    n = n.toString();
    let total = 0;
    myArray = n.split(''); //?
    for (let i = 0; i < myArray.length; i++) {
        total += parseInt(myArray[i]);
    }
    if (total.toString().length > 1) {
        return digital_root(total);
    }
    return total
}

console.log(digital_root(5234))