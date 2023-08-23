document.addEventListener('DOMContentLoaded', function() {
    let boton = document.getElementById('agregar');
    let limpiarBoton = document.getElementById('limpiar');
    let texto = document.getElementById('item');
    let contenedor = document.getElementById('contenedor');

    // Cargar elementos almacenados en Local Storage al cargar la página
    let storedItems = JSON.parse(localStorage.getItem('items')) || [];
    storedItems.forEach(function(itemText) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.classList.add('list-group-item');
        nuevoElemento.textContent = itemText;
        contenedor.appendChild(nuevoElemento);
    });

    boton.addEventListener('click', function() {
        let nuevoItem = texto.value.trim();
        if (nuevoItem !== '') {
            const nuevoElemento = document.createElement('li');
            nuevoElemento.classList.add('list-group-item');
            nuevoElemento.textContent = nuevoItem;
            contenedor.appendChild(nuevoElemento);
            texto.value = '';

            // Guardar el nuevo elemento en Local Storage
            storedItems.push(nuevoItem);
            localStorage.setItem('items', JSON.stringify(storedItems));
        }
    });

    limpiarBoton.addEventListener('click', function() {
        contenedor.innerHTML = '';

        // Limpiar elementos en Local Storage
        storedItems.length = 0;
        localStorage.setItem('items', JSON.stringify(storedItems));
    });
});
