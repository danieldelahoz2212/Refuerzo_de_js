const empleados = [
    {
        id: 1,
        nombre: 'Daniel'
    },
    {
        id: 2,
        nombre: 'Maye'
    },
    {
        id: 3,
        nombre: 'Jhean'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpeado = (id) => {
    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);

    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {

        const salario = salarios.find(e => e.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`El salario del empleado ${id} no Existe`);
    })
}

const id = 1

// getEmpeado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

// getEmpeado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log(`El salario del empleado ${empleado} es de ${salario}`)
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

let nombre

getEmpeado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log('El empleado:', nombre, 'Tiene un salario de:', salario))
    .catch(err => console.log(err))