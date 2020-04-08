let button = document.getElementById("add-debet-input");
button.addEventListener("click", addDebetLine);

let button2 = document.getElementById("add-credit-input");
button2.addEventListener("click", addCreditLine);

function addDebetLine() {
  const itm = document.querySelector("#Debet-input-area > div");
  const cln = itm.cloneNode(true);
  document.getElementById("Debet-input-area").appendChild(cln);
}

function addCreditLine() {
  const itm = document.querySelector("#Credit-input-area > div");
  const cln = itm.cloneNode(true);
  document.getElementById("Credit-input-area").appendChild(cln);
}
let addResult = document.getElementById("add-result");
addResult.addEventListener("click", calcuteBalance);
addResult.addEventListener("click", dispalyBalance);

function calcuteBalance() {
  // THIS CODE SUMS UP DEBET-MASIV
  let masiDebet = [];
  let addInMasiDebet;
  let inpDebet = document.getElementsByClassName("info-debet");
  for (let i = 0; i < inpDebet.length; i++) {
    addInMasiDebet = Number(inpDebet[i].value);
    masiDebet.push(addInMasiDebet);
  }
  //THIS CODE SUMS UP CREDIT-MASIV
  let masiCredit = [];
  let addInMasiCredit;
  let inpCredit = document.getElementsByClassName("info-credit");
  for (let i = 0; i < inpCredit.length; i++) {
    addInMasiCredit = Number(inpCredit[i].value);
    masiCredit.push(addInMasiCredit);
  }
  return {
    masiDebet: masiDebet,
    masiCredit: masiCredit,
  };
}

function dispalyBalance() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let resultDebet = calcuteBalance().masiDebet.reduce(reducer);
  let resultCredit = calcuteBalance().masiCredit.reduce(reducer);
  document.getElementById("debet-result").innerHTML = resultDebet;
  document.getElementById("debet-result").style.color = "green";
  document.getElementById("credet-result").innerHTML = resultCredit;
  document.getElementById("credet-result").style.color = "red";

  const balance = resultDebet - resultCredit;
  document.getElementById("balance").innerHTML = balance;
  if (balance > 0) {
    document.getElementById("balance").style.color = "green";
  } else document.getElementById("balance").style.color = "red";
  const resultContent = document.getElementById("result-content");
  resultContent.style.display = "flex";
}
