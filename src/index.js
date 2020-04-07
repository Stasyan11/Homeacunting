function addDebetLine() {
  let itm = document.querySelector("#myList1 > div");
  let cln = itm.cloneNode(true);
  document.getElementById("myList1").appendChild(cln);
}
let button = document.getElementById("button");
button.addEventListener("click", addDebetLine);

let button2 = document.getElementById("button2");
button2.addEventListener("click", addCreditLine);

function addCreditLine() {
  let itm = document.querySelector("#myList2 > div");
  let cln = itm.cloneNode(true);
  document.getElementById("myList2").appendChild(cln);
}
const reactionONBatton = document.getElementById("add-result");
reactionONBatton.addEventListener("click", calculateBalance);
reactionONBatton.addEventListener("click", dispalyBalance);

function calculateBalance() {
  // THIS CODE SUMS UP DEBET-MASIV
  let arrDebet = [];
  let addInArrDebet;
  let inpDebet = document.getElementsByClassName("info-debet");
  for (let i = 0; i < inpDebet.length; i++) {
    addInArrDebet = Number(inpDebet[i].value);
    arrDebet.push(addInArrDebet);
  }
  //THIS CODE SUMS UP CREDIT-MASIV
  const arrCredit = [];
  let addInArrCredit;
  let inpCredit = document.getElementsByClassName("info-credit");
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
  const resultDebet = calculateBalance().arrDebet.reduce(reducer);
  const resultCredit = calculateBalance().arrCredit.reduce(reducer);

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
