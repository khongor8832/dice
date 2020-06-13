// тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [20, 80];

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//  Шооны аль тлаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
//<div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice
// document.querySelector("#score-1").innerHTML = "<em> YES? <em>"
// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";


var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";


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

        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгон. 
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

});

// Hold товчны эвэнт листенер

document.querySelector(".btn-hold").addEventListener("click", function () {
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө. 
    roundScore;
    // Ээлжийн оноог нь 0 болгоно.

    // Тоглогчийн ээлжийг солино. 
})