document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Shukriya " + name + "! Aapka message bhej diya gaya hai.");
        this.reset();
    } else {
        alert("Barah-e-karam tamam fields fill karein.");
    }
});
