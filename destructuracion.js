const deadpool ={
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

/*const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;*/
// const {nombre, apellido, poder} = deadpool;

function imprimeHeroe({nombre, apellido, poder}){
    console.log(nombre,apellido,poder)
}

// imprimeHeroe(deadpool);

const heroes =['Deadpool', 'Superman', 'Batman'];

const [h1,h2,h3] =heroes;

console.log(h1,h2,h3);



