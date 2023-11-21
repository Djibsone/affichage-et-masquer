$(document).ready(function () {
    
    var l_1 = document.querySelector(".l_1");
    var l_2 = document.querySelector(".l_2");
    var l_3 = document.querySelector(".l_3");
    var l_4 = document.querySelector(".l_4");
    var l_5 = document.querySelector(".l_5");
    var _btn = document.querySelector("._btn");

    var filiere = $('#filiere');
    var departement = $('#departement');
    var commune = $('#commune');
    var arrondissement = $('#arrondissement');
    var village = $('#village');
    var nom = $('#nom');

    filiere.on("input", function () {
        //if (filiere.val().trim() !== "") {
        if (filiere.val().length >= 3) {
            //departement.show();  // Affiche le champ "departement"
            l_1.style.display = "block"; // Pour le rendre visible
        } else {
            //departement.hide();   // Masque le champ "departement"
            l_1.style.display = "none"; // Pour le rendre invisible
        }
    });

    departement.on("change", function () {
        if (departement) {
            l_2.style.display = "block"; // Pour le rendre visible
        } else {
            l_2.style.display = "none"; // Pour le rendre invisible
        }
    });

    commune.on("change", function () {
        if (commune) {
            l_3.style.display = "block"; // Pour le rendre visible
        } else {
            l_3.style.display = "none"; // Pour le rendre invisible
        }
    });

    arrondissement.on("change", function () {
        if (arrondissement) {
            l_4.style.display = "block"; // Pour le rendre visible
        } else {
            l_4.style.display = "none"; // Pour le rendre invisible
        }
    });

    village.on("change", function () {
        if (village) {
            l_5.style.display = "block"; // Pour le rendre visible
        } else {
            l_5.style.display = "none"; // Pour le rendre invisible
        }
    });

    nom.on("input", function () {
        if (nom.val().trim() !== "") {
            _btn.style.display = "block"; // Pour le rendre visible
        } else {
            _btn.style.display = "none"; // Pour le rendre invisible
        }
    });
});