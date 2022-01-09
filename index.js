function rand(min = 1000, max = 10000) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}


function palavra1() {
    setTimeout(function() {
        console.log('porta');
    }, rand());
}

function palavra2() {
    setTimeout(function() {
        console.log('cozinha');
    }, rand());
}

function palavra3() {
    setTimeout(function() {
        console.log('janela');
    }, rand());
}

palavra1();
palavra2();
palavra3();