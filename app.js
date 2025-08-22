// Carrito de compras interactivo
const carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');

document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function() {
        const producto = this.parentElement;
        const nombre = producto.getAttribute('data-nombre');
        const precio = parseFloat(producto.getAttribute('data-precio'));
        carrito.push({nombre, precio});
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;
    carrito.forEach((item, idx) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio} USD`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });
    totalCarrito.textContent = `Total: $${total} USD`;
}

document.querySelector('.btn-vaciar').addEventListener('click', function() {
    carrito.length = 0;
    actualizarCarrito();
});

// Formulario de contacto interactivo
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensaje-enviado').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('mensaje-enviado').style.display = 'none';
    }, 3000);
});