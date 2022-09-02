"use strict";
// Je récupère les éléments via QuerySelector afin de les manipuler
const btnSubmit = document.querySelector(".todo-btn");
const inputTask = document.querySelector(".todo-input");
const formTask = document.querySelector(".todo-form");
const taskList = document.querySelector(".todo-list");
const btnDeleteAll = document.querySelector(".todo-delete-all");
// Création d'un tableau pour stocker toutes mes nouvelles tâches
const tasks = JSON.parse(localStorage.getItem("task") || "[]");
// IMPORTANT : JSON.parse permet de convertir une chaîne de caractère JSON au format spécifié dans le paramètre
const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault évite à ma page de se rafraichir. Dans mon cas, cela permet de vérifier que l'event est actif
    // Création d'un nouvel objet newTask
    const newTask = {
        date: new Date(),
        task: inputTask.value,
        completed: false // Booléen false pour initialiser par défaut
    };
    // Sauvegarder la tâche dans le localStorage
    // Ajout de la fonction appendTask
    appendTask(newTask);
    //Vider l'input
    inputTask.value = "";
};
// Je vais gérer l'EventListener sur le form (btn Submit)
formTask.addEventListener("submit", e => handleSubmit(e));
// Fonction d'ajout d'une nouvelle tâche
const appendTask = (newTask) => {
    const newLi = document.createElement("li"); //Création d'un li pour contenir ensuite l'input checkbox
    const checkB = document.createElement("input"); // Création de la checkbox
    checkB.type = "checkbox"; // Je défini le type de l'input
    checkB.addEventListener("change", () => {
        // console.log("Vérification");
        newTask.completed = checkB.checked;
    });
    newLi.append(newTask.task, checkB);
    taskList.prepend(newLi); //prepend permet de mettre en haut de la liste la dernière tâche ajouté
};
