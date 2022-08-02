const stringRev = (str) => {
    var conv = str.split('')
    conv.reverse()
    const join = conv.join('')
    console.log(join);
}

stringRev("mozilla")