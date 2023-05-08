function calcular() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = parseFloat(document.getElementById("n3").value);

  if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
    alert("As notas informadas devem estar entre 0 e 100.");
    return;
  }

  var media = (n1 + n2 + n3) / 3;

  var inputMedia = document.getElementById("media");
  inputMedia.value = media.toFixed(2);

  if (media >= 70) {
    inputMedia.classList.add("verde");
    inputMedia.classList.remove("amarelo");
    inputMedia.classList.remove("vermelho");
  } else if (media >= 40) {
    inputMedia.classList.add("amarelo");
    inputMedia.classList.remove("verde");
    inputMedia.classList.remove("vermelho");
  } else {
    inputMedia.classList.add("vermelho");
    inputMedia.classList.remove("verde");
    inputMedia.classList.remove("amarelo");
  }

  if (media >= 70) {
    alert("Você foi aprovado!");
  } else if (media >= 40) {
    alert("Exame final");
  } else {
    alert("Reprovado!");
  } 
  return;
}

  if (media >= 70) {
    alert("Você foi aprovado!")
  } else if (media >= 40) {
    alert("Você ficou de recuperação")
  } else {
    inputMedia.classList.add("vermelho");
    inputMedia.classList.remove("verde");
    inputMedia.classList.remove("amarelo");
  } 


