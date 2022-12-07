const lado1 = document.getElementById('turnOnOff');
const lado2 = document.getElementById('lado2');

const lamp = document.getElementById('lamp');

function isQuebrado() {
    return lamp.src.indexOf ('quebrado') > -1
}

function lampOn() {
    if ( !isQuebrado() ){

        lamp.src = './img/cat3.jpg'
    }
}
function lampOff() {
    if ( !isQuebrado() ) {

        lamp.src = './img/cat2.jpg'
    }
}

function lado_3() {
    
    if (!isQuebrado() ){

        lamp.src = './img/cat4.jpg'
    }
        
    }
function lado_2() {
    
    if (!isQuebrado() ){

        lamp.src = './img/cat.jpg'
    }
        
    }
function brokencat() {
    lamp.src = './img/quebrado.jpg'
}



function lampOnOff () {
    if (turnOnOff.textContent == 'Mudar de Lado') {
        lampOn ();
        turnOnOff.textContent = 'Muda Lado';
    } else {
        lampOff() ;
        turnOnOff.textContent = 'Mudar de Lado';
    }
}

lado1.addEventListener('click', lampOnOff)
lado2.addEventListener('click', lampOff)
lado3.addEventListener('click', lado_3)
lado2.addEventListener('click', lado_2)
lamp.addEventListener('dblclick', brokencat)
