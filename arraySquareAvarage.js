const arraySquareAvarage = arr => {
    let sqrNum = 0;
    const makeArray = [];
    let avarage = 0;
    for (const num of arr) {
        sqrNum = sqrNum + (num * num);
        makeArray.push(num);
    }

    avarage = (sqrNum / makeArray.length).toFixed(2);

    return avarage;
}

const number = [2, 3, 5];
console.log(arraySquareAvarage(number));