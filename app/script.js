// Selecciona el checkbox
var iconoJS = document.getElementById('miIcono');
var menuJS = document.getElementById('miMenu');

// Añade un evento 'change' al checkbox
iconoJS.addEventListener('change', function () {
    // Verifica si el checkbox está marcado
    if (iconoJS.checked) {
        menuJS.style.display = 'block'; 
    } else {
        menuJS.style.display = 'none'; 
    }
});
