let numerodequestoes: number = +prompt('Número de Questões: ');
let respostascorretas: string = prompt('Respostas Corretas ou Gabarito:');
let respostasdoaluno: string = prompt('Respostas do Aluno:')

let Quantidadedeacertos: number = 0;


for (let a = 0; a < numerodequestoes; a++) {

      if (respostascorretas[a]        =     respostasdoaluno[a])     Quantidadedeacertos = Quantidadedeacertos++;

   }



document.write('Respostas corretas = ${respostas_corretas}');