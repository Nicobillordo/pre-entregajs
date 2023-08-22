

let idproducto=parseInt (prompt("INDUMENTARIA CONECT\n1-Remera Basica negra .. $1500\n2- Remera basica Blanca ... $1500\n3- Remera con estampa ... $2000\n4-fFinalizar compra"))

while(idproducto != 0){
    switch(idproducto){
        case 1: 
        alert("felicitaciones, agregaste Remera Basica negra ... $1500 al carro")
        break
        case 2: 
        alert("felicitaciones, agregaste Remera basica Blanca ... $1500 al carro")
        break
        case 3:
            alert("felicitaciones, agregaste Remera con estampa ... $2000 al carro")
        break
        default:
            alert("El producto no existe")
    }
    let idproducto=parseInt (prompt("INDUMENTARIA CONECT\n1-Remera Basica negra .. $1500\n2- Remera basica Blanca ... $1500\n3- Remera con estampa ... $2000\n4-fFinalizar compra"))

}

function SumaGastoTotal(precioremera){
    gastoTotal = gastoTotal + precioremera
    console.log("total hasta el momento$" + gastoTotal)
}
