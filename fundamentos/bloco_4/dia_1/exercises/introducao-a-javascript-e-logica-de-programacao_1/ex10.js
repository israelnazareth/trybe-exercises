let custoDeProducao = 100;
let impostoSobreProduto = 0.2 * custoDeProducao
let custoTotal = custoDeProducao + impostoSobreProduto
let valorDeVenda = 300;
let lucroDeVenda = (valorDeVenda - custoTotal) * 1000

if (lucroDeVenda < 0){
  console.log("Algum valor inserido está incorreto. Por favor, verifique-os.")
} else {
  console.log(lucroDeVenda)
}
