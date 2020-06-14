// тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;


// Шооны зургийг үзүүлэх элемэнтийг домоос хайж олоод энд хадгалья 
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ. 
initGame();


// Тоглоомыг шинээр эхлэхэд бэлтгэе
function initGame() {
    // тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
    activePlayer = 0;

    // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    // Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    // Програм эхлэхэд бэлтгэе
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // Тоглогчдын нэрийг буцааж гаргах 
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";


    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");


    diceDom.style.display = "none";
}


// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    // 1-6 доторх санамсаргүй нэг тоо гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;


    // Шооны зургийг вэб дээр гаргаж ирнэ. 
    diceDom.style.display = "block";

    // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ. 
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ. 
    if (diceNumber !== 1) {
        // 1 -ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө. 
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

        switchToNextPlayer();

    }

});

// Hold товчны эвэнт листенер

document.querySelector(".btn-hold").addEventListener("click", function () {
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө. 
    // if (activePlayer === 0) {
    //     scores[0] = scores[0] + roundScore;
    // } else {
    //     scores[1] = scores[1] + roundScore;
    // }

    scores[activePlayer] = scores[activePlayer] + roundScore;


    // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах 
    if (scores[activePlayer] >= 20) {
        // Ялагч гэсэн техстийн нэрийх нь оронд гаргана. 
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        // Ээлжийн оноог нь 0 болгоно.
        switchToNextPlayer();
    }

    // Дэлгэц дээр оноог өөрчилнө

    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];


});


// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг 
function switchToNextPlayer() {
    // Энэ цункц нь тоглох ээлжиндээ цуглуулсан оноог 0 болгоно. 
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго. 
    // үгүй бол идэвхтэй тоглогч нь 0 болго

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх 

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгоно.
    diceDom.style.display = "none";
}

// Newgame буюу шинэ тоглоом эхлүүлэх товчний эвэнт листенер 
document.querySelector(".btn-new").addEventListener("click", initGame);