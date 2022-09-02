// ----------------------------------------
//   PROJET 6 - GAMES OF THRONE - API
//-----------------------------------------

// Variables

// Je sélectionne ma section "character" de mon fichier html
const character = document.querySelector("#character");

// Je vais récupérer l'URL de l'API
let urlAPI = "https://thronesapi.com/api/v2/Characters"
let url = document.location.href;
console.log(url);


// Fetch de l'API pour récupérer chaque éléments
const API = fetch(urlAPI)

.then(response => response.json())
.then (data => {
    data.map(perso => {

        // Déclaration des variables à récupérer
        let article = document.createElement("article");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let title = document.createElement("title");
        let family = document.createElement("family");
    
        
        article.classList.add("single-character");
        img.setAttribute('alt', `${perso.fullName}`);
        img.setAttribute('src', `${perso.imageUrl}`);

        // Ajout de noeuds
        character.appendChild(article);
        article.appendChild(img);
        article.appendChild(h3)
        article.appendChild(title);
        article.appendChild(family);

        h3.textContent = `${perso.fullName}`;
        title.textContent = `${perso.title}`;
        family.textContent = `${perso.family}`;

    })
})



.catch(err => console.error(err));











