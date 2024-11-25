//fade in animation

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add('slide-in');
                entry.target.classList.add('right-slide-in');
                entry.target.classList.add('slide-up');
                entry.target.classList.add('right-slide-up');
                observer.unobserve(entry.target); // Optional: Stop observing after the first time
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

function showMenu() {
    mobilemenu = document.querySelector('.mobilemenu');
    if (window.innerWidth <= 920) {
        mobilemenu.style.display = 'flex'; // Hide menu for smaller screens
    }
}
function closeMenu() {
    mobilemenu = document.querySelector('.mobilemenu');
    if (window.innerWidth <= 920) {
        mobilemenu.style.display = 'none'; // Hide menu for smaller screens
    }
}


// loader

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loaderdiv');
    loader.style.display = 'none'
    loader.style.opacity = '0'
    loader.style.transition = '200ms'
})


