


// setTimeout(function(){
//         console.log('Hola Mundo');
// }, 1000);

const getUsuarioByID = (id) => {
        const usuario = {
                id,
                nombre: 'Daniel'
        }

        setTimeout(function () {
                console.log(usuario); 
        }, 1500);
}

getUsuarioByID(10, (usuario) => {
        console.log(usuario.id);
        console.log (usuario.nombre.toUpperCase)
});