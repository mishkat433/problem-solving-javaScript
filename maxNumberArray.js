function maxnumber_from_Array(array) {
    let initial = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (initial < array[i]) {
            initial = array[i]
        }
    }
    return initial
}
const arr = [4, 5, 8, 24, 29, 25, -58, 250, 59]
const result = maxnumber_from_Array(arr)
console.log(result);