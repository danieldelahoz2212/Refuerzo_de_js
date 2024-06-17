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

const getEmpeado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    if (empleado) {
        callback(null, empleado)
    } else {
        callback(`Empleado Con id ${id} no Existe`);
    }
}

const getSalario =(id, callback)=> {
    const salario = salarios.find(e => e.id === id)?.salario;

    if (salario) {
         callback(null, salario);
    } else {
         callback(`El salario del empleado ${id} no Existe`);
    }
}

const id = 3

getEmpeado(id, (err, empleado) => {
    if (err) {
       console.log('ERROR!');
       return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if (err) {
            console.log('ERROR!');
            return console.log(err);
        }
        console.log('El Empleado => ',empleado,'tiene un salario de:',salario);
    });

})