var firstMassive = ["two", "three", "four", "five", "six", "seven"];
var button = document.getElementById("button");
button.addEventListener("click", getInput, startCounter);
function getInput() {
  var qqq = document.getElementById(firstMassive[startCounter()]);
  return (qqq.style.display = "flex");
}
let count = -1;

function startCounter() {
  count += 1;
  return count;
}

var firstMassiveCredit = [
  "two-credit",
  "three-credit",
  "for-credit",
  "four-credit",
  "five-credit",
  "six-credit",
  "seven-credit",
  "eight-credit"
];
var buttonCredit = document.getElementById("button-credit");
buttonCredit.addEventListener("click", getInputCredit, startCounterCredit);
function getInputCredit() {
  var qqqCredit = document.getElementById(
    firstMassiveCredit[startCounterCredit()]
  );
  return (qqqCredit.style.display = "flex");
}
let countCredit = -1;

function startCounterCredit() {
  countCredit += 1;
  return countCredit;
}

/*--------------------------------*/
var addResult = document.getElementById("add-result");
addResult.addEventListener("click", sss); /*nelza obiedenit?*/
function sss() {
  var inp = document.getElementsByClassName("field"),
    mas = [];

  function save() {
    for (var i = 0; i < inp.length; i++) {
      mas[i] = +inp[i].value;
    }
    console.log(mas);

    function arraySum(array) {
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
        sum += array[i];
      }
      console.log(sum);

      document.getElementById("debet-res").innerHTML = sum;
    }
    arraySum(mas);
  }
  save();
}
var adResult = document.getElementById("add-result");
adResult.addEventListener("click", ddd);
function ddd() {
  var inp = document.getElementsByClassName("number"),
    mas = [];

  function save() {
    for (var i = 0; i < inp.length; i++) {
      mas[i] = +inp[i].value;
    }
    console.log(mas);

    function arraySum(array) {
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
        sum += array[i];
      }
      console.log(sum);

      document.getElementById("credit-res").innerHTML = sum;
    }
    arraySum(mas);
  }
  save();
}
var adtResult = document.getElementById("add-result");
adtResult.addEventListener("click", dtd);
function dtd() {
  var res = document.getElementById("result-content");
  return (res.style.display = "flex");
}
addResult.addEventListener("click", createBalanse); /*nelza obiedenit?*/
function createBalanse() {
  let debetTool = parseFloat(document.getElementById("debet-res").innerHTML);
  let credittTool = parseFloat(document.getElementById("credit-res").innerHTML);
  let results = debetTool - credittTool;
  document.getElementById("balance-count-resuly").innerHTML = results;
  if (results > 0) {
    document.getElementById("balance-count-resuly").style.color = "green";
    document.getElementById("recordBalance").style.color = "green";
  } else {
    document.getElementById("balance-count-resuly").style.color = "red";
    document.getElementById("recordBalance").style.color = "red";
  }
}
