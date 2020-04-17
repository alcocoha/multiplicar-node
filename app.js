const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./yargs');
const colors = require('colors');

const comando = argv._[ 0 ];

console.log('comando', comando)

console.log('argv', argv)
// console.log('comando', comando)
const base = argv.base || argv.b;
const limit = argv.limit || argv.l;

switch( comando ){
    case 'listar':
        console.log("Listar");
        listarTabla( base, limit);
        break;
    case 'crear':
        crearArchivo( base, limit )
            .then( result => console.log(`archivo ${result.green} creado.`) )
            .catch( error => console.log('error-->:', error))
        break;
    default:
        console.log("Comando no encontrado");
}


// const argv = process.argv;
// const parameter = argv[ 2 ];

// let base = parameter.split('=')[1];

// console.log('base', argv.base)
// console.log('limit', argv.limit);




// console.log(parameter)

