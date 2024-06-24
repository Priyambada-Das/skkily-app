
document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL pathname
    var currentUrl = window.location.pathname;

    // Get all the navigation links
    var navLinks = document.querySelectorAll('.navbar a');

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Get the href attribute value of the link
        var href = link.getAttribute('href');
        
        // Check if the current URL contains the link's href
        if (currentUrl.includes(href)) {
            // Add a class to the link to indicate it is active
            link.classList.add('active');
        }
    });
});