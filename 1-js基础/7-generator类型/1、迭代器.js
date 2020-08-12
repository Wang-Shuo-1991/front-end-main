// 1 -> 
function* wepeanGenerator () {
    yield 'AK47';
    yield 'M15';
    yield* nijias();
    yield 'N20'
}

let wepeans = wepeanGenerator();

for (const val of wepeans) {
    console.log(val)
}

function* nijias () {
    yield 'hi';
    yield 'hello';
}