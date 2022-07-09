const evento = document.getElementById('send')
const enviarFormulario =() => {

        let numero = document.getElementById('numero').value;
        let Drive = document.getElementById('drive').value;
        let mensaje = document.getElementById('mensaje').value;
       
        
var win= window.open(`https://wa.me/54${numero}?text=
Carpeta:%20${Drive}%0AContacto:%20walink.co/96666c%0A
${mensaje}%0A`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)
