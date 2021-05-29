// Faire le responsive du menu de navigation => au click sur l'icone burger faire apparaitre les lien et disparaitre la navbar 

// alert("hello");

let burger = document.getElementById("menu-burger");

    burger.addEventListener("click", function() {

        let show = document.getElementById("show-nav"); 
        let hide = document.getElementById("hide");

        hide.style.display="none";
        show.style.display="block";
      
    })




    let burgerTwo = document.getElementById("burger-2");


        burgerTwo.addEventListener("click", function() {

        let show = document.getElementById("show-nav");
        let hide = document.getElementById("hide");


        show.style.display="none";
        hide.style.display="flex";
       
             

    })

