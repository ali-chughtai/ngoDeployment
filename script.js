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

document.getElementById("DrawerCloseButton").addEventListener("click",function(){
    var div = document.getElementById("mobileDrawer");
    div.style.display = 'none';
})

document.getElementById("drawerLogoDiv").addEventListener("click",function(){
    var div = document.getElementById("mobileDrawer");
    div.style.setProperty('display', 'flex', 'important');
})

document.addEventListener("click", function(event) {
    var drawer = document.getElementById("mobileDrawer");
    var drawerLogo = document.getElementById("drawerLogoDiv");

    if (!drawer.contains(event.target) && !drawerLogo.contains(event.target)) {
        drawer.style.setProperty('display', 'none', 'important');
    }
});

