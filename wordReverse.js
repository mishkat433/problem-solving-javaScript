// --------------------------------- way 01 ----------------------------------
const wordReverse = (word) => {
    const reverse = word.split(' ').reverse().join(' ')
    return reverse
}
console.log(wordReverse("I am a Programmer"));


// --------------------------------- way 02 ----------------------------------

const wordReverse2 = (word) => {
    const arrarConv = word.split(' ')
    let initial = ''
    for (let i = arrarConv.length - 1; i >= 0; i--) {
        initial = initial.concat(" " + arrarConv[i])
    }
    return initial

}
console.log(wordReverse2("I am a Programmer"));
