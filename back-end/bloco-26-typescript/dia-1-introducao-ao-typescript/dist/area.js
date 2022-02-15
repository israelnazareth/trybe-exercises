"use strict";
const unitsArea = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convertArea(value, baseOne, baseTwo) {
    if (!unitsArea.includes(baseOne) || !unitsArea.includes(baseTwo)) {
        throw new Error('Parâmetro(s) inválido(s)');
    }
    const baseOneIndex = unitsArea.indexOf(baseOne);
    const baseTwoIndex = unitsArea.indexOf(baseTwo);
    const exponent = (baseTwoIndex - baseOneIndex);
    const result = value * Math.pow(100, exponent);
    // Resultado em linha:
    console.log(`${value + baseOne} em ${baseTwo} são: ${result + baseTwo}`);
    // Resultado em tabela:
    const data = [
        { Base: `${value + baseOne}`, Conversão: `${result + baseTwo}` }
    ];
    console.table(data);
    return result;
}
convertArea(1, "km²", "m²");
