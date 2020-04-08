const addDebetInput = document.getElementById("add-debet-input");
addDebetInput.addEventListener("click", addDebetLine);
const addCreditInput = document.getElementById("add-credit-input");
addCreditInput.addEventListener("click", addCreditLine);

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
  let arrDebet = [];
  let addInArrDebet;
  const inpDebet = document.getElementsByClassName("info-debet");
  for (let i = 0; i < inpDebet.length; i++) {
    addInArrDebet = Number(inpDebet[i].value);
    arrDebet.push(addInArrDebet);
  }
  //THIS CODE SUMS UP CREDIT-MASIV
  let arrCredit = [];
  let addInArrCredit;
  const inpCredit = document.getElementsByClassName("info-credit");
  for (let i = 0; i < inpCredit.length; i++) {
    addInArrCredit = Number(inpCredit[i].value);
    arrCredit.push(addInArrCredit);
  }
  return {
    arrDebet: arrDebet,
    arrCredit: arrCredit,
  };
}

function dispalyBalance() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const resultDebet = calcuteBalance().arrDebet.reduce(reducer);
  const resultCredit = calcuteBalance().arrCredit.reduce(reducer);
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
