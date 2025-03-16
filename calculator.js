let calculate = localStorage.getItem('calculate') || ' ';

function calculation (value) {
    calculate += value
    document.querySelector('.js-input').innerHTML = calculate;
    save()
    return;
  
}


function evaluateResult () {
  let result = Number(eval(calculate))

  if (result % 1 === 0) {
    document.querySelector('.js-input').innerHTML  = result
  }
  else{
    document.querySelector('.js-input').innerHTML  = result.toFixed(2)
  }
  calculate = " "
  save()

}

function deleteBtn() {
  calculate = calculate.slice(0, -1);
  document.querySelector('.js-input').innerHTML = calculate || "0"
  save()
}

function save() {
  localStorage.setItem('calculate',calculate)
}

document.querySelector('.js-input').innerHTML = calculate || '0'