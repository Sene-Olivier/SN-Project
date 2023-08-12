/* ####################################################################################
 ____     __  __  ____    ____    ____    ____    ____     ______  __  __   ____      
/\  _`\  /\ \/\ \/\  _`\ /\  _`\ /\  _`\ /\  _`\ /\  _`\  /\  _  \/\ \/\ \ /\  _`\    
\ \ \/\_\\ \ \_\ \ \ \L\_\ \ \L\_\ \,\L\_\ \ \L\_\ \ \/\_\\ \ \L\ \ \ \/'/'\ \ \L\_\  
 \ \ \/_/_\ \  _  \ \  _\L\ \  _\L\/_\__ \\ \  _\L\ \ \/_/_\ \  __ \ \ , <  \ \  _\L  
  \ \ \L\ \\ \ \ \ \ \ \L\ \ \ \L\ \/\ \L\ \ \ \L\ \ \ \L\ \\ \ \/\ \ \ \\`\ \ \ \L\ \
   \ \____/ \ \_\ \_\ \____/\ \____/\ `\____\ \____/\ \____/ \ \_\ \_\ \_\ \_\\ \____/
    \/___/   \/_/\/_/\/___/  \/___/  \/_____/\/___/  \/___/   \/_/\/_/\/_/\/_/ \/___/ 
  
#######################################################################################
                                            |
Le site de la promo Cheesecake v1.0         |
                                           /
    Réalisé avec Express                  /
                                         /
#######################################*/


// ##############################
// --- Imports ---
// #########################

const express = require('express');     // On importe express
const app = express();                  // On a initialisé notre server express dans une variable

const students = require('./students'); // On importe la liste des étudiants
const promo = require('./promo');       // On importe les détails de la promo


// ##############################
// --- Routes ---
// #########################
app.get('/', (req, res) => {                    // On créé une route pour la page d'accueil
    res.send(createHomePage());
});

app.get('/students', (req, res) => {            // On créé une route pour afficher la liste des étudiants
    res.send(createStudentsListPage(students));
});

app.get('/students/:githubUsername', (req, res) => {            // On créé une route pour afficher le détail d'un étudiant

});


// ##############################
// --- Bind & Listen ---
// #########################
app.listen(3000); // On branche notre server au port 3000 et on lui demande d'écouter les requêtes entrantes vers ce port

// ##############################
// --- Functions ---
// #########################
/**
 * createHomePage()
 * 
 * Génère la page d'accueil de notre site
 */
function createHomePage() {
    const html = 
    `
        <h1>${promo.name}</h1>

        <p>Il y a ${students.length} apprenants dans cette promo.</p>
        <p>Cette promo est animée par ${promo.helper}, et ${promo.prof} !</p>

        <a href="/students">Voir la liste des étudiants</a>
    `;
    return html;
}

/**
 * createStudentsListPage(studentsList)
 * 
 * Génère la page avec la liste des étudiants de la promo
 */
function createStudentsListPage(studentsList) {
    let html = 
    `
        <ul>
    `;
    for (const student of studentsList) {
        html += `
        <li>
            <a href="">${student.firstname} ${student.lastname} - ${student.pseudoGithub} </a>
        </li>
        `
    }
    html += '</ul>';

    return html;
}


/**
 * createProfilePage(studentsList, pseudo)
 * 
 * Génère la page profil d'un étudiant
 */



