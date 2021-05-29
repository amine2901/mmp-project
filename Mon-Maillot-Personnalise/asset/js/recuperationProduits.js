// alert('hello');

// Fonction pour retourner mes produits à partir du fichier "produits.js", construit en JSON (objets) avec l'objet Promise => (Page produits.html)


//  sources : 
// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/promesse-promise/ 
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function).
// https://www.youtube.com/watch?v=yzFiqYLNoiQ = promise
// https://www.youtube.com/watch?v=KLGCGDkn0gc&list=PLpG9MHuD988i5DeF_mVbcBd9t7nNCgKtC&index=61 = async/await





function getProduits() {
    // Création de la promesse avec le constructeur Promise
    return new Promise((resolve)=>{
            // Pour récupérer les données au bout d'une seconde, le temps que les produits chargent.
        setTimeout(()=>{
            //constante déclarée dans le fichier "produits.js"
            resolve(MAILLOTS)
        }
        // attendre une seconde avant le chargement (timer)
        , 1000)
    })

}
            // (async ()=>{
            //     let produits = await getProduits()
            //     
            //     let container = document.querySelector(".container-maillots-produits");
            //     let divUn = document.querySelector(".block-maillot-1");

            //     // On boucle sur les données du tableau qui contient les objets (les différents maillots)
            //         for (let i=0; i<produits.length; i++) {
            //             // On crée un élément HTML (source : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)
            //             let image = document.createElement("img");
            //             image.src = produits[i].image ;
            //             // On ajoute à la fin du corps du document
            //             divUn.appendChild(image);
            //         }

            // })()
// async permet de retourner la promesse déclarée au dessus
(async ()=>{
    // On attend les résultats de Promise (ici getProduits())
    let produits = await getProduits()


    // Une fois les données retournées je recupère le container qui va recevoir les maillots
    let divDeux = document.querySelector(".block-maillot-2");
   

    // On boucle sur les données du tableau qui contient les objets (les différents maillots)
        for (let i=0; i<produits.length; i++) {
            // On crée des éléments HTML (source : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)
            
            let image = document.createElement("img");
                image.setAttribute("class", "img-products"); // Pour les cibler en css
            let divProduits = document.createElement("div");
                divProduits.setAttribute("class", "div-products");
            let nomProduit = document.createElement("h2");
                nomProduit.setAttribute("class", "data-products");
            let couleurProduit = document.createElement("p");
                couleurProduit.setAttribute("class", "data-products");
            let descriptionProduit = document.createElement("p");
                descriptionProduit.setAttribute("class", "data-products");
            let prixProduit = document.createElement("p");
                prixProduit.setAttribute("class", "data-products");
            let ajouterPanier = document.createElement("button");
                ajouterPanier.setAttribute("id", "data-products");
          
            
                

            // On recupère les données à afficher (.pour accéder aux propriétés de l'objet donc aux valeurs)
            image.src = produits[i].image ;
            nomProduit.innerHTML = produits[i].nom ;
            couleurProduit.innerHTML = "Couleur : " + produits[i].couleur ;
            descriptionProduit.innerHTML = "Description produit : " +  produits[i].description;
            prixProduit.innerHTML = "Prix : " + produits[i].prix  + "€";



            ajouterPanier.innerHTML = produits[i].ajout;
            // Au clic sur le bouton ajouter, on active la fonction (ajouter produit dans le panier et mettre à jour le panier)
            ajouterPanier.onclick = function () {
                // On vérifie que le nombre d'élément dans le panier pour ce produit est max 9
                    if(recupererIdPanier(produits[i].id) < 9) {
                        addProduct({id:produits[i].id, image: produits[i].image, prix:produits[i].prix, nom:produits[i].nom})
                        UpdatePanier();
                        //Pour le panier responsive
                        // UpdatePanierDeux();
                    }
                    else {
                        // alert pour indiquer que le maximum est atteint
                        alert("Vous avez déjà 9 produits de ce type dans votre panier");
                    }

            }

            //on ajoute nos éléments HTML dans la page
            divProduits.appendChild(image); 
            divProduits.appendChild(nomProduit);
            divProduits.appendChild(couleurProduit);
            divProduits.appendChild(prixProduit);
            divProduits.appendChild(descriptionProduit);
            divProduits.appendChild(ajouterPanier);
            divDeux.appendChild(divProduits);


        }


     


})()



