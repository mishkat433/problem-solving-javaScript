const names = ["Mahin", "Shahin", "Karim", "Mahin", "Lotif", "Shovo", "Karim", "Lotif", "Lamiya", "Munna", "Mahin", "Karim"];

const duplicate_check = (nm) => {
    const store = []
    for (let i = 0; i < nm.length; i++) {
        if (store.includes(nm[i]) === false) {
            store.push(nm[i])
        }

    }
    return store;
}

const check = duplicate_check(names)
console.log(check);