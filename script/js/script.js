document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    
    const depth = currentPath.split('/').length - 2; // "-2" to exclude the domain and file name
    
    let navbarPath = "";
    for (let i = 0; i < depth; i++) {
        navbarPath += "../";
    }
    navbarPath += "navbar.html";
    
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error('Error fetching navbar:', error));
});
