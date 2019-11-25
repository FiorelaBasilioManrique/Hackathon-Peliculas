// // DATA BUSCAR
// const busco = (data, buscado) => {
//   return data.filter(obj => obj.Title.toLowerCase().startsWith(buscado)); 
//   // Filter va a crear un array donde va rellenar todos los elementos que pasa un prueba
// };

const yearsPelicula = (data, ciclo) => {
  return data.filter((elemet) => {
    return elemet.Year.indexOf(ciclo) > -1; // INDICE DE MI DATA QUE SE ESTA RECORRIENDO
  });
};