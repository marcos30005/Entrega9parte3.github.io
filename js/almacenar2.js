

document.addEventListener('DOMContentLoaded', function(){
    let boton = document.getElementById('agregar');
    let limpiarBoton = document.getElementById ('limpiar');
    let texto = document.getElementById ('item');
    let contenedor = document.getElementById ('contenedor');
    let guardarItems = JSON.parse (localStorage.getItem ('items')) 

    // Guardar el nuevo elemento en Local Storage
    guardarItems.push(nuevoItem);
    localStorage.setItem('items', JSON.stringify(guardarItems))

   
   
   
   
    limpiarBoton.addEventListener('click', function() {
        contenedor.innerHTML = '';
    
        // Limpiar elementos en Local Storage
        storedItems.length = 0;
        localStorage.setItem('items', JSON.stringify(storedItems));
    });

})