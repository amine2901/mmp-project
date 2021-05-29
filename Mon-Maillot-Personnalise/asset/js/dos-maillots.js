 // Voir le dos des maillots au passage de la souris (page accueil)
 
let blanc = document.getElementById("javascript-maillot-blanc");
let rouge = document.getElementById("javascript-maillot-rouge");
let bleu = document.getElementById("javascript-maillot-bleu");



    // évènements
    blanc.addEventListener("mouseenter", function() {
        blanc.src="asset/img/dos_blanc_floc.png";
    })
    blanc.addEventListener("mouseleave", function() {
        blanc.src="asset/img/blanc.png";
    })


    rouge.addEventListener("mouseenter", function() {
        rouge.src="asset/img/dos_rouge_floc.png";
    })
    rouge.addEventListener("mouseleave", function() {
        rouge.src="asset/img/rouge.png";
    })


    bleu.addEventListener("mouseenter", function() {
        bleu.src="asset/img/dos_bleu_floc.png";
    })
    bleu.addEventListener("mouseleave", function() {
        bleu.src="asset/img/bleu.png";
    })


