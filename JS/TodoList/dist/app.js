"use strict";
// Je récupère les éléments via QuerySelector afin de les manipuler
const btnSubmit = document.querySelector(".todo-btn");
const inputTask = document.querySelector(".todo-input");
const formTask = document.querySelector(".todo-form");
const taskList = document.querySelector(".todo-list");
const btnDeleteAll = document.querySelector(".todo-delete-all");
// Création d'un tableau pour stocker toutes mes nouvelles tâches
const tasks = JSON.parse(localStorage.getItem("task") || "[]");
// IMPORTANT : JSON.parse permet de convertir une chaîne de caractère JSON au format spécifié dans le paramètre ()
const saveTasks = () => {
    localStorage.setItem("task", JSON.stringify(tasks));
};
// Ajouter les nouvelles tâches au démarrage du DOM
window.addEventListener("DOMContentLoaded", () => {
    tasks.forEach(task => appendTask(task));
});
const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault évite à ma page de se rafraichir. Dans mon cas, cela permet de vérifier que l'event est actif
    // Création d'un nouvel objet newTask
    const newTask = {
        date: new Date(),
        task: inputTask.value,
        completed: false // Booléen false pour initialiser par défaut
    };
    // Sauvegarder la tâche dans le localStorage
    tasks.push(newTask);
    // Ajout de la fonction appendTask
    appendTask(newTask);
    //Sauvegarder l'envoi des tâches dans le localStorage
    saveTasks();
    //Vider l'input
    inputTask.value = "";
};
// Je vais gérer l'EventListener sur le form (btn Submit)
formTask.addEventListener("submit", e => handleSubmit(e));
// Fonction d'ajout d'une nouvelle tâche
const appendTask = (newTask) => {
    const newLi = document.createElement("li"); //Création d'un li pour contenir ensuite l'input checkbox
    const checkB = document.createElement("input"); // Création de la checkbox
    const btnDel = document.createElement("button");
    btnDel.classList.add("todo-delete-one"); // Création d'une class pour notre bouton supprimer afin de le manipuler dans le CSS
    checkB.type = "checkbox"; // Je défini le type de l'input
    btnDel.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    checkB.checked = newTask.completed;
    newTask.completed = checkB.checked;
    if (newTask.completed === true) {
        newLi.style.textDecoration = "line-through";
    }
    else {
        newLi.style.textDecoration = "none";
    }
    checkB.addEventListener("change", () => {
        // console.log("Vérification");
        newTask.completed = checkB.checked;
        if (newTask.completed === true) {
            newLi.style.textDecoration = "line-through";
        }
        else {
            newLi.style.textDecoration = "none";
        }
        saveTasks();
    });
    newLi.append(newTask.task, btnDel, checkB);
    taskList.prepend(newLi); //prepend permet de mettre en haut de la liste la dernière tâche ajouté
    btnDel.addEventListener("click", () => {
        newLi.remove();
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].task === newTask.task) {
                tasks.splice(0, 1);
            }
        }
        saveTasks();
    });
};
// Bouton TOUT EFFACER
const clearTasks = () => {
    const confirmDel = confirm("Êtes-vous sûr de vouloir tout effacer ?");
    if (confirmDel === true) {
        tasks.length = 0;
        saveTasks();
        taskList.textContent = "";
    }
};
btnDeleteAll.addEventListener("click", clearTasks);
