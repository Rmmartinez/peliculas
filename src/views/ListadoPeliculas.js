import '../App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
//import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas() {

  const [paginaActual,setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 4;
  //let peliculas = peliculasJson; 
  const [peliculas,setPeliculas] = useState([]);

  useEffect(() => {
    buscarPeliculas();
  },[]);

  const buscarPeliculas = async () =>{
    let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json'; // Usa la URL del proxy

    let respuesta = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    let json = await respuesta.json();
    setPeliculas(json);
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }
  
  let peliculasPorPag = peliculas.slice((paginaActual -1)* TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);
  
  return (
    <PageWrapper>

      {peliculasPorPag.map(pelicula => 
          <Pelicula titulo={pelicula.titulo} 
                    calificacion={pelicula.calificacion}
                    director={pelicula.director}
                    actores={pelicula.actores}
                    fecha={pelicula.fecha}
                    duracion={pelicula.duracion}
                    descripcion={pelicula.descripcion}
                    img={pelicula.img}
                    />
      )}
      
    <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
      setPaginaActual(pagina); 
    }}>
    </Paginacion>

    </PageWrapper>
    
  );
}

export default ListadoPeliculas;
