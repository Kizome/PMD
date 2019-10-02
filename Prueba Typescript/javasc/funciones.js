var persona = [];
function anadir() {
    var nombre = document.getElementById('nombre').value;
    var edad = +document.getElementById('edad').value;
    var contacto1 = {
        nombre: nombre,
        edad: edad
    };
    persona.push(contacto1);

    document.getElementById('nombre').value="";
    document.getElementById('edad').value="";
}
function listar() {
    console.log(persona);
}
