const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    
    // Toggle the 'aria-expanded' attribute for accessibility
    const isExpanded = hambutton.getAttribute('aria-expanded') === 'true' || false;
    hambutton.setAttribute('aria-expanded', !isExpanded);
});
