const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/front'))

calculadoraBackend.get("/hola", (req, res) => {
    res.send("Hola Calculadora")
})

// Genera dos números aleatorios
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Ruta para la suma
calculadoraBackend.get('/suma', (req, res) => {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const result = num1 + num2;
    res.send(`La suma de ${num1} + ${num2} es ${result}`);
});
// Ruta para la resta
calculadoraBackend.get('/resta', (req, res) => {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const result = num1 - num2;
    res.send(`La resta de ${num1} - ${num2} es ${result}`);
});
// Ruta para la multiplicacion
calculadoraBackend.get('/multiplicacion', (req, res) => {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const result = num1 * num2;
    res.send(`La multiplicación de ${num1} * ${num2} es ${result}`);
});

// Ruta para la división
calculadoraBackend.get('/division', (req, res) => {
    const num1 = getRandomInt(100) + 1; // Asegura que num1 no sea 0 para evitar la división por cero
    const num2 = getRandomInt(100) + 1; // Asegura que num2 no sea 0 para evitar la división por cero
    const result = (num1 / num2).toFixed(2); // Redondea a 2 decimales
    res.send(`La división de ${num1} / ${num2} es ${result}`);
});

// Ruta para la exponenciación
calculadoraBackend.get('/exponencial', (req, res) => {
    const base = getRandomInt(10) + 1; // Base entre 1 y 10
    const exponent = getRandomInt(5) + 1; // Exponente entre 1 y 5
    const result = Math.pow(base, exponent);
    res.send(`La exponenciación de ${base} ^ ${exponent} es ${result}`);
});

// Ruta para una ecuación aleatoria (ejemplo: ax^2 + bx + c = 0)
calculadoraBackend.get('/ecuacion', (req, res) => {
    const a = getRandomInt(10) + 1; // Asegura que a no sea 0
    const b = getRandomInt(20) - 10; // b entre -10 y 10
    const c = getRandomInt(20) - 10; // c entre -10 y 10
    const discriminant = b * b - 4 * a * c;
    let roots;
    if (discriminant > 0) {
        const root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        const root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        roots = `Las raíces de la ecuación ${a}x^2 + ${b}x + ${c} = 0 son x1 = ${root1} y x2 = ${root2}`;
    } else if (discriminant === 0) {
        const root = (-b / (2 * a)).toFixed(2);
        roots = `La raíz doble de la ecuación ${a}x^2 + ${b}x + ${c} = 0 es x = ${root}`;
    } else {
        roots = `La ecuación ${a}x^2 + ${b}x + ${c} = 0 no tiene raíces reales`;
    }
    res.send(roots);
});

// Ruta para la raíz cuadrada
calculadoraBackend.get('/raiz', (req, res) => {
    const num = getRandomInt(100) + 1; // Asegura que num no sea 0
    const result = Math.sqrt(num).toFixed(2); // Redondea a 2 decimales
    res.send(`La raíz cuadrada de ${num} es ${result}`);
});

// Ruta para el logaritmo natural
calculadoraBackend.get('/logaritmo', (req, res) => {
    const num = getRandomInt(100) + 1; // Asegura que num no sea 0
    const result = Math.log(num).toFixed(2); // Redondea a 2 decimales
    res.send(`El logaritmo natural de ${num} es ${result}`);
});

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
