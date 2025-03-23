document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', function() {
        if (navMenu.classList.contains('open')) {
            // Se la classe 'open' è presente, vuol dire che il menu è aperto
            navMenu.classList.remove('open');
            navMenu.classList.add('close');
        } else {
            // Altrimenti, il menu è chiuso e dobbiamo aprirlo
            navMenu.classList.add('open');
            navMenu.classList.remove('close');
        }
        // Aggiungi o rimuovi pointer-events a seconda dello stato del menu
        navMenu.style.pointerEvents = navMenu.classList.contains('open') ? 'auto' : 'none';
    });
});