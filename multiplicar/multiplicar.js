const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limit) => {
    return new Promise(( resolve, reject ) => {

        if( isNaN(base) ) {
            return reject(`El valor introducido ${ base } no es número`)
        }
        let data = '';

        for( let i = 1; i <= limit; i++ ){
            console.log( `${i} * ${base} = ${ i * base }` );
            data += `${i} * ${base} = ${ i * base }\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`./tablas/tabla_del_${ base }.txt`, data, (err) => {
            if (err) reject(err);
            resolve( `tabla_del_${ base }.txt` )
        });

    })
}

const listarTabla = (base, limite) => {

    console.log( '==============='.green );
    console.log( '=====TABLA======='.green );
    console.log( '==============='.rainbow );

    for( let i = 1; i <= limite; i++ ){
        console.log( `${i} * ${base} = ${ i * base }` );
        // data += `${i} * ${base} = ${ i * base }\n`;
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}