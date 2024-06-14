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