// Récupérer le panier
let panier = getPanier();


// Récupérer le container pour afficher les produits cliqués, ajoutés
let pagePanier = document.querySelector(".container-liste-produits-panier");



    // Utiliser la méthode Oject.keys pour récupérer les valeurs pour chaque id
    // Source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


        Object.keys(panier).forEach(id => {
         
        let buttonContainer = document.createElement("div");
             buttonContainer.className = "button-container";
        let itemPanier = document.createElement("div");
            itemPanier.className ='item-panier'; 
            // let infoContainer = document.createElement("div");
            // infoContainer.className = 'infoContainer'
        let image = document.createElement("img");
            image.src= panier[id].image;
        let nom = document.createElement("p");
            nom.innerText = panier[id].nom + " ("+ panier[id].nombre + " article(s))";
        let prix= document.createElement("p");
            prix.innerText = "Total : " + panier[id].prix * panier[id].nombre + "€";
        let ajout = document.createElement("button");
            ajout.className = "ajout";
            ajout.innerText = " Ajouter 1 article " ;
            ajout.onclick = function ( ) {
            ajoutProduit(id) ; 
            // recupère la nvelle version du panier 
            panier = getPanier();
            // mise à jour des données produit
            nom.innerText =  panier[id].nom + " (" + panier[id].nombre + " article(s))";
            prix.innerText = "Total : " + panier[id].prix * panier[id].nombre + "€";
            }
        let supprimer = document.createElement("button");
            supprimer.innerText = " Supprimer 1 article " ;
            supprimer.onclick = function ( ) {
                retirerProduit(id) ; 
                // recupère la nvelle version du panier 
                panier = getPanier();
                // mise à jour des données produit
                nom.innerText =  panier[id].nom + " (" + panier[id].nombre + " article(s))";
                prix.innerText = "Total : " + panier[id].prix * panier[id].nombre + "€";
                }
        let annuler = document.createElement("button");
            annuler.innerText = " Tout supprimer" ;
            annuler.onclick = function ( ) {
                SupprimerProduit(id) ; 
                // recupère la nvelle version du panier 
                panier = getPanier();
                // mise à jour des données produit
                nom.innerText =  panier[id].nom + " ("+ panier[id].nombre + " article(s))";
                prix.innerText = "Total : " + panier[id].prix * panier[id].nombre + "€";
                }

          
            
            itemPanier.appendChild(image);
            itemPanier.appendChild(nom);
            itemPanier.appendChild(prix);
            itemPanier.appendChild(ajout);
            itemPanier.appendChild(supprimer);
            itemPanier.appendChild(annuler);
            // itemPanier.appendChild(infoContainer);
            pagePanier.appendChild(itemPanier);

      


          
            
    })




// Ajouter le total de la commande
    let total =  document.createElement("p");
        total.className ='total-commande'; 
        // totalPanier.innerText = panier[id].nombre;
    let prixTotal = 0;
        Object.keys(panier).forEach(id => {
            
            prixTotal += panier[id].prix * panier[id].nombre;
        // console.log(panier);
        })
        
        total.innerText = " Total commande : " + prixTotal + "€";
        pagePanier.appendChild(total);


// Ajouter à la fin de la liste pour supprimer la totalité du panier

let supprimerPanier =  document.createElement("button");
supprimerPanier.className ='bouton-supprimer-panier'; 
supprimerPanier.innerText = " Supprimer mon panier" ;
supprimerPanier.onclick = function ( ) {
    
   let panier = getPanier();
   Object.keys(panier).forEach(id => {
       //on refait le tour des id et on supprime avec la foncion
    SupprimerProduit(id); 
    })
    

    }        

pagePanier.appendChild(supprimerPanier);





// Ajouter un bouton valider ma commande avec prix total + quantité

    let validerPanier =  document.createElement("button");
        validerPanier.setAttribute("id",'bouton-valider-commande'); 
        validerPanier.innerText = " Valider ma commande" + "(" + panierLength() + "qt)" ;

        pagePanier.appendChild(validerPanier);





/************************** MODAL ******************************/





// On récupère la div modal
let modalJs = document.getElementById("modal-js");

// On récupère le bouton qui ouvre la modal au clic (validation commande)
let btn = document.querySelector('#bouton-valider-commande');
  
// On récupère l'élément qui ferme la modal
let span = document.getElementsByClassName("close")[0];

// Fonction pour ouvrir la modal au clic sur le bouton
    btn.onclick = function() {
     modalJs.style.display = "block";
}

// Fonction pour fermer la modal au clic sur le X
    span.onclick = function() {
    modalJs.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modalJs) {
        modalJs.style.display = "none";
    }
    }


// Fonction pour pouvoir mettre en console les informations récupérés dans ma modal

function Commander() {
    let prenom = document.getElementById("firstname");
    let nom = document.getElementById("nom");
    let mail = document.getElementById("email");
    let tel = document.getElementById("tel");
    let adresse = document.getElementById("adresse");
    // Je récapitule le montant de ma commande
    console.log(document.querySelector(".total-commande").innerText +   "\n" + "Produits commandés : " + "\n" );

    let panier = getPanier();
    Object.keys(panier).forEach(id => {
       if (panier[id].nombre > 0 ) {
        //    Je reprends les articles et leur nombre
           console.log(
               panier[id].nom + "(" + panier[id].nombre + " article(s)) : "  + panier[id].prix + "€"
            )
    }
     })

            console.log(
            "Prénom : " + prenom.value  + 
            "\nNom : " + nom.value +  
            "\nAdresse mail : " + mail.value +  
            "\nNuméro de téléphone : " + tel.value  +
            "\nAdresse : " + adresse.value 
   
)
                // on recache la modal
            modalJs.style.display = "none";
        
            return false
}


