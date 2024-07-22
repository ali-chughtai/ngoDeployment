document.getElementById("userType").addEventListener('change',function(){
    var individual = document.getElementById("NamingDiv");
    var club = document.getElementById("clubDiv");

    if (this.value === "Individuals"){
        individual.style.display = "flex";
        // individual.style.flexDirection = "row";
        club.style.display = "none";
    }
    else if (this.value === "Club"){
        individual.style.display = "none";
        club.style.display = "block";
    }
})

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('togglePassword');

    // Toggle password visibility
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

 
});

document.getElementById("backButton").addEventListener('click', function() {
    window.location.href = "./index.html";
});
