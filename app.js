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

app.use(express.static('public/css'));
app.use(express.static('public/img'));

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
    ` <!DOCTYPE html>
        <html>
        <head>
        <link rel="stylesheet" type="text/css" href="/reset.css">
        <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body>
        <header><img class="logo" src="/CC-logo.png"></header>
            <main>
            <div class="main__container">
                <div class="main__container-left">
                    <h1 class="main__title">The unofficial website of the promo Cheesecake</h1>
                    <p>Cette promo est animée par ${promo.helper}, et ${promo.prof} !</p>
                    <div class="main__button-container">
                        <a href="/students" class="main__button">Voir la liste des ${students.length} étudiants</a>
                    </div>
                </div>
                <div class="main__container-right">
                    <img class="main__img" src="/container-right-img.png">
                </div>
            </div>
        <div class="main__bottom-container">
            <h3>Ils ne nous ont pas encore fait confiance</h3>
            <div class="main__logos-container">
                <img class="main__logos" src="/ibm-logo.png">
                <img class="main__logos" src="/oracle-logo.png">
                <img class="main__logos" src="/spacex-logo.png">
                <img class="main__logos" src="/microsoft-logo.png">
            </div>
        </di>

            </main>
        </body>
        </html>
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
    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/reset.css">
    <link rel="stylesheet" type="text/css" href="/styles.css">
    </head>
    <body>
        <ul>
    `;
    for (const student of studentsList) {
        html += `
        <li>
            <a href="">${student.firstname} ${student.lastname} - ${student.pseudoGithub} </a>
        </li>
        `;
    }
    html += `
        </ul>
    </body>
    </html>
    `;

    return html;
}


/**
 * createProfilePage(studentsList, pseudo)
 * 
 * Génère la page profil d'un étudiant
 */



