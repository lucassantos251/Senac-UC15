function clickToShow(param, pId) {
  document.getElementById(pId).innerText = param
}

function clickToAlert(param) {
  window.alert(param);
}

function clickToWrite(param) {
  document.write(param)
}

function clickToLog(param) {
  console.log(param)
}

function clickToPrompt(param, pId) {
  let message = prompt(param)
  document.getElementById(pId).innerText += ' é: ' + message 
}