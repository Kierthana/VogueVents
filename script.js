window.addEventListener('load', function () {
    // Delay the logo's appearance by 2 seconds
    setTimeout(function () {
        // Get the logo container element
        var logoContainer = document.querySelector('.logo-container');
        // Make the logo container visible
        logoContainer.style.opacity = 1;
        
    }, 2000); 
    // 2000 milliseconds (2 seconds)
    setTimeout(() => {
        window.location.href = "home.html";
},5000);
});

