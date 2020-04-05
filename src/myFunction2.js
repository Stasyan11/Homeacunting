function myFunction2() {
  let itm = document.querySelector("#myList2 > div");
  let cln = itm.cloneNode(true);
  document.getElementById("myList1").appendChild(cln);
}
