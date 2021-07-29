var getData = function(){
let usuario = document.getElementById('usuario').value;
let contraseña = document.getElementById('contraseña').value;

if (usuario == ""){
    usuario = document.getElementById('usuario').focus();
    } else {
        if (contraseña == ""){
            contraseña = document.getElementById('contraseña').focus();
        } else {
            console.log(usuario+ " " +contraseña);
            document.getElementById('usuario').value = "";
            document.getElementById('contraseña').value = "";
            
        }
    }  
}




/* const error = document.getElementById('error');
error.style.color = 'red';
function enviarFormulario(){
    console.log("Enviando datos...");

        var mensajesError = [];

        if(usuario.value === null || usuario.value === ''){
            mensajesError.push('ingresa tu usuario')
        }
        if(contraseña.value === null || contraseña.value === ''){
            mensajesError.push('ingresa tu contraseña')
        }
error.innerHTML = mensajesError.join(' , ')
return false;    


} */ 