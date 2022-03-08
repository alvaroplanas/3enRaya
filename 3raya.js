let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let jugador = 1;

// Pintamos la celda del color correspondiente
function pintarcelda() {
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) document.getElementById("celda" + i).style = "background-color: white";
        if (tablero[i] == 1) document.getElementById("celda" + i).style = "background-color: red";
        if (tablero[i] == 2) document.getElementById("celda" + i).style = "background-color: blue";
    }
}

// Comprobamos que celda y jugador ha clickado
function pintar(celda) {
    if (tablero[celda] == 0) {
        if (jugador == 1) {
            tablero[celda] = 1;
            jugador = 2;
        } else {
            tablero[celda] = 2;
            jugador = 1;
        }
    } else {
        // Comprobamos que si esta pintado no se vuelva a pintar
        alert("No puedes pulsar sobre una celda pintada");
    }

    pintarcelda();

    let r = victoria();
    // Mostramos como queda la partida
    switch (r) {
        case 0:
            break;
        case 1:
            alert("Gana jugador 1");
            break;
        case 2:
            alert("Gana jugador 2");
            break;
        case 3:
            alert("Empate");
            break;
    }
}

function victoria() {
    let celdavacia = 0;
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) celdavacia++;
    }
    // Comprobamos lineas horizontales
    if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0] != 0) return tablero[0];
    if (tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3] != 0) return tablero[3];
    if (tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6] != 0) return tablero[6];
    // Comprobamos lineas verticales
    if (tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0] != 0) return tablero[0];
    if (tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1] != 0) return tablero[1];
    if (tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2] != 0) return tablero[2];
    // Comprobamos lineas diagonales
    if (tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0] != 0) return tablero[0];
    if (tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[2] != 0) return tablero[2];

    if (celdavacia > 0) {
        return 0;
    } else {
        return 3;
    }
}