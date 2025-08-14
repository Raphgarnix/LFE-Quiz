const body = document.getElementById('body');
const backButton = document.getElementById('backbutton');

function resetHtml(){
    body.innerHTML = `
        <nav>
            <div class="newsoundbutton" onclick="newSound()">Credits</div>
            <div class="closebutton" onclick="closeWindow()">Help</div>
        </nav>
        <div class="pictures" id="pictures-container">
            <script src="script.js"></script>
        </div>
    `;
    picturesReload();

}

function startQuiz(number) {
    let AnzahlAnAufgaben;
    let Anzahl;
    let Titel;
    let Bild;

    // Variablen je nach Quiz setzen
    switch(number) {
        case 1:
            AnzahlAnAufgaben = 1;
            Anzahl = "ersten";
            Titel = "Die Herren von Winterfell";
            Bild = "Assets/Die Herren von Winterfell  Das Lied von Eis und Feuer Bd 1.jpeg";
            break;
        case 2:
            AnzahlAnAufgaben = 1;
            Anzahl = "zweiten";
            Titel = "Das Erbe von Winterfell";
            Bild = "Assets/Das Lied von Eis und Feuer 02 Das Erbe von Winterfell.jpg";
            break;
        case 3:
            AnzahlAnAufgaben = 1;
            Anzahl = "dritten";
            Titel = "Der Thron der Sieben Königreiche";
            Bild = "Assets/Das Lied von Eis und Feuer 03 Der Thron der Sieben Königreiche.jpg";
            break;
        case 4:
            AnzahlAnAufgaben = 1;
            Anzahl = "vierten";
            Titel = "Die Saat des goldenen Löwen";
            Bild = "Assets/Das Lied von Eis und Feuer 04 Die Saat des goldenen Löwen.jpg";
            break;
        case 5:
            AnzahlAnAufgaben = 1;
            Anzahl = "fünften";
            Titel = "Sturm der Schwerter";
            Bild = "Assets/Das Lied von Eis und Feuer 05 Sturm der Schwerter.jpg";
            break;
        case 6:
            AnzahlAnAufgaben = 1;
            Anzahl = "sechsten";
            Titel = "Die Königin der Drachen";
            Bild = "Assets/Das Lied von Eis und Feuer 06 Die Königin der Drachen.jpg";
            break;
        case 7:
            AnzahlAnAufgaben = 1;
            Anzahl = "siebten";
            Titel = "Zeit der Krähen";
            Bild = "Assets/Das Lied von Eis und Feuer 07 Zeit der Krähen  Martin, George R.R., Helweg, Andreas.jpg";
            break;
        case 8:
            AnzahlAnAufgaben = 1;
            Anzahl = "achten";
            Titel = "Die dunkle Königin";
            Bild = "Assets/Das Lied von Eis und Feuer 08 Die dunkle Königin.jpg";
            break;
        case 9:
            AnzahlAnAufgaben = 1;
            Anzahl = "neunten";
            Titel = "Der Sohn des Greifen";
            Bild = "Assets/Das Lied von Eis und Feuer 09 von George R.R. Martin - faltershop.at.jpg";
            break;
        case 10:
            AnzahlAnAufgaben = 1;
            Anzahl = "zehnten";
            Titel = "Ein Tanz mit Drachen";
            Bild = "Assets/Das Lied von Eis und Feuer 10 Ein Tanz mit Drachen.jpg";
            break;
        
        
            // ...weitere Fälle
        default:
            AnzahlAnAufgaben = 1;
            Anzahl = "ersten";
            Titel = "Die Herren von Winterfell";
            Bild = "Assets/Die Herren von Winterfell  Das Lied von Eis und Feuer Bd 1.jpeg";
    }

    // HTML-Block einfügen (einmalig)
    body.innerHTML = `
        <nav>
            <button class="newsoundbutton" onclick="resetHtml()">Back</button>
            <div class="closebutton" onclick="closeWindow()">Help</div>
            <img class="kleinimage" src="${Bild}">
            <label class="kleinlabel">0 von ${AnzahlAnAufgaben}</label>
        </nav>

        <div class="einleitungspanel">
            <div class="einleitungstext">
                Das Quiz zum ${Anzahl} Teil der Buchreihe <em>Das Lied von Eis und Feuer</em> mit dem Titel <em>${Titel}</em> wurde ausgewählt.  
                <br><br>
                Wenn Sie unten auf <strong>„OKAY“</strong> bestätigen, beginnt das Quiz und Ihnen werden verschiedene Fragen zum Buch gestellt.  
                <br><br>
                Versuchen Sie, so viele Fragen wie möglich richtig zu beantworten. Es gibt keinen Zeitdruck – nur Ihre Fehler werden gezählt.  
                <br><br>
                Viel Spaß und viel Erfolg! Mal sehen, wie viele Sie richtig beantworten können …
            </div>

            <div class="placeholderEinleitungsbutton">
            </div>

        </div>
    `;
    let button = document.createElement("div");
    button.className = "einleitungsbutton";
    button.textContent = "OKAY";
    button.addEventListener("click", () => startRealQuiz(number));
    document.querySelector(".placeholderEinleitungsbutton").appendChild(button);

}

function startRealQuiz(number){
    
    let AnzahlAnAufgaben;
    let Bild;
    let Quizes = [];
    let AnzahlBearbeiten = 0;
    let AnzahlGeskipped = 0;

    // Variablen je nach Quiz setzen
    switch(number) {
        case 1:
            Bild = "Assets/Die Herren von Winterfell  Das Lied von Eis und Feuer Bd 1.jpeg";
            Quizes = [
                `<div><button id="nextQuizButton">Hi</button></div>`,
                `<div><button id="nextQuizButton">Hallo</button></div>`,
                `<div><button id="nextQuizButton">Ahoi</button></div>`
            ];
            AnzahlAnAufgaben = (Quizes.length);
            break;
        case 2:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 02 Das Erbe von Winterfell.jpg";
            break;
        case 3:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 03 Der Thron der Sieben Königreiche.jpg";
            break;
        case 4:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 04 Die Saat des goldenen Löwen.jpg";
            break;
        case 5:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 05 Sturm der Schwerter.jpg";
            break;
        case 6:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 06 Die Königin der Drachen.jpg";
            break;
        case 7:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 07 Zeit der Krähen  Martin, George R.R., Helweg, Andreas.jpg";
            break;
        case 8:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 08 Die dunkle Königin.jpg";
            break;
        case 9:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 09 von George R.R. Martin - faltershop.at.jpg";
            break;
        case 10:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Das Lied von Eis und Feuer 10 Ein Tanz mit Drachen.jpg";
            break;
        
        
            // ...weitere Fälle
        default:
            AnzahlAnAufgaben = 1;
            Bild = "Assets/Die Herren von Winterfell  Das Lied von Eis und Feuer Bd 1.jpeg";
    }
    
    body.innerHTML = `
        <nav>
            <button class="newsoundbutton" onclick="resetHtml()">Back</button>
            <button class="refreshbutton" id="refreshbutton" onclick="loadRandomQuiz()">Reroll</button>
            <div class="closebutton" onclick="closeWindow()">Help</div>
            <img class="kleinimage" src="${Bild}">
            <label class="kleinlabel" id="kleinlabel">0  von  ${AnzahlAnAufgaben}</label>
            <label class="geskippedlabel" id="geskippedlabel">${AnzahlGeskipped} mal Skipped</label>
        </nav>
        <div class="quizPanel" id="quizPanel">
        </div>
        
    `;

    const quizPanel = document.getElementById('quizPanel');
    const refreshbutton = document.getElementById("refreshbutton");
    const kleinlabel = document.getElementById('kleinlabel');
    const geskippedlabel = document.getElementById('geskippedlabel');

    function loadRandomQuiz() {
        if (Quizes.length === 0) {
            quizPanel.innerHTML = `<div>Keine weiteren Fragen!</div>`;
            refreshbutton.disabled = true;
            return;
        }

        const randomIndex = Math.floor(Math.random() * Quizes.length);
        quizPanel.innerHTML = Quizes[randomIndex];
        Quizes.splice(randomIndex, 1); // remove shown quiz

        const nextQuizButton = document.getElementById("nextQuizButton");
        if (nextQuizButton) {
            nextQuizButton.addEventListener("click", loadRandomQuiz);
        }

        AnzahlBearbeiten++;
        kleinlabel.textContent = AnzahlBearbeiten + " von " + AnzahlAnAufgaben;
    }
    function erhöhenDerAnzahlGeskipped(){
        AnzahlGeskipped++;
        geskippedlabel.textContent = AnzahlGeskipped + " mal Skipped";

    }

    refreshbutton.addEventListener("click", () => {
        erhöhenDerAnzahlGeskipped();
        loadRandomQuiz();
    });

    // First load
    loadRandomQuiz();
}



function picturesReload(){
    const pictures = [
    { name: "1. Die Herren von Winterfell", image: "Die Herren von Winterfell  Das Lied von Eis und Feuer Bd 1.jpeg", eventId: 1 },
    { name: "2. Das Erbe von Winterfell", image: "Das Lied von Eis und Feuer 02 Das Erbe von Winterfell.jpg", eventId: 2 },
    { name: "3. Der Thron der Sieben Königreiche", image: "Das Lied von Eis und Feuer 03 Der Thron der Sieben Königreiche.jpg", eventId: 3 },
    { name: "4. Die Saat des goldenen Löwen", image: "Das Lied von Eis und Feuer 04 Die Saat des goldenen Löwen.jpg", eventId: 4 },
    { name: "5. Sturm der Schwerter", image: "Das Lied von Eis und Feuer 05 Sturm der Schwerter.jpg", eventId: 5 },
    { name: "6. Die Königin der Drachen", image: "Das Lied von Eis und Feuer 06 Die Königin der Drachen.jpg", eventId: 6 },
    { name: "7. Zeit der Krähen", image: "Das Lied von Eis und Feuer 07 Zeit der Krähen  Martin, George R.R., Helweg, Andreas.jpg", eventId: 7 },
    { name: "8. Die dunkle Königin", image: "Das Lied von Eis und Feuer 08 Die dunkle Königin.jpg", eventId: 8 },
    { name: "9. Der Sohn des Greifen", image: "Das Lied von Eis und Feuer 09 von George R.R. Martin - faltershop.at.jpg", eventId: 9 },
    { name: "10. Ein Tanz mit Drachen", image: "Das Lied von Eis und Feuer 10 Ein Tanz mit Drachen.jpg", eventId: 10 },
];


// Container für die Champion-Boxen
const container = document.getElementById('pictures-container');

// Dynamisch Champion-Boxen erstellen
pictures.forEach(picture => {
    // Erstelle die Box für den Champion
    const box = document.createElement('div');
    box.className = 'pictures-box';

    // Erstelle das Bild des Champions
    const img = document.createElement('img');
    img.src = `Assets/${picture.image}`;
    img.alt = picture.name;
    img.onclick = () => startQuiz(picture.eventId);


    // Erstelle den Namen des Champions
    const name = document.createElement('p');
    name.textContent = picture.name;

    // Füge Bild und Name zur Box hinzu
    box.appendChild(img);
    box.appendChild(name);

    // Füge die Box zum Container hinzu
    container.appendChild(box);
});

// Holen Sie sich alle Charakterboxen
const picturesBoxes = document.querySelectorAll('.pictures-box');

// Füge Hover-Ereignisse hinzu
picturesBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        picturesBoxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.add('grayscale'); // Füge die Graustufen-Klasse hinzu
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        picturesBoxes.forEach(otherBox => {
            otherBox.classList.remove('grayscale'); // Entferne die Graustufen-Klasse
        });
    });
});
}

const pictures = [
    { name: "1. Die Herren von Winterfell", image: "Die Herren von Winterfell  Das Lied von Eis und Feuer Bd 1.jpeg", eventId: 1 },
    { name: "2. Das Erbe von Winterfell", image: "Das Lied von Eis und Feuer 02 Das Erbe von Winterfell.jpg", eventId: 2 },
    { name: "3. Der Thron der Sieben Königreiche", image: "Das Lied von Eis und Feuer 03 Der Thron der Sieben Königreiche.jpg", eventId: 3 },
    { name: "4. Die Saat des goldenen Löwen", image: "Das Lied von Eis und Feuer 04 Die Saat des goldenen Löwen.jpg", eventId: 4 },
    { name: "5. Sturm der Schwerter", image: "Das Lied von Eis und Feuer 05 Sturm der Schwerter.jpg", eventId: 5 },
    { name: "6. Die Königin der Drachen", image: "Das Lied von Eis und Feuer 06 Die Königin der Drachen.jpg", eventId: 6 },
    { name: "7. Zeit der Krähen", image: "Das Lied von Eis und Feuer 07 Zeit der Krähen  Martin, George R.R., Helweg, Andreas.jpg", eventId: 7 },
    { name: "8. Die dunkle Königin", image: "Das Lied von Eis und Feuer 08 Die dunkle Königin.jpg", eventId: 8 },
    { name: "9. Der Sohn des Greifen", image: "Das Lied von Eis und Feuer 09 von George R.R. Martin - faltershop.at.jpg", eventId: 9 },
    { name: "10. Ein Tanz mit Drachen", image: "Das Lied von Eis und Feuer 10 Ein Tanz mit Drachen.jpg", eventId: 10 },
];


// Container für die Champion-Boxen
const container = document.getElementById('pictures-container');

// Dynamisch Champion-Boxen erstellen
pictures.forEach(picture => {
    // Erstelle die Box für den Champion
    const box = document.createElement('div');
    box.className = 'pictures-box';

    // Erstelle das Bild des Champions
    const img = document.createElement('img');
    img.src = `Assets/${picture.image}`;
    img.alt = picture.name;
    img.onclick = () => startQuiz(picture.eventId);

    // Erstelle den Namen des Champions
    const name = document.createElement('p');
    name.textContent = picture.name;

    // Füge Bild und Name zur Box hinzu
    box.appendChild(img);
    box.appendChild(name);

    // Füge die Box zum Container hinzu
    container.appendChild(box);
});

// Holen Sie sich alle Charakterboxen
const picturesBoxes = document.querySelectorAll('.pictures-box');

// Füge Hover-Ereignisse hinzu
picturesBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        picturesBoxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.add('grayscale'); // Füge die Graustufen-Klasse hinzu
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        picturesBoxes.forEach(otherBox => {
            otherBox.classList.remove('grayscale'); // Entferne die Graustufen-Klasse
        });
    });
});