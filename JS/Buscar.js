
    const input = document.getElementById('barrabus');
    const log = document.getElementById('xd');
    
    const tablita = document.querySelector('#lista-usuarios tbody');
    input.addEventListener('change',traer);
    function traer(e){
        fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(res=> {
                const hola = res.filter(probacion =>{
                    return probacion.nombre == e.target.value;
                })
                hola.forEach(nada => {
                    
                    const klk = document.createElement('tr');
                    klk.innerHTML += `
                        <td>${nada.nombre}</td>
                        <td>${nada.apellido}</td>
                        <td>${nada.telefono}</td>
                        
                    `;
                    tablita.appendChild(klk);
                });
                console.log(hola)
    
        })
        
    }


