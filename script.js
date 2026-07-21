// ======================================
// PROJECT STARDUST
// Version 1.0
// ======================================

// ---------- BACKGROUND STARS ----------

const stars = document.getElementById("stars");

for(let i = 0; i < 250; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    star.style.animationDelay = Math.random() * 5 + "s";

    stars.appendChild(star);

}

// ---------- SHOOTING STARS ----------

const shootingContainer = document.getElementById("shooting-stars");

function createShootingStar(){

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top = Math.random()*40 + "%";
    star.style.left = Math.random()*100 + "%";

    shootingContainer.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },2000);

}

setInterval(createShootingStar,2500);

// ---------- SCREENS ----------

const loadingScreen = document.querySelector(".loading-screen");
const welcomeScreen = document.querySelector(".welcome-screen");
const missionScreen = document.querySelector(".mission-screen");
const chapterScreen = document.querySelector(".chapter-screen");
const galleryScreen = document.querySelector(".gallery-screen");

// ---------- BUTTONS ----------

const beginJourney = document.getElementById("beginJourney");
const acceptMission = document.getElementById("acceptMission");
const chapterContinue = document.getElementById("chapterContinue");

const chapterText = document.getElementById("chapterText");

const memoryImage = document.getElementById("memoryImage");
const memoryText = document.getElementById("memoryText");
const memoryNext = document.getElementById("memoryNext");
const letterScreen = document.querySelector(".letter-screen");
const letterText = document.getElementById("letterText");
const letterContinue = document.getElementById("letterContinue");
const proposalScreen = document.querySelector(".proposal-screen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalText = document.getElementById("proposalText");
const memories = [
    {
        image: "assets/image/photo1.jpg",
        text: "The first time I saw you... I had no idea one moment could mean so much."
    },
    {
        image: "assets/image/photo2.jpg",
        text: "Your smile has a way of making everything feel better."
    },
    {
        image: "assets/image/photo3.jpg",
        text: "Every picture reminds me how lucky I am to know you."
    },
    {
        image: "assets/image/photo4.jpg",
        text: "You are more beautiful than words can ever describe."
    },
    {
        image: "assets/image/photo5.jpg",
        text: "Every memory with you is one I'll always treasure."
    },
    {
        image: "assets/image/photo6.jpg",
        text: "There's one last thing I want to tell you... 🤎"
    }
];

let currentMemory = 0;
// ---------- TYPEWRITER ----------

function typeWriter(text, element, speed = 50){

    element.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

// ---------- LOADING ----------

const progress = document.querySelector(".progress");
const loadingText = document.getElementById("loadingText");

const messages = [

"Preparing something special...",

"Collecting beautiful memories...",

"Adding butterflies...",

"Almost ready...",

"Welcome Timileyin 🤎"

];

let percent = 0;

const loading = setInterval(()=>{

    percent++;

    progress.style.width = percent + "%";

    if(percent==20)
        loadingText.innerHTML = messages[1];

    if(percent==50)
        loadingText.innerHTML = messages[2];

    if(percent==75)
        loadingText.innerHTML = messages[3];

    if(percent>=100){

        loadingText.innerHTML = messages[4];

        clearInterval(loading);

        setTimeout(()=>{

            loadingScreen.style.display="none";

            welcomeScreen.classList.remove("hidden");

            typeWriter(
                "Hi, Timileyin 🤎",
                document.getElementById("typingText"),
                90
            );

        },1200);

    }

},45);

// ---------- GO TO MISSION ----------

const bgMusic = document.getElementById("bgMusic");

beginJourney.addEventListener("click",()=>{

    bgMusic.play();

    welcomeScreen.style.display="none";

    missionScreen.classList.remove("hidden");

});

// ---------- ACCEPT MISSION ----------

acceptMission.addEventListener("click",()=>{

    missionScreen.style.display="none";

    chapterScreen.classList.remove("hidden");

    typeWriter(

`Every great story begins with a single moment.

Mine began the day I noticed you.

I never imagined someone could quietly become the reason I smiled more.

Little by little...

You became someone truly special to me.

And this is only the beginning... 🤎`

    ,chapterText,45);

});
// ---------- GO TO MEMORY GALLERY ----------

chapterContinue.addEventListener("click", () => {

    chapterScreen.style.display = "none";

    galleryScreen.classList.remove("hidden");

});
// Show the first memory
memoryText.innerHTML = memories[0].text;
memoryImage.src = memories[0].image;

// Next button
memoryNext.addEventListener("click", () => {

    currentMemory++;

    if (currentMemory < memories.length) {

        memoryImage.src = memories[currentMemory].image;
        memoryText.innerHTML = memories[currentMemory].text;

        if (currentMemory === memories.length - 1) {
            memoryNext.innerHTML = "Open My Heart 🤎";
        }

    }else{

    galleryScreen.classList.add("hidden");

    letterScreen.classList.remove("hidden");

    typeWriter(

`Dear Timileyin,

If you've made it this far...

Thank you for taking this little journey with me.

Every page...
Every animation...
Every picture...

was created with one person in mind.

You.

Getting to know you has been one of the best parts of my life.

Your smile, your kindness, and the little things about you make you truly special.

And before this journey ends...

There is one final question I want to ask you... 🤎`

    ,letterText,40);

}

});
// ================================
// OPEN PROPOSAL
// ================================

letterContinue.addEventListener("click", () => {

    letterScreen.classList.add("hidden");

    proposalScreen.classList.remove("hidden");

});


// ================================
// NO BUTTON RUNS AWAY
// ================================

const noMessages = [

    "🥺 Are you sure?",

    "🤎 Please think again...",

    "😭 My heart can't take this.",

    "😂 You're making this difficult.",

    "❤️ Just press YES already!"

];

let noCount = 0;

noBtn.addEventListener("mouseover", () => {

    if(noCount < noMessages.length){

        proposalText.innerHTML = noMessages[noCount];

    }

    noBtn.style.position = "absolute";

    noBtn.style.left = Math.random() * 70 + "%";

    noBtn.style.top = Math.random() * 70 + "%";

    yesBtn.style.transform = `scale(${1 + noCount * 0.15})`;

    noCount++;

    if(noCount >= 5){

        noBtn.style.display = "none";

    }

});


// ================================
// YES BUTTON
// ================================

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `

    <div style="height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    color:white;
    background:#050505;
    font-family:Poppins,sans-serif;">

        <h1 style="font-size:70px;">🎉 Mission Complete 🎉</h1>

        <h2 style="margin-top:20px;color:#c89b6b;">
            She Said YES! 🤎
        </h2>

        <p style="margin-top:30px;font-size:24px;line-height:2;">
            Welcome to our story ❤️
            <br><br>
            Thank you for making me
            <br>
            the happiest person alive.
        </p>

    </div>

    `;

});