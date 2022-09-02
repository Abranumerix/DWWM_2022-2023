// ----------------------------------------
// Projet 1 - Générateur de citation
// ----------------------------------------

//Ce projet necéssite des connaissance sur :
//querySelector()
// addEventListener
// L'objet Math
// innerText - textContent



// -------------------------
//    ##################
// -------------------------

const btn = document.querySelector("#new-citation");
const citation = document.querySelector(".citation");
const auteur = document.querySelector(".auteur");

const citations = [

    {
        citation:`"Le plus grand bonheur du plus grand nombre est le fondement de la morale et de la législation."`,
        auteur:`Jeremy Bentham`,
        img: `/cours/Projet1/assets/img/projet-1.jpg`
    },

    {
        citation: `"Dans une certaine mesure, si vous avez vu un bidonville, vous les avez tous vus."` , 
        auteur: `Spiro Theodore Agnew`,
        img: `https://images.pexels.com/photos/10756778/pexels-photo-10756778.jpeg?cs=srgb&dl=pexels-nabil-naidu-10756778.jpg&fm=jpg`
    },

    {
        citation: `"L'expérience qui rend le plus heureux est celle qui a rendu le plus de gens heureux."`,
        auteur:  `Karl Marx`,
        img: `https://images.pexels.com/photos/12860063/pexels-photo-12860063.jpeg?cs=srgb&dl=pexels-%D0%BB%D1%8E%D0%B4%D0%B0-%D0%BA%D0%B0%D0%B2%D1%83%D0%BD-12860063.jpg&fm=jpg`
    }, 
    
    {
        citation: `"Les dîners de famille sont le plus souvent une épreuve d'indigestion nerveuse, précédée d'un ressentiment et d'un ennui cachés et accompagnée de tremblements psychosomatiques."`,
        auteur:  `M. F. K. Fisher`,
        img: `https://images.pexels.com/photos/696208/pexels-photo-696208.jpeg?cs=srgb&dl=pexels-david-besh-696208.jpg&fm=jpg`
    },
    
    {
        citation: `"Nous voterions tous pour le meilleur homme, mais il n'est jamais candidat."`,
        auteur:  `Will Rogers`,
        img: `https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg`
    }, 
    
    {
        citation: `"La seule chose qui cloche avec l'immortalité, c'est qu'elle a tendance à s'éterniser."`,
        auteur:  `Herb Caen`,
        img: `https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?cs=srgb&dl=pexels-thisisengineering-3913025.jpg&fm=jpg`
    },
    
    {
        citation: `"Tout le monde ne fait pas confiance aux peintures, mais les gens croient aux photographies."`,
        auteur:  `Ansel Adams`,
        img: `https://images.pexels.com/photos/339379/pexels-photo-339379.jpeg?cs=srgb&dl=pexels-marek-339379.jpg&fm=jpg`
    },  
    
    {
        citation: `"Apprendre, c'est découvrir ce que vous savez déjà. Faire, c'est démontrer que vous le savez. Enseigner, c'est rappeler aux autres qu'ils le savent tout aussi bien que vous. Vous êtes tous des apprenants, des exécutants et des enseignants."`,
        auteur:  `Richard David Bach`,
        img: `https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?cs=srgb&dl=pexels-pixabay-34107.jpg&fm=jpg`
    },  
    
    {
        citation: `"J'aime mieux être exposé aux inconvénients d'une trop grande liberté qu'à ceux d'un trop petit degré de liberté."`,
        auteur:  `Thomas Jefferson`,
        img: `https://images.pexels.com/photos/3214968/pexels-photo-3214968.jpeg?cs=srgb&dl=pexels-alex-azabache-3214968.jpg&fm=jpg`
    },
    
    {
        citation: `"Une hirondelle ne fait pas un été, mais un écheveau d'oies, fendant le brouillard du dégel de mars, c'est le printemps."`,
        auteur:  `Aldo Leopold`,
        img: `https://images.pexels.com/photos/3000260/pexels-photo-3000260.jpeg?cs=srgb&dl=pexels-wendy-wei-3000260.jpg&fm=jpg`
    }, 
    
    {
        citation: `"Lorsque je vais dans mon jardin avec une bêche et que je creuse un lit, je ressens une telle exaltation et une telle santé que je découvre que je me suis trompé pendant tout ce temps en laissant les autres faire pour moi ce que j'aurais dû faire de mes propres mains."`,
        auteur:  `Ralph Waldo Emerson`,
        img: `https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?cs=srgb&dl=pexels-jan-krnc-1043458.jpg&fm=jpg`
    }
];

btn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * citations.length);

    citation.innerText = citations[random].citation;
    auteur.innerText = citations[random].auteur;
    document.body.style.background = `url(${citations[random].img})no-repeat center /cover`;
})
