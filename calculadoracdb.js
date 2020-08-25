function recursive(valor, maxYear, percentYear, year, name){
    valorReal = 0
    if(year <= maxYear){
      let newPercent = parseFloat(percentYear/12).toFixed(2)
      for(let i = 0; i<12; i++){
          valor += (parseInt(valor)*(newPercent/100))
      }
      year++
      valorReal += recursive(valor, maxYear, percentYear, year, name)
    }else{
      valorReal = valor - parseInt(valor*(15/100))
      console.log("valor Final "+name+": ", parseInt(valorReal))
    }
    return parseInt(valorReal)
}
function recursiveApp(vApplications){
  var vTotal = 0
  vApplications.map((app)=>{
    vTotal += recursive(app.valor, app.anos, app.porcentagem, 1, app.nome)
  })
  console.log('total', vTotal)
}





recursiveApp([
  { 
    nome: 'cdb',
    valor: 300000,
    anos: 8,
    porcentagem: 12
  },
])