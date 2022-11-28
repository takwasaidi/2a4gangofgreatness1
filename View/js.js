let nomCInput = document.getElementById("nomC");
let cartInput = document.getElementById("cart");
let prixInput = document.getElementById("prixT");
var letters = /^[A-Za-z]+$/;
document.forms["form"].addEventListener("submit", function (e) {
    var inputs = document.forms["form"];
    let ids = [
        "erreur",
        "nomEr",
        "cartEr",
        "prixEr"
       
    ];

    ids.map((id) => (document.getElementById(id).innerHTML = "")); // reinitialiser l'affichage des erreurs

    let errors = false;

    //Traitement cas par cas
    if (nomCInput.value.length < 5) {
        errors = false;
        document.getElementById("nomEr").innerHTML =
            "Le nom  de commande doit compter au minimum 5 caractères.";
    } else {
        errors = true;
    }
   
    /* if(cartInput.value.match(letters))
    {
        errors = false;
        document.getElementById("cartEr").innerHTML =
            "cart est un id ne doit pas contenir des lettres";
    } else {
        errors = true;
    }
    if(prixInput.value.match(letters))
    {
        errors = false;
        document.getElementById("prixEr").innerHTML =
        "Ce cese ne doit pas contenir des lettres";
    } else {
        errors = true;
    }
     */

    if (isNaN(cartInput.value)) {
        errors = false;
        document.getElementById("cartEr").innerHTML =
            "cart est un id ne doit pas contenir des lettres";
    } else {
        errors = true;
    }
    if (isNaN(prixInput.value)) {
        errors = false;
        document.getElementById("prixEr").innerHTML =
            "Ce cese ne doit pas contenir des lettres";
    } else {
        errors = true;
    }

   

    //Traitement générique
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            errors = false;
            document.getElementById("erreur").innerHTML =
                "Veuillez renseigner tous les champs";
        }
    }

    if (errors === false) {
        e.preventDefault();
    } 
});
