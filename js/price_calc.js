// Pup Jt Branch

// Listen for submit
document.querySelector('.calculateBtn').addEventListener('click', function(e) {
  calculateResults();
  e.preventDefault();
});
document.querySelector('.clearBtn').addEventListener('click', function(e) {
  clearPage();
  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log('Calculating...');
  // UI Vars
  const connectionName = document.getElementById('connectionName').value;
  const connectionPrice = document.getElementById('connectionPrice');
  const discount = document.getElementById('discount');
  const phosAPI = document.getElementById('phosAPI');
  const steadyRest = document.getElementById('steadyRest');
  const pupjt = document.getElementById('pupjt');
  const pupjtLong = document.getElementById('pupjtLong');
  const oRing = document.getElementById('oRing');
  const uConnection = document.getElementById('uConnection');

  const price = parseFloat(connectionPrice.value);
  const uConnectionValue = parseFloat(uConnection.value);
  const oRingValue = parseFloat(oRing.value);
  let discountValue = parseFloat(discount.value);
  let phosAPICost;
  let steadyRestCost;
  // let pupjtPrice;
  const lineConnectionName = document.getElementById('lineConnectionName');
  let lineItem = document.getElementById('lineItem');
  let discountLine = document.getElementById('discountLine');
  // let linePrice;
  // let discountLine;

  // Addon pricing
  if (phosAPI.checked) {
    phosAPICost = 20;
  } else {
    phosAPICost = 0;
  }

  if (steadyRest.checked) {
    steadyRestCost = 60;
  } else {
    steadyRestCost = 0;
  }

  // Calculate cost
  let fullPrice;
  fullPrice =
    price + phosAPICost + steadyRestCost + uConnectionValue + oRingValue + 12;

  // Check if long pup joint box is checked and apply discount
  if (pupjtLong.checked) {
    discountValue = 0;
  }

  // Check if pup joint box is checked and set pricing
  if (pupjt.checked) {
    lineItem.value = (
      (fullPrice * 2 - uConnectionValue) *
      (1 - discountValue)
    ).toFixed(2);
  } else {
    lineItem.value = (fullPrice * (1 - discountValue)).toFixed(2);
  }

  // Calculate discount line
  if (pupjtLong.checked) {
    discountLine.value = 'No Discount';
  } else {
    if (pupjt.checked) {
      discountLine.value = (
        (fullPrice * 2 - uConnectionValue) *
        0.05 *
        -1
      ).toFixed(2);
    } else {
      discountLine.value = (fullPrice * 0.05 * -1).toFixed(2);
    }
  }

  // Display name
  lineConnectionName.value = connectionName;

  console.log(`U Connection Cost is ${uConnectionValue}`);
  console.log(`API Phosphate cost is ${phosAPICost}`);
  console.log(`Steady Rest Cost is ${steadyRestCost}`);
  console.log(`Line Price is ${lineItem.value}`);
  console.log(`Discount Line is ${discountLine.value}`);
  console.log(`Full Price is ${fullPrice}`);
}

function clearPage() {
  location.reload();
}
