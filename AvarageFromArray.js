function avarage(arr) {
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        count = count + arr[i];
    }
    const avg = count / arr.length
    console.log(avg);
}
avarage([2, 8, 7, 6])