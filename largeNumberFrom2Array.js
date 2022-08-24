const largeNumberFromTowArray = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    const maxNumber = Math.max(...newArray)
    return maxNumber;
}

const arr1 = [2, 5, 7, 1578, 75, 48, 556, 56];
const arr2 = [2, 5, 7798, 48, 2, 2518, 5];
console.log(largeNumberFromTowArray(arr1, arr2));