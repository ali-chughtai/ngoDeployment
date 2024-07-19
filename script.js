function handleScroll() {
    const scrollButton = document.querySelector('.refrenceButton');
    
    const isMobile = window.matchMedia('(max-width: 499px)').matches;
    
    if (isMobile) {
        const footer = document.getElementById('mobileFooter');
        const footerOffset = footer.offsetTop - window.innerHeight;

        if (window.scrollY <= footerOffset) {
            scrollButton.style.display = 'none';
        } else {
            scrollButton.style.display = 'block';
        }
    } else {
        const footer = document.getElementById('desktopFooter');
        const footerOffset = footer.offsetTop - window.innerHeight;

        if (window.scrollY <= footerOffset) {
            scrollButton.style.display = 'none';
        } else {
            scrollButton.style.display = 'block';
        }
    }
}

window.addEventListener('scroll', handleScroll);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
