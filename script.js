let table = function(x,y){
    let result = []
    for(let i = 0; i <= x; i++){
        result.push([])
        for (let j = 0; j <= y; j++){
            result[i].push(i*j)
        }
    }return console.table(result) 
}

table(10,10)

console.log('digite table(valorX da table,valorY da table) no console para ver a tabela com o tamanho desejado aparecer ;)')
console.log('ex: table(12,12)')