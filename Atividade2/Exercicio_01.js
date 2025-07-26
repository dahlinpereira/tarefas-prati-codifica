/*
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.
 */

function ehDataValida(dia, mes, ano) {
  if (
    typeof dia !== 'number' ||
    typeof mes !== 'number' ||
    typeof ano !== 'number'
  ) {
    return false;
  }
  if (dia < 1 || mes < 1 || mes > 12 || ano < 0) {
    return false;
  }

  const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    diasNoMes[1] = 29;
  }

  if (dia > diasNoMes[mes - 1]) {
    return false;
  }

  return true;
}

console.log('15/08/2023:', ehDataValida(15, 8, 2023));
console.log('31/02/2023:', ehDataValida(31, 2, 2023));
console.log('29/02/2023:', ehDataValida(29, 2, 2023));
console.log('29/02/2024:', ehDataValida(29, 2, 2024));
console.log('32/12/2025:', ehDataValida(32, 12, 2025));
console.log('10/13/2025:', ehDataValida(10, 13, 2025));