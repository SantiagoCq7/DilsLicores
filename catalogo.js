document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".producto").forEach(producto => {
        let cantidad = 1;
        const numero = producto.querySelector(".numero");
        
        producto.querySelector(".sumar").addEventListener("click", () => {
            cantidad++;
            numero.textContent = cantidad;
        });
        
        producto.querySelector(".restar").addEventListener("click", () => {
            if (cantidad > 1) {
                cantidad--;
                numero.textContent = cantidad;
            }
        });
        
        producto.querySelector(".agregar").addEventListener("click", () => {
            alert(`Has agregado ${cantidad} unidad(es) de ${producto.querySelector("h3").textContent} al carrito.`);
        });
    });
});

