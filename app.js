const {argv} = require('process');
const tareas = require('./tareas')


const comando = argv[2];

switch (comando) {
    case list:
        console.log(tareas.listar);
        break;
    default:
        break;
}
