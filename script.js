
function applyStyles(input) {
    var radios = document.querySelectorAll('input[name="' + input.name + '"]');
    radios.forEach(function(radio) {
      var container = radio.closest('.gral, .support');
      if (radio.checked) {
        container.style.border = '0.1rem solid hsl(169, 82%, 27%)';
        container.style.backgroundColor = 'hsl(148, 38%, 91%)';
      } else {
        container.style.border = '0.1rem solid #97A8AA';
        container.style.backgroundColor = '#FFFFFF';
      }
    });

  }

let nombre = document.getElementById('firstname');
let apellido = document.getElementById('lastname');
let mail = document.getElementById('email');
let gral = document.getElementById('generalEnquiry');
let support = document.getElementById('supportRequest');
let check = document.getElementById('check');
let submit = document.getElementById('submit');
let msj = document.getElementById('msj');
let p0 = document.getElementById('pf0');
let p1 = document.getElementById('pf1');
let p2 = document.getElementById('pf2');
let p3 = document.getElementById('pf3'); //mail formato incorrecto
let p4 = document.getElementById('pf4');
let p5 = document.getElementById('pf5');
let p6 = document.getElementById('pf6');
let p7 = document.getElementById('pf7');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
     // Validación de campos aquí...

     if (nombre.value.trim() === '' || apellido.value.trim() === '' || email.value.trim() === '' || !document.querySelector('input[name="query_type"]:checked') || !check.checked || msj.value.trim() === '') {
    
        toastr.error('Por favor completa todos los campos obligatorios');
        return;
    }

    // Mostrar toast de éxito después de enviar el formulario
    //toastr.success('¡Mensaje enviado! Nos pondremos en contacto pronto.');
    toastr.success(' Message Sent! Thanks for completing the form. We\'ll be in touch soon!');

    // redirigir a otra página después de enviar el formulario 
    // window.location.href = 'pagina-de-agradecimiento.html';

if(nombre.value.trim()==='' ){
    p1.style.display='block';
    px.style.display='none';
}
else{
    p1.style.display='none';
}
if(apellido.value.trim()==='' ){
    p2.style.display='block';
    p0.style.display='none';
}
else{
    p2.style.display='none';
}

if(email.value.trim()==='' ){
    p4.style.display='block';
}
else{
    p4.style.display='none';
}

if (!document.querySelector('input[name="query_type"]:checked')) {
    // Si ningún radio de tipo de consulta está seleccionado
    p5.style.display = 'block';
} else {
    p5.style.display = 'none';
}


if (!check.checked) {
    // Si el checkbox no está marcado
    p7.style.display = 'block';
} else {
    p7.style.display = 'none';
}

if(msj.value.trim()==='' ){
    p6.style.display='block';
}
else{
    p6.style.display='none';
}
})


nombre.addEventListener('blur', ()=>{
    if(nombre.value.trim()===''){
    p1.style.display='block';
    if(p2.style.display==''){
        p0.style.display='block';
    }else{
        p0.style.display='none';
    }
    }
    else{
        p1.style.display='none';
    }
    if(apellido.value.trim()!=''){
        p0.style.display='block';
    }
    if(nombre.value.trim()!='' && apellido.value.trim()!=''){
        px.style.display='none'; 
        p0.style.display='none'; 
    }
    if(nombre.value.trim()!='' && apellido.value.trim()==='' && p0.style.display=='none'){
        px.style.display='block '; 
        p0.style.display='block'; 
    }
})

apellido.addEventListener('blur', ()=>{
    if(apellido.value.trim()===''){
    p2.style.display='block';
    p0.style.display='none';
    if(p1.style.display==''){
        px.style.display='block';
    }else{
        px.style.display='none';
    }
    } else{
        p2.style.display='none';
    }
    if(nombre.value.trim()!=''){
        px.style.display='block';
    }
    if(nombre.value.trim()!='' && apellido.value.trim()!=''){
        px.style.display='none'; 
        p0.style.display='none'; 
    }
    if(apellido.value.trim()!='' && nombre.value.trim()===''){
        px.style.display='none'; 
        p0.style.display='block'; 
    }

})

mail.addEventListener('blur', ()=>{
    if(mail.value.trim()===''){
    p4.style.display='block';
    }else{
        p4.style.display='none';
    }
})

gral.addEventListener('blur', ()=>{
    if (!document.querySelector('input[name="query_type"]:checked')) {
    p5.style.display='block';
    }else{
        p5.style.display='none';
    }
})

support.addEventListener('blur', ()=>{
    if (!document.querySelector('input[name="query_type"]:checked')) {
    p5.style.display='block';
    }
    else{
        p5.style.display='none';
    }
})

msj.addEventListener('blur', ()=>{
    if(msj.value.trim()===''){
    p6.style.display='block';
    }else{
        p6.style.display='none';
    }
})

check.addEventListener('blur', ()=>{
    if (!check.checked) {
    p7.style.display='block';
    }else{
        p7.style.display='none';
    }
})

//biblioteca Toastr
document.addEventListener('DOMContentLoaded', function() {
// Inicializar Toastr
toastr.options = {
    closeButton: true, // Mostrar botón de cierre en el toast
    progressBar: true, // Mostrar barra de progreso
    preventDuplicates: true, // Evitar mostrar toasts duplicados
    positionClass: 'toast-top-right', // Posición del toast (arriba a la derecha)
    timeOut: 5000 // Tiempo de duración del toast (en milisegundos)
};

// Función para mostrar un toast de éxito
function mostrarToastExito(mensaje) {
    toastr.success(mensaje);
}

// Función para mostrar un toast de error
function mostrarToastError(mensaje) {
    toastr.error(mensaje);
}
});
