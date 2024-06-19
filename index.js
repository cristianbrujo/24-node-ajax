const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/front'))

calculadoraBackend.get("/hola", (req, res) =>{
    res.send("Hola Calculadora")
})

const suma = (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var resultado = sumando1 + sumando2
    
    res.send(`SUMA: ${sumando1} + ${sumando2} = ${resultado}`)
}

calculadoraBackend.get("/calculo", suma)

const resta = (req, res) => {
    var restando1 = Number(req.query.parametro1)
    var restando2 = Number(req.query.parametro2)
    var resultado = restando1 - restando2
    
    res.send(`Resta: ${restando1} - ${restando2} = ${resultado}`)
}

calculadoraBackend.get("/resta", resta)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
