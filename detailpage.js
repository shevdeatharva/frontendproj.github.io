if (typeof(localStorage) !== "undefined") {
    localStorage.setItem("fname", "Atharva");
    document.getElementById("fullName").innerHTML = localStorage.getItem("fname");
}
if (typeof(Storage) !== "undefined") {
    // Store an item to localStorage  
    localStorage.setItem("firstname", "Alen");

    // Retrieve the added item  
    document.getElementById("mobile").innerHTML = localStorage.getItem("firstname");

} else {
    //display this message if browser does not support localStorage  
    document.getElementById("mobile").innerHTML = "Sorry, your browser does not support Web Storage.";
}