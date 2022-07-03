function combustivel() {
    // declaração de variáveis
    var gasolina = document.getElementById('gasolina').value;
    var etanol = document.getElementById('etanol').value;
    var result = document.getElementById('result');
    
    // troca vírgula por ponto
    gasolina = gasolina.replace(',','.');
    etanol = etanol.replace(',','.');

    // para não rodar o programa sem digitação de valor
    if (gasolina != '' && etanol != '') { 
      // calcula o melhor combustivel
    var maisBarato =  etanol/gasolina;

    // algoritmo
    if (maisBarato >= 0.7) {
        result.innerHTML = 'Melhor abastecer com Gasolina!';}
    else {
        result.innerHTML = 'Melhor abastecer com Etanol!';}
    }
    else {
      alert('Preencha todos os campos!');
    } 
                   }
    
      // excluir qq caracteres diferentes dos números, vírgula, ponto, espaço e delete
      function verificarInput(event){
      var letra = event.key;
      if (letra != 0 && letra !=1 && letra !=2 &&  letra !=3 && letra !=4 && letra !=5 && letra !=6 && letra !=7 && letra !=8 && letra !=9 && letra !=',' && letra !='.' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
        alert('Caractere inválido');
        document.getElementById('gasolina').value = '';
        document.getElementById('etanol').value = '';
      }
      }