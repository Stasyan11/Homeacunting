//this code delates inputs
function delite(fun) {
  fun.addEventListener("click", (e) => {
    fun.parentElement.remove();
  });
}
//get debet input
let buttonDebet = document.querySelector("#add-debet-input");
buttonDebet.addEventListener("click", addDebetLine);

let div = document.querySelector("#Debet-input-area");

function addDebetLine() {
  const input = document.createElement("input");
  const button = document.createElement("button");
  const content = document.createElement("div");

  button.classList.add("button-content");

  div.appendChild(content);
  button.textContent = "Delate";
  input.classList.add("info-debet");

  content.appendChild(input);
  content.appendChild(button);
  content.insertAdjacentHTML(
    "afterbegin",
    "<select><option>salary</option><option>helps</option><option>other</option></select> "
  );
  delite(button);
}

//get credit input
let buttonCredit = document.querySelector("#add-credit-input");
buttonCredit.addEventListener("click", addCreditLine);

function addCreditLine() {
  let div = document.querySelector("#Credit-input-area");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const content = document.createElement("div");

  button.classList.add("button-content");

  div.appendChild(content);
  button.textContent = "Delate";
  input.classList.add("info-credit");

  content.appendChild(input);
  content.appendChild(button);
  content.insertAdjacentHTML(
    "afterbegin",
    "<select><option>food</option><option>luxary-stuff</option><option>education</option><option>sport</option><option>hous</option><option>animals food</option><option>transpor</option></select> "
  );
  delite(button);
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
