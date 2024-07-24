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

document.getElementById("SignUpButton").addEventListener('click', function() {
    window.location.href = "./signUp.html";
});

document.getElementById("drawerLogoDiv").addEventListener("click", function() {
    var div = document.getElementById("mobileDrawer");
    div.classList.add('open');
});

document.getElementById("DrawerCloseButton").addEventListener("click", function() {
    var div = document.getElementById("mobileDrawer");
    div.classList.remove('open');
});

document.addEventListener("click", function(event) {
    var drawer = document.getElementById("mobileDrawer");
    var drawerLogo = document.getElementById("drawerLogoDiv");

    // Check if the click was outside the drawer and outside the drawer icon
    if (!drawer.contains(event.target) && !drawerLogo.contains(event.target)) {
        drawer.classList.remove('open');
    }
}
)

