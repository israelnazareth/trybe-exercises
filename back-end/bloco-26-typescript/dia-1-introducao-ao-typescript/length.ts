const unitsLength = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertLength(value: number, baseOne: string, baseTwo: string): number {
  if (!unitsLength.includes(baseOne) || !unitsLength.includes(baseTwo)) {
    throw new Error(`Parâmetro(s) inválido(s)`);
  }

  const baseOneIndex = unitsLength.indexOf(baseOne);
  const baseTwoIndex = unitsLength.indexOf(baseTwo);
  const exponent = (baseTwoIndex - baseOneIndex);
  const result = value * Math.pow(10, exponent);

  // Resultado em linha:
  console.log(`${value}${baseOne} em ${baseTwo} são: ${result}${baseTwo}`);

  // Resultado em tabela:
  const data = [
    { Base: `${value + baseOne}`, Conversão: `${result + baseTwo}` }
  ]
  console.table(data);

  return result;
}

convertLength(50, "m", "cm");

// Tabela em metros
function tableInMeter(value: number) {
  const data = [
    {Unidade: "Quilômetro", Símbolo: "km", Valor: value * 0.001},
    {Unidade: "Hectômetro", Símbolo: "hm", Valor: value * 0.01},
    {Unidade: "Decâmetro", Símbolo: "dam", Valor: value * 0.1},
    {Unidade: "Metro", Símbolo: "m", Valor: value * 1},
    {Unidade: "Decímetro", Símbolo: "dm", Valor: value * 10},
    {Unidade: "Centímetro", Símbolo: "cm", Valor: value * 100},
    {Unidade: "Milímetro", Símbolo: "mm", Valor: value * 1000},
  ]

  return console.table(data);
}

tableInMeter(5);
