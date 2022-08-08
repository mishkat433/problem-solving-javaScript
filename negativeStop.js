const nevativeStop = (ngt) => {
    const store = []
    for (let i = 0; i < ngt.length; i++) {
        if (ngt[i] < 0) {
            break;
        }
        else {
            store.push(ngt[i])
        }

    }
    return store;
}

const negativeNumberCheck = nevativeStop([45, 0, 48, 9, 17, 19, -15, 89.2, 31, 5])
console.log(negativeNumberCheck);