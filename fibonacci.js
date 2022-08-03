var first = 0
var second = 1
var fiboNum;

// How many fibonacci numbers are needed?
var need = 5

for (var i = 1; i <= need; i++) {
    console.log(first);
    fiboNum = first + second
    first = second
    second = fiboNum
}
