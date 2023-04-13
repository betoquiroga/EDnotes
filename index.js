const readline = require('readline');

// Creamos un arreglo vacío para almacenar nuestras notas
const notas = [];

// Creamos una instancia de readline para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para agregar una nota
function agregarNota() {
  rl.question('Escribe tu nota: ', (nota) => {
    // Agregamos la nota al arreglo
    notas.push(nota);
    console.log('Nota agregada correctamente');
    menu();
  });
}

// Función para ver todas las notas
function verNotas() {
  console.log('Tus notas:');
  notas.forEach((nota, index) => {
    console.log(`${index + 1}. ${nota}`);
  });
  menu();
}

// Función para editar una nota
function editarNota() {
  rl.question('Ingresa el número de la nota que quieres editar: ', (index) => {
    if (index < 1 || index > notas.length) {
      console.log('Número de nota inválido');
      editarNota();
      return;
    }
    rl.question('Escribe la nueva versión de la nota: ', (nota) => {
      // Actualizamos la nota en el arreglo
      notas[index - 1] = nota;
      console.log('Nota actualizada correctamente');
      menu();
    });
  });
}

// Función para eliminar una nota
function eliminarNota() {
  rl.question('Ingresa el número de la nota que quieres eliminar: ', (index) => {
    if (index < 1 || index > notas.length) {
      console.log('Número de nota inválido');
      eliminarNota();
      return;
    }
    // Eliminamos la nota del arreglo
    notas.splice(index - 1, 1);
    console.log('Nota eliminada correctamente');
    menu();
  });
}

// Función para mostrar el menú y leer la opción del usuario
function menu() {
  console.log('\nMenú:');
  console.log('1. Agregar nota');
  console.log('2. Ver notas');
  console.log('3. Editar nota');
  console.log('4. Eliminar nota');
  console.log('5. Salir');

  rl.question('Elige una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        agregarNota();
        break;
      case '2':
        verNotas();
        break;
      case '3':
        editarNota();
        break;
      case '4':
        eliminarNota();
        break;
      case '5':
        console.log('Adiós!');
        rl.close();
        break;
      default:
        console.log('Opción inválida');
        menu();
        break;
    }
  });
}

// Iniciamos la aplicación mostrando el menú
menu();