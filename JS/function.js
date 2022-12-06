const table = document.querySelector('#userList tbody');
const pass = [];


function upload() {
    fetch('http://www.raydelto.org/agenda.php')
        .then(answer => answer.json()) 
        .then(users => {
            
            users.forEach(users => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${users.nombre}</td>
                    <td>${users.apellido}</td>
                    <td>${users.telefono}</td>
                    
                `;
                table.appendChild(row);
                
                

            });
        }) // 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

upload();