let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    if(checkDate(box.id)){
        box.classList.add("active");
    }
    else{
        box.classList.add("inactive");
    }
    box.addEventListener("click", function () {
        if(checkDate(box.id)){
            if(!volume){
                open.play();
            }
            openBox();
            getTheBoxInfo(box);
        }
        else{
            if(!volume){
                notOpen.play();
            }
        }
    });
});

function checkDate(day) {
    let currentDate = new Date();
    let boxNumber = parseInt(day);
    let boxDate = new Date(2023, 11, boxNumber, 0, 0, 0);
    if (currentDate >= boxDate) {
        return true;
    } else {
        return false;
    }
}

function openBox() {
    let center = document.getElementById("center");
    center.style.display = "none";
    let centerOpen = document.getElementById("centerOpen");
    centerOpen.style.display = "flex";
    if(!volume){
        bgCard.play();
        bgCard.loop = true;
    }
}

function closeBox() {
    let center = document.getElementById("center");
    center.style.display = "flex";
    let centerOpen = document.getElementById("centerOpen");
    centerOpen.style.display = "none";
    if(!volume){
        bgCard.pause();
        close.play();
    }
}

function getTheBoxInfo(box) {
    let titel = document.getElementById("titel");
    let text = document.getElementById("text");

    let [ boxTitel, boxText ] = getValueOfBox(box.id)
    titel.innerHTML = boxTitel;
    text.innerHTML = boxText;
}

function getValueOfBox(boxId) {
    let box = days[boxId];
    return [ box.titel, box.text ];
}

let volume = true;

let volumeButton = document.getElementById("volume");
let muteButton = document.getElementById("mute");
volumeButton.style.display = "none";
muteButton.style.display = "block";

let bg = new Audio('/bg.mp3');
let open = new Audio('/open.mp3');
let notOpen = new Audio('/notOpen.mp3');
let bgCard = new Audio('/bgCard.mp3');
let close = new Audio('/close.mp3');

function mute(){
    if(volume){
        volumeButton.style.display = "block";
        muteButton.style.display = "none";
        volume = false;
        bg.play();
        bg.loop = true;
    }
    else{
        volumeButton.style.display = "none";
        muteButton.style.display = "block";
        volume = true;
        bg.pause();
        bgCard.pause();
    }
}

let days = {
    "1": {
        "titel": "1",
        "text": "Was hat Santa Claus, wenn er im Kamin steckenbleibt?<br>Claustrophobie."
    },
    "2": {
        "titel": "2",
        "text": "Verkehrskontrolle. Der Polizist: „Haben Sie etwas getrunken?“ – Autofahrer: „Nein.“ – Polizist: „Sollten Sie aber! Mindestens 2 Liter am Tag.“"
    },
    "3": {
        "titel": "3",
        "text": "Freitagabend. „Schatz, sollen wir uns ein schönes Wochenende machen?“ – „Klar!“ – „Klasse, dann bis Montag!“"
    },
    "4": {
        "titel": "4",
        "text": "Sagt der Arzt zum Kleinkünstler: „Sie haben noch 6 Monate zu leben.“ – Darauf der Kleinkünstler: 6 Monate? So lange kann ich mir nicht leisten!“"
    },
    "5": {
        "titel": "5",
        "text": "„Dingdong. „Guten Tag, wir sammeln fürs Kinderheim. Haben Sie etwas abzugeben?“ – „Kevin, Justin – kommt mal her!“"
    },
    "6": {
        "titel": "6",
        "text": "Ein Malerlehrling soll die Markierungen auf der Autobahn erneuern. Am ersten Tag schafft er mehr als zwei Kilometer, am zweiten Tag nur noch 500 Meter, am dritten sogar nur noch 200 Meter. Fragt der Chef: „Warum schaffst du nicht mehr so viel wie am Anfang?“ Darauf der Lehrling: „Naja, der Weg zum Farbeimer ist inzwischen echt weit…“"
    },
    "7": {
        "titel": "7",
        "text": "„Ich kuschele 2-3 Mal in der Woche mit meinem Mann.“ – „Ich meistens nur einmal.“ – „Aber du hast doch gar keinen Mann?“ – „Oh, ich dachte, wir reden über deinen Mann.“"
    },
    "8": {
        "titel": "8",
        "text": "„Ich würde ja gerne ein paar Kilos verlieren. Aber ich verliere nie. Ich bin ein Gewinner!“"
    },
    "9": {
        "titel": "9",
        "text": "2 Blinde am Kiosk, einer niest laut. Sagt der andere: „Mach mir bitte auch ein Bier auf.“"
    },
    "10": {
        "titel": "10",
        "text": "Gast zum Kellner: „Zahlen, bitte!“ – Kellner: „Acht, Sieben, Sechs, Fünf…“"
    },
    "11": {
        "titel": "11",
        "text": "Eine alte Dame sitzt im Wartezimmer. Ein Neonazi setzt sich dazu. Die Dame: „Sie Ärmster! Erst Chemo und dann noch die orthopädischen Schuhe!“"
    },
    "12": {
        "titel": "12",
        "text": "„Was machen Sie beruflich?“ – „Ich bin Zauberer.“ – „Und was für Tricks können Sie?“ – „Ich zersäge Menschen.“ – „Ach, haben Sie denn auch Geschwister?“ – „Ja, zwei Halbschwestern.“"
    },
    "13": {
        "titel": "13",
        "text": "Kommt ein 70-Jähriger in die Apotheke fragt nach Viagra. Der Apotheker gibt ihm eine Packung und der Mann nimmt sofort eine Tablette heraus, zerdrückt sie auf dem Tresen und schnupft das Pulver durch die Nase. Der Apotheker erschrickt: „Sie machen das ganz falsch!“ Sagt der Mann: „Alles ok, in meinem Alter findet Sex ohnehin nur noch im Kopf statt.“"
    },
    "14": {
        "titel": "14",
        "text": "Ein Cola-Vertreter trifft den Papst und sagt: „Wir zahlen 10 Millionen Euro, wenn im Gottesdienst ab jetzt gesagt wird „Unsere tägliche Cola gib‘ uns heute.“ – Darauf der Papst: Keine Chance, das können wir nicht machen!“ – Der Vertreter: „Wir würden sogar 100 Millionen an die Kirche zahlen.“ – Der Papst überlegt und fragt seinen Marketingleiter: „Wie lange läuft der Vertrag mit der Bäckerei noch?“"
    },
    "15": {
        "titel": "15",
        "text": "Ein Römer geht in die Bar, streckt zwei Finger aus und sagt: „Fünf Bier bitte!“"
    },
    "16": {
        "titel": "16",
        "text": "Pessimist: „Schlimmer geht’s nicht!“ – Optimist: „Doch!“"
    },
    "17": {
        "titel": "17",
        "text": "Meine Oma arbeitet für das FBI – wir nennen sie jetzt nur noch Top-Sigrid."
    },
    "18": {
        "titel": "18",
        "text": "Unterhalten sich 2 Kerzen: „Ist Wasser gefährlich?“ – „Davon kannst du ausgehen!“"
    },
    "19": {
        "titel": "19",
        "text": "Haben meiner Pflanze angeboten, sie nur noch 1x pro Woche zu gießen. Sie ist darauf eingegangen."
    },
    "20": {
        "titel": "20",
        "text": "Ich kenne einen lustigen Bahnwitz – weiß aber nicht, ob der ankommt."
    },
    "21": {
        "titel": "21",
        "text": "„Wie nennt man einen Ritter ohne Helm?“ – Willhelm"
    },
    "22": {
        "titel": "22",
        "text": "Kundin im Laden: „Darf ich das Kleid im Schaufenster probieren?“ – Verkäufer: „Nein, bitte nur in der Umkleidekabine!“"
    },
    "23": {
        "titel": "23",
        "text": "„Welche Autofahrer sind besonders nett?“ – Geisterfahrer, die sind total entgegenkommend."
    },
    "24": {
        "titel": "24",
        "text": "\"Ach Oma, die Geige von Dir war mein schönstes Weihnachtsgeschenk.\" \"Tatsächlich?\", freut sich Omi. \"Ja, wirklich. Mami gibt mir nämlich jeden Tag fünf Euro, wenn ich nicht darauf spiele!\""
    }
};
