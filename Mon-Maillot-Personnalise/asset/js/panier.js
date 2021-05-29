//DECLARATION DESS FONCTIONS



// Ajouter des poduits dans le localStorage dans le panier

// Pour stocker dans le localStorage 
// https://www.youtube.com/watch?v=gRY0EeA_Xps&list=PLBq3aRiVuwyx7FjO-Cwfbir-CMaZGyCDE&index=11&t=606s


 // Les méthodes utilisées
        // JSON.Parse() : pr transformer une variable "string"  en format JSON en objet JavaScript.
        // source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
        // JSON.stringify() : pr convertir une valeur Javascript en chaine JSON.
        // source: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        // https://www.youtube.com/watch?v=KHIknKfaf2Q

            function addProduct(product){
                let panier
                if(!localStorage.getItem('panier')){
                    panier = {}
                }
                else {
                
                
                    panier = JSON.parse(localStorage.getItem('panier'))
                    // Et là on utilisa la méthode parse () pour convertir les valeurs JSON  en Javascript. 
                    
                }
                if(product.id in panier) {
                    // Si le produit est présent on incrémente le panier
                    panier[product.id].nombre++
                }
                else {
                    // On récupère les images, noms et prix
                    panier[product.id]= {image:product.image, nom:product.nom, prix:product.prix, nombre:1}
                }

                localStorage.setItem('panier', JSON.stringify(panier)) 
                // Ici on set avec la méthode stringify() pour convertir les valeurs JavaScript en chaîne JSON. 
                
            }


            // recup le panier
            function getPanier(){
                if(!localStorage.getItem('panier')){
                   return {}
                } 
                return JSON.parse(localStorage.getItem('panier'))
            }



// Récuperer le nombre de produits dans le panier (+navbar)

      // Passer l'id en paramètre de la fonction
      function recupererIdPanier (id){

        let panier =  getPanier();
        // Si l'id est présent dans le panier on retourne le nombre de produits présents
         if(id in panier) {
             return panier[id].nombre
         }
        //  Sinon on retourne 0
         return 0
     }






// Fonction pour mettre à jour le panier après avoir ajouter supprimer des produits

    function UpdatePanier(){
        var taillePanier = document.getElementById("taille-panier");
        //on récupère le panier
        let panier =  getPanier();
        let nbrElementsPanier = 0;
        Object.keys(panier).forEach(e => {
            // on refresh 
            nbrElementsPanier += panier[e].nombre;
        })
        if(taillePanier){
            // console.log(taillePanier);
            taillePanier.innerText = nbrElementsPanier;
        
        }
        let total =  document.querySelector(".total-commande");
        //s'il y a bien un total
        if (total){
            let prixTotal = 0;
            Object.keys(panier).forEach(id => {
                
                prixTotal += panier[id].prix * panier[id].nombre;
            // console.log(panier);
            })
            
            total.innerText = " Total commande : " + prixTotal + "€";
        }

        let valider = document.querySelector("#bouton-valider-commande");
            if(valider){
                valider.innerText = " Valider ma commande" + "(" + panierLength() + "qt)" ;
            }
        
       
       
    }

UpdatePanier();



//Deuxième fonction pour actualiser le panier de la navbar smallScreen qui dispose d'un id différent

function UpdatePanierDeux(){
    var taillePanier = document.getElementById("taille-panier-2");
    //on récupère le panier
    let panier =  getPanier();
    let nbrElementsPanier = 0;
    Object.keys(panier).forEach(e => {
        // on refresh 
        nbrElementsPanier += panier[e].nombre;
    })
    if(taillePanier){
        // console.log(taillePanier);
        taillePanier.innerText = nbrElementsPanier;
    
    }
    let total =  document.querySelector(".total-commande");
    //s'il y a bien un total
    if (total){
        let prixTotal = 0;
        Object.keys(panier).forEach(id => {
            
            prixTotal += panier[id].prix * panier[id].nombre;
        // console.log(panier);
        })
        
        total.innerText = " Total commande : " + prixTotal + "€";
    }

    let valider = document.querySelector("#bouton-valider-commande");
        if(valider){
            valider.innerText = " Valider ma commande" + "(" + panierLength() + "qt)" ;
        }
    
   
   
}

UpdatePanierDeux();





// Ajouter 1 produit  dans le panier par id (à l'unité)

    function ajoutProduit(id) {
            //on recupère le panier
        let panier = getPanier();
        if (id in panier ) {
            // Pour bloquer à 9
            if(panier[id].nombre+1 <= 9) {
                panier[id].nombre++
                // mettre à jour le panier dans le localStorage 
                localStorage.setItem('panier', JSON.stringify(panier))
                UpdatePanier(); //mettre à jour le numéro dans la navbar
            }
       
        }

    }


    
// Retirer 1 produit dans le panier par id (à l'unité)

    function retirerProduit(id) {
        //on recupère le panier
    let panier = getPanier();
    if (id in panier ) {
        // Pour ne pas descendre en dessous de 0
        if(panier[id].nombre-1 >= 0) {
            panier[id].nombre--
             // mettre à jour le panier dans le localStorage 
            localStorage.setItem('panier', JSON.stringify(panier))
            UpdatePanier(); //mettre à jour le numéro dans la navbar
        }
   
    }

}


// Retirer toute la quantité du produit dans le panier par id (à l'unité)

    function SupprimerProduit(id) {
        //on recupère le panier
    let panier = getPanier();
    if (id in panier ) {
            // remise à zéro
            panier[id].nombre =0
            // mettre à jour le panier dans le localStorage 
            localStorage.setItem('panier', JSON.stringify(panier))
            UpdatePanier(); //mettre à jour le numéro dans la navbar
        
    }

}


// Recuperer le nbre total de tous les Produits

    function panierLength() {
        let panier = getPanier();
        let TotalProduits = 0;
        Object.keys(panier).forEach(id => {

           TotalProduits += panier[id].nombre;
          
         
         }
         )
         return TotalProduits
    }
