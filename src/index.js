function myFunction() {
  let itm = document.querySelector("#myList1 > div");
  let cln = itm.cloneNode(true);
  document.getElementById("myList1").appendChild(cln);
}
let button = document.getElementById("button");
button.addEventListener("click", myFunction);

let button2 = document.getElementById("button2");
button2.addEventListener("click", myFunctionTwo);

function myFunctionTwo() {
  let itm = document.querySelector("#myList2 > div");
  let cln = itm.cloneNode(true);
  document.getElementById("myList2").appendChild(cln);
}

// THE CODE ABOVE, CLONES THE INPUTS^
let addResult = document.getElementById("add-result");
addResult.addEventListener("click", startBalanse);

function startBalanse() {
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
  // THIS CODE GIVES RESULT
  console.log(masiDebet);
  function corectBalanse() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let resultDebet = masiDebet.reduce(reducer);
    let resultCredit = masiCredit.reduce(reducer);
    document.getElementById("debet-result").innerHTML = resultDebet;
    document.getElementById("debet-result").style.color = "green";
    document.getElementById("credet-result").innerHTML = resultCredit;
    document.getElementById("credet-result").style.color = "red";

    let balance = resultDebet - resultCredit;
    document.getElementById("balance").innerHTML = balance;
    if (balance > 0) {
      document.getElementById("balance").style.color = "green";
    } else document.getElementById("balance").style.color = "red";
    let resultContent = document.getElementById("result-content");
    return (resultContent.style.display = "flex");
  }
  return corectBalanse();
}
