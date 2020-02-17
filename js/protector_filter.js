window.addEventListener('load', loadProtectors);
document.getElementById('filter').addEventListener('click', filter);

// var inits
const connName = document.getElementById('connectionName');
const connSize = document.getElementById('connectionSize');
let protector = document.getElementById('output').children;
const invalid = document.getElementById('invalid');
const clear = document.getElementById('clear');
let sizeSelectors;
const sizeOptionSelect = document.getElementById('sizeOptionSelect');
let displayProtectorList;

// load protectors on page load
function loadProtectors(e) {
  let output = '';

  // OLD FUNCTION (works but would like to refactor using .filter)
  protectors.forEach(function(protector) {
    if (protector.display == true) {
      output += `
        <div id="${protector.id}" class="row pt-3 protector ${protector.id}" style="border-top: 1px dashed silver;">
          <p class="col">${protector.name}${protector.size}</p>
          <p class="col box text-right">${protector.box}</p>
          <p class="col pin text-right">${protector.pin}</p>
          <p class="col set text-right">${protector.set}</p>
        </div>
         `;
    }
  });

  // NEW FUNCTION (doesn't work yet)
  // if (displayProtectorList == null) {
  //   output = protectors.map(displayProtectorList => `${protector.id}`);
  // }
  // console.log(displayProtectorList);

  document.getElementById('output').innerHTML = output;
}

// display size options
connName.addEventListener('change', sizeOptions);
function sizeOptions() {
  sizeSelectors = "<option value='' selected>Choose a Size</option>";
  for (let i = 0; i < protectors.length; i++) {
    if (connName.value == protectors[i].name) {
      sizeSelectors += `
        <option value="${protectors[i].size}">${protectors[i].size}</option>
        `;
    }
    connSize.innerHTML = sizeSelectors;
  }
}

// filter function
function filter(e) {
  const connFullName = connName.value + connSize.value;

  for (let i = 0; i < protectors.length; i++) {
    protectors[i].display = false;
    if (connFullName == 'none') {
      protectors[i].display = true;
    } else if (connFullName == protectors[i].id) {
      protectors[i].display = true;
    }
    loadProtectors();
    e.preventDefault();

    // make clear filter button visible
    clear.classList.remove('d-none');
    clear.classList.add('d-block');
  }

  // clear listener
  clear.addEventListener('click', clearFilter);

  function clearFilter() {
    for (let i = 0; i < protectors.length; i++) {
      protectors[i].display = true;
      loadProtectors();
    }

    // make clear filter button invisible
    clear.classList.remove('d-block');
    clear.classList.add('d-none');
  }
}
