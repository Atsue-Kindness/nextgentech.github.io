const burgerToggle = function() {
    const toggle = document.querySelector('.toggle');
    const navitems = document.querySelector('.nav-items');

    toggle.addEventListener('click', function() {
        navitems.classList.toggle('nav-active');
        toggle.classList.toggle('bugger')
    })
}

burgerToggle()