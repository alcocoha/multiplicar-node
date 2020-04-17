const params = ( { base_alias, base_description, limit_alias, limit_description } ) => ({
    base: {
        demand: true,
        alias: base_alias,
        description: base_description
    },
    limit: {
        alias: limit_alias,
        default: 10,
        description: limit_description
    }
});

const argv = require('yargs')
        .command('listar', 'Imprime la tabla de multiplicar', params({
            base_alias : 'b',
            base_description: 'Es la base para la tabla de multiplicar',
            limit_alias: 'l',
            limit_description: 'Es el limite hasta donde van a llegar las multiplicaciones'
        }))
        .command('crear', 'Crea la tabla de multiplicar', params({
            base_alias : 'b',
            base_description: 'Es la base para la tabla de multiplicar',
            limit_alias: 'l',
            limit_description: 'Es el limite hasta donde van a llegar las multiplicaciones'
        }))
        .help()
        .argv;

module.exports = {
    argv
}