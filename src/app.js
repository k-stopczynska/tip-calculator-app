const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const tipButtons = document.querySelectorAll(".tip-input-button");
const outputs = document.querySelectorAll(".output");
const resetButton = document.querySelector(".reset-button");
const tipCustomInput = document.querySelector("#tip-input");

const getBillInput = () => parseFloat(billInput.value);

const getPeopleInput = () => parseInt(peopleInput.value);

const getCustomInput = () => parseFloat(tipCustomInput.value) / 100;

const tipCustomInputHandler = (e) => {
    resetButton.classList.remove('active');
  e.preventDefault();
  if (e.key) {
    const tipValue = getCustomInput();
    const billValue = getBillInput();
    const peopleValue = getPeopleInput();
    getTipAmount(billValue, tipValue, peopleValue);
    getTotalAmount(billValue, tipValue, peopleValue);
  }
};

const tipButtonHandler = (e) => {
    resetButton.classList.remove('active');
  const tipValue = parseFloat(e.target.dataset.tip);
  const billValue = getBillInput();
  const peopleValue = getPeopleInput();
  getTipAmount(billValue, tipValue, peopleValue);
  getTotalAmount(billValue, tipValue, peopleValue);
};

const getTipAmount = (billAmountValue, tipAmountValue, peopleAmountValue) => {
  const tipAmount = (billAmountValue * tipAmountValue) / peopleAmountValue;
  outputs[0].innerHTML = `$${tipAmount}`;
};

const getTotalAmount = (billAmountValue, tipAmountValue, peopleAmountValue) => {
  const totalAmount =
    billAmountValue + (billAmountValue * tipAmountValue) / peopleAmountValue;
  outputs[1].innerHTML = `$${totalAmount}`;
};

const resetButtonHandler = () => {
    resetButton.classList.add('active');
  billInput.value = '';
  peopleInput.value = '';
  outputs[0].innerHTML = "$" + "0.00";
  outputs[1].innerHTML = "$" + "0.00";
};

tipButtons.forEach((button) =>
  button.addEventListener("click", tipButtonHandler)
);
resetButton.addEventListener("click", resetButtonHandler);
tipCustomInput.addEventListener("keyup", tipCustomInputHandler);
