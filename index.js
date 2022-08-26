const { faker } = require('@faker-js/faker');
const fs = require('fs')

function generadorNombres() {

    let personas = []

    for (let i = 1; i <= 1000; i++) {
        let fullName = faker.name.fullName();
        personas.push(
            fullName,
        );
    }
    return personas

}
const nombres = generadorNombres()
    //console.log(nombres)

const contenido = nombres.join('\n')
    //console.log(contenido)
fs.writeFile('names.txt', `${contenido}`, "utf-8", (err) => {
    if (err) throw err;
    console.log("el archivo se guardo satisfactoriamente")
})