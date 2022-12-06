
    const input = document.getElementById('id');
    const log = document.getElementById('input');
    
    const table = document.querySelector('#userList tbody');
    input.addEventListener('change',pull);
    function pull(e){
        fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(res=> {
                const cnst = res.filter(testing =>{
                    return testing.nombre == e.target.value;
                })
                cnst.forEach(data => {
                    
                    const varr = document.createElement('tr');
                    varr.innerHTML += `
                        <td>${data.nombre}</td>
                        <td>${data.apellido}</td>
                        <td>${data.telefono}</td>
                        
                    `;
                    table.appendChild(varr);
                });
                console.log(cnst)
    
        })
        
    }


