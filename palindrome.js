const palindrome = (chk) => {
    var palin = chk.toString().split('').reverse().join('')
    if (chk == palin) {
        console.log(`"${chk}" is a palindrome`);
    }
    else {
        console.log(`"${chk}" is not a palindrome`);
    }
}
palindrome("madam")