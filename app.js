// global variables
var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");

//capitalize input values
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Love Score Counter
function love(score) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i <= score) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}

// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let your = yourName.value.trim().toLowerCase();
  let their = theirName.value.trim().toLowerCase();

  if (your === "" && their === "") {
    alert("You can't leave fields empty");
    return;
  }
  if (your === "") {
    alert("Please Enter Your Name");
    return;
  }
  if (their === "") {
    alert("Please Enter His/Her Name");
    return;
  }

  let loveScore = 0;

  // ✅ condition for Jaideep & Ridhima
  if (
    (your === "jaideep" && their === "ridhima") ||
    (your === "ridhima" && their === "jaideep")
  ) {
    loveScore = 100;
  }

  yourlovescoreis.innerHTML = "Your Love Score is";
  love(loveScore);
  reloadBtn.style.display = "block";

  if (loveScore === 100) {
    loveInfo.innerHTML =
      "<b>You</b> and <b>" +
      capitalize_Words(theirName.value) +
      "</b> are made for each other! 💑💍 Best of Luck!";
  } else {
    loveInfo.innerHTML =
      "<b>You</b> and <b>" +
      capitalize_Words(theirName.value) +
      "</b> are not a match 💔";
  }
});
