const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}


function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'src/img/ligada.png';
        document.body.style.background = "#fdc200";
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'src/img/desligada.png';
        turnOnOff.textContent = 'Ligar';
        document.body.style.background = "#000000e7";
    }
}

function lampBroken () {
    lamp.src = 'src/img/quebrada.png';
    document.body.style.background = "#00000073";
}

function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
       
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
     
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );


