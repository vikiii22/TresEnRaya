var turno=0;
const tablero=[];

//En todo momento las e hacen referencia a evento y pos a posición
const casillaPulsada = (e, pos) =>{
    turno++;
    const miBoton=e.target;
    var color='';
    var marcado='';
    if(turno % 2  == 0){
        color = 'blue';
        marcado = 'O'
    }else{
        color = 'red'
        marcado='X'
    }
    miBoton.style.backgroundColor=color;
    miBoton.textContent=marcado;
    tablero[pos] = color;
    if(ganador()){
        alert('Enhorabuena jugador ' + color);
        document.querySelectorAll('button').forEach(apagar => apagar.disabled=true);
        document.querySelector('.ganador').textContent="Ha ganado " + color;
    }
}


const ganador = () =>{
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }else {
        return false;
    }
}

document.querySelectorAll('button').forEach((but, pos) => but.addEventListener('click', (e) => casillaPulsada(e, pos)));