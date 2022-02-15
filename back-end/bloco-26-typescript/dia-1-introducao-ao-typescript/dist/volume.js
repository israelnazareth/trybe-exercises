"use strict";
const unitsVolume = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convertVolume(value, baseOne, baseTwo) {
    if (!unitsVolume.includes(baseOne) || !unitsVolume.includes(baseTwo)) {
        throw new Error('Parâmetro(s) inválido(s)');
    }
    const baseOneIndex = unitsVolume.indexOf(baseOne);
    const baseTwoIndex = unitsVolume.indexOf(baseTwo);
    const exponent = (baseTwoIndex - baseOneIndex);
    const result = value * Math.pow(1000, exponent);
    // Resultado em linha:
    console.log(`${value + baseOne} em ${baseTwo} são: ${result + baseTwo}`);
    // Resultado em tabela:
    const data = [
        { Base: `${value + baseOne}`, Conversão: `${result + baseTwo}` }
    ];
    console.table(data);
    return result;
}
convertVolume(5, "m³", "cm³");
