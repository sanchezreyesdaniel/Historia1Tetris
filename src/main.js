

boton.addEventListener('click', pintaRanking);

//boton.addEventListener('click', pintaTabla);


  
    
function pintaRanking(event){
    event.preventDefault()


    let ranking=`<h2 class="text-center text-light">Ranking</h2>
    <table class="table table-dark align-middle">
        <theader>
            <tr class="bg-dark">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </theader>
        <tbody>
            <tr>
                <td class="fs-2">1</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">2</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">3</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>`
   
    console.log(ranking)


}
const datosEjemploPartida = {
    avatar:'<img width=100px src="img/user2.svg" alt="user">',
    nick: 'MANUEL' ,
    puntos: 100 ,
    fecha:'21 MAYO 2023' 
}

const partidas = [
    {
      avatar: '<img width=100px src="img/user1.svg" alt="user">',
      nick: 'ADRI',
      puntos: 100,
      fecha: '2023-09-27'
    },
    {
        avatar: '<img width=100px src="img/user2.svg" alt="user">',
        nick: 'VICENTE',
        puntos: 150,
        fecha: '2023-09-28'
    },
    {
        avatar: '<img width=100px src="img/user3.svg" alt="user">',
        nick: 'JAVI',
        puntos: 150,
        fecha: '2023-09-28'
    }
    
  ]
  pintaTabla(partidas)
  //insertaNuevaPartida(datosEjemploPartida)
  pintaDatosPartida(datosEjemploPartida)
  
function pintaTabla(partidas){
    
    
    let tabla = `<h2 class="text-center text-light">Partidas</h2>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Buscador"
            aria-describedby="button-addon2"
        />
        <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
        >
            <i class="bi bi-x-lg"></i>
        </button>
    </div>
    <table class="table table-dark">
        <theader>
            <tr>
                <td></td>
                <td>Nick <i class="bi bi-arrow-up-square"></i></td>
                <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
                <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
            </tr>
        </theader>
        <tbody>
            `

    partidas.forEach(element => {
        tabla += `
            <tr>
                <td>${element.avatar}"</td>
                <td>${element.nick}</td>
                <td>${element.puntos}</td>
                <td>${element.fecha}</td>
            </tr>
        `;
    });

    tabla += `</tbody>
        <tfoot></tfoot>
    </table>`;

    document.querySelector("#partidas").innerHTML=tabla
    console.log(tabla);
    
    
}
function insertaNuevaPartida(datosEjemploPartida){
    console.log("Datos de la partida")
    partidas.push(datosEjemploPartida)
    console.log(datosEjemploPartida)
}


function pintaDatosPartida(partida){
    const confirmar = `¿Deseas guardar la partida?\n\nAvatar: ${partida.avatar}\nNick: ${partida.nick}\nPuntos: ${partida.puntos}\nFecha: ${partida.fecha}`
    const resultadoConfirm = confirm(confirmar); // Guarda el resultado del confirm en una variable
    if(resultadoConfirm){ // Verifica el resultado
        insertaNuevaPartida(partida);
        console.log('Partida guardada');
        pintaTabla(partidas);
    }else{
        console.log('Partida no guardada');
    }
}
