// load vendors on page load
window.addEventListener("load", loadVendors);
function loadVendors(e) {
  let vendorList = "<option selected>Choose a Vendor</option>";

  for (let i = 0; i < taxRates.length; i++) {
    vendorList += `
    <option value='${taxRates[i].vendor}'>${taxRates[i].vendor}</option>
    `;
    vendor.innerHTML = vendorList;
  }
}

document.getElementById("calc").addEventListener("click", calculate);

// var inits
const vendor = document.getElementById("vendor");
const subtot = document.getElementById("subtotal");
const stTax = 4.45;
const output = document.getElementById("output");

function calculate(e) {
  e.preventDefault();
  for (let i = 0; i < taxRates.length; i++) {
    if (vendor.value == taxRates[i].vendor) {
      let parTaxCalc = (subtot.value * (taxRates[i].parTax / 100)).toFixed(2);
      let stTaxCalc = (subtot.value * (stTax / 100)).toFixed(2);
      let total = (
        parseFloat(stTaxCalc) +
        parseFloat(parTaxCalc) +
        parseFloat(subtot.value)
      ).toFixed(2);
      output.innerHTML = `
      <divclass="pt-4 col-lg-10 mx-auto">
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-text bg-white">${taxRates[i].parish} PARISH SALES TAX ${taxRates[i].parTax}%</span>
          <input
            type="text"
            id="par-tax"
            class="form-control text-right"
            value="${parTaxCalc}"
            disabled
          />
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-text bg-white"
            >LA SALES TAX ${stTax}%</span
          >
          <input
            type="text"
            id="st-tax"
            class="form-control text-right"
            value="${stTaxCalc}"
            disabled
          />
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-text bg-white">TOTAL</span>
          <input
            type="text"
            id="total"
            class="form-control text-right"
            value="${total}"
            disabled
          />
        </div>
      </div>
    </div>
      `;
    }
  }
}
