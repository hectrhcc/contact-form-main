
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
    p1.style.display='block';
    if(p2.style.display==''){
        p0.style.display='block';
    }else{
        p0.style.display='none';
    }
    
})

apellido.addEventListener('blur', ()=>{
    p2.style.display='block';
    p0.style.display='none';
    if(p1.style.display==''){
        px.style.display='block';
    }else{
        px.style.display='none';
    }
})

mail.addEventListener('blur', ()=>{
    p4.style.display='block';
})

gral.addEventListener('blur', ()=>{
    p5.style.display='block';
})

support.addEventListener('blur', ()=>{
    p5.style.display='block';
})

msj.addEventListener('blur', ()=>{
    p6.style.display='block';
})

check.addEventListener('blur', ()=>{
    p7.style.display='block';
})
