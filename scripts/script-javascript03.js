//nome

let day = 3
console.log(day)
console.log(typeof day)

day = "monday"
console.log(day)
console.log(typeof day)

day = false
console.log(day)
console.log(typeof day)

function nameSubmit()
{
  let name = document.getElementById("input-name").value
  document.getElementById("name").innerText = name
  console.log(name);
}

//calculadora

function add()
{
  let add01 = Number(document.getElementById("add01").value)
  let add02 = Number(document.getElementById("add02").value)
  let result = add01 + add02
  document.getElementById("result-add").value = result
}

function subtract()
{
  let sub01 = Number(document.getElementById("sub01").value)
  let sub02 = Number(document.getElementById("sub02").value)
  let result = sub01 - sub02
  document.getElementById("result-sub").value = result
}

function multiply()
{
  let mult01 = Number(document.getElementById("mult01").value)
  let mult02 = Number(document.getElementById("mult02").value)
  let result = mult01 * mult02
  document.getElementById("result-mult").value = result
}

function divide()
{
  let div01 = Number(document.getElementById("div01").value)
  let div02 = Number(document.getElementById("div02").value)
  let result = div01 / div02
  document.getElementById("result-div").value = result
}

//operadores de incremento

let tamanho = 16

function font(param)
{
  if (param == "+") {
    tamanho += 2;
  } else if (param == "-") {
    tamanho -= 2;
  }

  document.getElementById("corpo").style.fontSize = tamanho + "px"
}
