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