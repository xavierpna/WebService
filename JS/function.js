const tabla = document.querySelector('#lista-usuarios tbody');
const pasar = [];


function Cargar() {
    fetch('http://www.raydelto.org/agenda.php')
        .then(respuesta => respuesta.json()) 
        .then(usuarios => {
            
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.telefono}</td>
                    
                `;
                tabla.appendChild(row);
                
                

            });
        }) // 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

Cargar();