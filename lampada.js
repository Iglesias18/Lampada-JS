const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
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
        document.body.style.background = "#000";
    }
}

function lampBroken () {
    lamp.src = 'src/img/quebrada.png';
    document.body.style.background = "#00000073";
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );

