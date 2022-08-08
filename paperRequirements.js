const paperRequirements = (b1, b2, b3) => {
    if (b1 > 0 && b2 > 0 && b3 > 0) {
        const book1 = b1 * 100;
        const book2 = b2 * 200;
        const book3 = b3 * 300;
        const totalPage = book1 + book2 + book3;
        return totalPage;
    }
    else {
        return "input is not valid, Use 3 parameter at least 1 or higher"
    }
}

const book = paperRequirements(2, 1, 2)
console.log(book);