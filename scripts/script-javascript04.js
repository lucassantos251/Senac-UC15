function submitHora()
{
  let hora = document.getElementById("hora").value
  if (hora > 23){
    alert("Valor inválido")
  } else if (hora >= 18){
    alert("Boa noite!")
  } else if (hora >= 12){
    alert("Boa tarde! 😊")
  } else if (hora >= 0){
    alert("Bom dia!")
  } else {
    alert("Valor inválido")
  }
}

function validacao() {
  let hora = document.getElementById("hora").value
  if (isNaN(hora)) {
    document.getElementById("invalido").style.display = "inline"
    document.getElementById("btnEnviar").disabled = true;
  } else {
    document.getElementById("invalido").style.display = "none";
    document.getElementById("btnEnviar").disabled = false;
  }
}

function horas() {
  let data = new Date()
  let hora = data.getHours()
  let minuto = data.getMinutes()
  let segundo = data.getSeconds()

  if (hora >= 18){
    alert("Boa noite! " + hora + ":" + minuto + ":" + segundo)
  } else if (hora >= 12){
    alert("Boa tarde! 😊 " + hora + ":" + minuto + ":" + segundo)
  } else {
    alert("Bom dia! " + hora + ":" + minuto + ":" + segundo)
  }
}