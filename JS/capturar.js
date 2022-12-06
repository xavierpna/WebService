function capturar(){
    var name=document.getElementById('nombre').value;
    var lastname = document.getElementById('apellido').value;
    var number = document.getElementById('numero').value;

    let contacto = {nombre: name, apellido: lastname, telefono: number};
    fetch("http://www.raydelto.org/agenda.php", 
    {
        method:'POST', 
        body:JSON.stringify(contacto)}
        ).then( res => res.json()).then(
        (res) => 
    {
    alert('Datos agregados correctamente')
    }
);
    
    
}