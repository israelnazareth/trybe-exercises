const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, baseOne: string, baseTwo: string) {
  if (!unitsMass.includes(baseOne) || !unitsMass.includes(baseTwo)) {
    throw new Error('Parâmetro(s) inválido(s)');
  }

  const baseOneIndex = unitsMass.indexOf(baseOne);
  const baseTwoIndex = unitsMass.indexOf(baseTwo);
  const exponent = (baseTwoIndex - baseOneIndex);
  const result = value * Math.pow(10, exponent);

  // Resultado em linha:
  console.log(`${value + baseOne} em ${baseTwo} são: ${result + baseTwo}`);

  // Resultado em tabela:
  const data = [
    { Base: `${value + baseOne}`, Conversão: `${result + baseTwo}` }
  ]
  console.table(data);

  return result;
}

convertMass(10, "kg", "g");