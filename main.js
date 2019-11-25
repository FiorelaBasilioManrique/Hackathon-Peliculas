/* Manejo del DOM */
const carousel = document.getElementById('carousel');
const btnListaPelis = document.getElementById('ver-lista-pelis');
const peliContenedor = document.getElementById('pelicontenedor');

btnListaPelis.addEventListener('click', () => {
  carousel.classList.add('hide');
  peliContenedor.classList.remove('hide');
});

const inicio = document.getElementById('inicio');

inicio.addEventListener('click', () => {
  peliContenedor.classList.add('hide');
  carousel.classList.remove('hide');
});

const elemt = document.getElementById('pelicontenedor');
const urls = [
  'http://www.omdbapi.com/?t=%22My%20Name%20is%20Khan%22&apikey=1a49ec33',
  'http://www.omdbapi.com/?t=%22the%20founder%22&apikey=1a49ec33',
  'http://www.omdbapi.com/?t=%22downfall%22&apikey=1a49ec33',
  'http://www.omdbapi.com/?t=%22Amelia%22&apikey=1a49ec33',
  'http://www.omdbapi.com/?t=%22Courage%22&apikey=1a49ec33',
  'http://www.omdbapi.com/?t=%22iron%20jawed%20angels%22&apikey=1a49ec33',
  'http://www.omdbapi.com/?t=The-Blind-Side&apikey=1e9c7812',
  'http://www.omdbapi.com/?t=Hidden-Figures&apikey=1e9c7812',
  'http://www.omdbapi.com/?t=Braveheart&apikey=1e9c7812',
  'http://www.omdbapi.com/?t=The-Pursuit-Of-Happyness&apikey=1e9c7812',
  'https://www.omdbapi.com/?t=%22Life%20Is%20Beautiful%22&apikey=ef4754ee',
  'https://www.omdbapi.com/?t=%22Holocaust%22&apikey=ef4754ee',
  'https://www.omdbapi.com/?t=%22A%20Beautiful%20Mind%22&apikey=ef4754ee',
  'https://www.omdbapi.com/?t=%22Alive%22&apikey=ef4754ee',
  'https://www.omdbapi.com/?t=%22Schindler%27s%20List%22&apikey=ef4754ee',
  'http://www.omdbapi.com/?t=%22The%20Boy%20in%20the%20Striped%20Pajamas%22&apikey=f4abf8da',
  'http://www.omdbapi.com/?t=%22the%20pianist%22&apikey=f4abf8da',
  'http://www.omdbapi.com/?t=%22the%20imitation%20game%22&apikey=f4abf8da',
  'http://www.omdbapi.com/?t=%22men%20of%20Honor%22&apikey=f4abf8da',
  'http://www.omdbapi.com/?t=12%20Years%20a%20Slave&apikey=1e9c7812',
  'https://www.omdbapi.com/?t=Lincoln&apikey=ef4754ee',
];
const allRequests = urls.map(url => fetch(url).then(response => response.json()));
Promise.all(allRequests).then(results => {
  console.log(results)
  const urlspeli = (data) => {
    let almacenar = '';
    for (let i = 0; i < data.length; i++) {
      let item = `
        
        <div class="card estilos" style="width: 18rem;" id="trailerPelicula" >
        
        <img src="${data[i].Poster}"/>
        <div class="card-body">
          <p class="card-text">${data[i].Plot}</p>
          <p class="card-text">${data[i].Year}</p>
          <a href="${data[i].Website}" class="btn btn-primary">Ver Pelicula</a>
       
          <a href="#" class="btn btn-primary">Descripción</a>
        </div>
      </div>
           `
      almacenar += item;
    }
    return almacenar;
  };
  elemt.innerHTML = urlspeli(results);
});

const generopeliculas = document.getElementById('genero');
generopeliculas.addEventListener('click', (event) => {
  console.log(event.target.textContent)
});

const years = document.getElementById('years');
years.addEventListener('click', (event) => {
  console.log(event.target.textContent)
  const pelis = yearsPelicula(urls, Year.value);
  pelicontenedor.innerHTML = urlspeli(pelis);
});

// BUSCAR
/* Haciendo el event target para buscar */
// const buscar = document.getElementById('buscar');
// buscar.addEventListener('input', event => {
//   const peliculasBuscada =  event.target.value.toLowerCase();
//   const buscador = busco(results,peliculasBuscada);
//   pelicontenedor.innerHTML = urlspeli(buscador);
// });


// const buscar = document.getElementById('buscar');
// buscar.addEventListener('input', event => {
//   const peliculasBuscada = busco (results.event.target.value.toLowerCase());
//   pelicontenedor.innerHTML = urlspeli(peliculasBuscada);
// });
