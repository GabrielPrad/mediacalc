function calcular() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    // verifica se as notas estão dentro do intervalo válido
    if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
        alert("As notas informadas devem estar entre 0 e 100.");
        return;
    }

    var media = (n1 + n2 + n3) / 3;

    alert(`A média dos valores é: ${media.toFixed(2)}`);
}

function verificarMedia(media) {
    if (media => 70) {
      createMessage('Aprovado!', 'sucess');
    } else {
        createMessage('Reprovado!', 'warning')
    }
}

function createMessage(msg, type) {
    document
      .querySelector('body')
      .insertAdjacentHTML(
        'beforebegin',
        `<div class='message ${type}'>${msg}</div>`
      );
  
    setTimeout(function () {
      deleteMessage();
    }, 3000);
  }
  
  function deleteMessage() {
    const list = document.querySelectorAll('.message');
    for (const item of list) {
      item.remove();
    }
  }
    
    
