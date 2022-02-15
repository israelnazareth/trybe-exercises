"use strict";
const unitsCapacity = ["kl", "hl", "dal", "l", "dl", "dl", "ml"];
function convertCapacity(value, baseOne, baseTwo) {
    if (!unitsCapacity.includes(baseOne) || !unitsCapacity.includes(baseTwo)) {
        throw new Error('Parâmetro(s) inválido(s)');
    }
    const baseOneIndex = unitsCapacity.indexOf(baseOne);
    const baseTwoIndex = unitsCapacity.indexOf(baseTwo);
    const exponent = (baseTwoIndex - baseOneIndex);
    const result = value * Math.pow(10, exponent);
    // Resultado em linha:
    console.log(`${value + baseOne} em ${baseTwo} são: ${result + baseTwo}`);
    // Resultado em tabela:
    const data = [
        { Base: `${value + baseOne}`, Conversão: `${result + baseTwo}` }
    ];
    console.table(data);
    return result;
}
convertCapacity(2, "l", "ml");
