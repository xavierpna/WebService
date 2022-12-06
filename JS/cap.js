function cap(){
    var name=document.getElementById('nombre').value;
    var lastname = document.getElementById('apellido').value;
    var phone = document.getElementById('numero').value;

    let contacto = {nombre: name, apellido: lastname, telefono: phone};
    fetch("http://www.raydelto.org/agenda.php", 
    {
        method:'POST', 
        body:JSON.stringify(contacto)}
        ).then( res => res.json()).then(
        (res) => 
    {
    alert('Los datos se han agregado correctamente.')
    }
);
    
    
}