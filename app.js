function changeDownPayment() {
  let cost = document.getElementById("cost").value;
  let dpr = document.getElementById("dpr").value;

  let downPayment = (cost * dpr) / 100;
  document.getElementById("downPayment").value = downPayment;
}

function changeDownPaymentRate() {
  let cost = document.getElementById("cost").value;
  let downPayment = document.getElementById("downPayment").value;

  let dpr = (downPayment * 100) / cost;
  document.getElementById("dpr").value = dpr;
}

function calcEmi() {
  let cost = document.getElementById("cost").value;
  let intRate = document.getElementById("intRate").value;
  let tiy = document.getElementById("tiy").value;
  let downPayment = document.getElementById("downPayment").value;
  document.getElementById("loanAmount").value = cost - downPayment;
  let loanAmount = document.getElementById("loanAmount").value;

  let n = tiy * 12;

  let emi =
    (((loanAmount * intRate) / 12 / 100) *
      [Math.pow(1 + intRate / 12 / 100, n)]) /
    [Math.pow(1 + intRate / 12 / 100, n) - 1];

  console.log(cost);
  console.log(intRate);
  console.log(tiy);
  console.log(downPayment);
  console.log(loanAmount);

  document.getElementById("emi").value = Math.round(emi);
}
