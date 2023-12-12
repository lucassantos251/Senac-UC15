function validacao() {
  let nota = document.getElementById("nota").value
  let frequencia = document.getElementById("frequencia").value

  if (isNaN(nota) || isNaN(frequencia)) {
    document.getElementById("btnEnviar").disabled = true
    document.getElementById("invalido").style.display = "inline"
  } else {
    if (nota >= 0 && nota <= 10 && frequencia >= 0 && frequencia <= 100) {
      document.getElementById("btnEnviar").disabled = false
      document.getElementById("invalido").style.display = "none"
    } else {
      document.getElementById("btnEnviar").disabled = true
      document.getElementById("invalido").style.display = "inline"
    }
  }
}

function avaliacao() {
  let nota = document.getElementById("nota").value
  let frequencia = document.getElementById("frequencia").value
     
  if (nota >= 7 && frequencia>=75) {
    //alert("Aprovado!! Nota: " + nota + ", Frequência: " + frequencia + "%")
    document.getElementById("resultado").innerHTML = "Aprovado!! Nota: " + nota + ", Frequência: " + frequencia + "%"
  } else {
    //alert("Reprovado! Nota: " + nota + ", Frequência: " + frequencia + "%")
    document.getElementById("resultado").innerHTML = "Reprovado! Nota: " + nota + ", Frequência: " + frequencia + "%"
  }  
}

function repeticao() {
  
}
