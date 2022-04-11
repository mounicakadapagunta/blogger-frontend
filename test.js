const chocolatesfromWrapper = (chocolates, wrapper) => {
    let newVal = Math.floor((chocolates + wrapper) / 3);
    let newWrapper = Math.floor((chocolates + wrapper) % 3);
    return { newVal, newWrapper };
};

const chocolatesConversion = (amt) => {
    let flag = true;
    let price = 1;
    let wrapperChocolate = 3;
    let totalChocolates = 0;

    let initialChocolates = amt * price;

    let newChocolates = Math.round(initialChocolates / wrapperChocolate);

    totalChocolates = newChocolates + initialChocolates;

    console.log("Chocolates at 1st step", totalChocolates);

    let remainingWrapper = Math.floor(initialChocolates % wrapperChocolate); // 2

    let newChoc = newChocolates;
    let newWrapper = remainingWrapper;
    while (flag) {
        if (newChoc + newWrapper >= wrapperChocolate) {
            console.log(newChoc, newWrapper);
            let returnedCHoc = chocolatesfromWrapper(newChoc, newWrapper);

            totalChocolates = totalChocolates + returnedCHoc.newVal;
            console.log("After function", returnedCHoc, totalChocolates);
            newChoc = returnedCHoc.newVal;
            newWrapper = returnedCHoc.newWrapper;
        } else {
            flag = false;
        }
    }
    return totalChocolates;
};

console.log(chocolatesConversion(100));