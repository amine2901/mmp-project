/* -------------------------- PAGE CONTACT ------------------------------------------- */

var prenom = document.getElementById("firstname");
var nom = document.getElementById("nom");
var entreprise = document.getElementById("entreprise");
var mail = document.getElementById("email");
var tel = document.getElementById("tel");
var question = document.getElementById("qst");
var msg = document.getElementById("msg");
var validation = document.getElementById("validation");



    // On annule l'envoi du formilaire pour pouvoir afficher les données en console
    document.querySelector('form').addEventListener("submit", function(e) {
        e.preventDefault(); 
    })


        validation.addEventListener("click", function(){
            console.log(
                "Prénom : " + prenom.value  + 
                "\nNom : " + nom.value +  
                "\nNom entreprise : " + entreprise.value + 
                "\nAdresse mail : " + mail.value +  
                "\nNuméro de téléphone : " + tel.value  + 
                "\nLa question concerne : " + question.value +
                "\nMessage : " + msg.value
            ); 
        });
