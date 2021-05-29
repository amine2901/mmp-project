// EXPLICATIONS


// DECLARATION  des objets dans une constante = On utilisera  les méthodes suivantes pour convertir l'objet au format JSON puis reconvertir le JSON en objet Javascript




/* 
- La méthode stringify() convertit une valeur JavaScript en chaîne JSON. 
On peut lui passer une fonction qui modifie le processus de transformation ou un tableau de chaînes de caractères et de nombres qui sont utilisés
comme liste blanche pour sélectionner/filtrer les propriétés de l’objet à inclure dans la chaîne JSON en deuxième argument facultatif. 

- La méthode parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l’objet décrit par cette chaîne. 
On peut lui passer une option en deuxième argument qui va prendre la forme d’une fonction permettant transformer la valeur analysée avant de la transformer.

*/ 



// source : https://www.pierre-giraud.com/javascript-apprendre-coder-cours/json/#:~:text=L'objet%20JavaScript%20global%20JSON,objet%20d%C3%A9crit%20par%20cette%20cha%C3%AEne.


const MAILLOTS =  [
    { 
        id : 1, // clé : valeur
        nom : "Maillot Blanc", 
        couleur: "Blanc",
        description : "Maillot uni blanc.",
        quantite: 2,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/blanc.png",
        image_hover : "asset/img/blanc-benzema.png",

    
    },

    { 
        id : 2, 
        nom : "Maillot Or", 
        couleur: "Or",
        description : "Maillot uni or/doré",
        quantite: 4,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/or.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 3, 
        nom : "Maillot Bleu", 
        couleur: "Bleu",
        description : "Maillot uni bleu",
        quantite: 6,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/bleu.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 4, 
        nom : "Maillot Turquoise", 
        couleur: "Turquoise",
        description : "Maillot uni turquoise",
        quantite: 8,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/turquoise.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 5, 
        nom : "Maillot Jaune", 
        couleur: "Jaune",
        description : "Maillot uni jaune",
        quantite: 1,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/jaune.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 6, 
        nom : "Maillot Violet", 
        couleur: "Violet",
        description : "Maillot uni violet",
        quantite: 8,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/violet.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 7, 
        nom : "Maillot Noir", 
        couleur: "Noir",
        description : "Maillot uni noir",
        quantite: 3,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/noir.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 8, 
        nom : "Maillot Rouge", 
        couleur: "Rouge",
        description : "Maillot uni rouge",
        quantite: 9,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/rouge.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 9, 
        nom : "Maillot Vert", 
        couleur: "Vert",
        description : "Maillot uni vert",
        quantite: 2,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/vert.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    
    { 
        id : 10, 
        nom : "Maillot Usa", 
        couleur: "Blanc",
        description : "Maillot usa",
        quantite: 7,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/usa.jpg",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 11, 
        nom : "Maillot Orange", 
        couleur: "Orange",
        description : "Maillot uni orange",
        quantite: 1,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/orange.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

    { 
        id : 12, 
        nom : "Maillot Blanc cassé", 
        couleur: "Blanc cassé",
        description : "Maillot uni blanc cassé",
        quantite: 5,
        prix : 35,
        ajout : "Ajouter au panier",
        image : "asset/img/blanc.png",
        image_hover : "asset/img/blanc-benzema.png",
    
    },

];