
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de animación simple al cargar la sección de eventos
    const eventosSection = document.getElementById('eventos');
    eventosSection.style.opacity = 0;
    window.setTimeout(function() {
        eventosSection.style.opacity = 1;
        eventosSection.style.transition = 'opacity 2s ease-in-out';
    }, 1000);
});
var myMap = L.map('mapa').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors',
    maxZoom: 18,
}).addTo(myMap);

// Agrega pines aquí usando L.marker([lat, lng]).addTo(myMap);
