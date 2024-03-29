import '../App.css'

export function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <picture>
              <img src={movie.imgUrl} alt={`Poster de la película '${movie.title}'`} title={`Poster de la película '${movie.title}'`} />
            </picture>
          </li>
        ))
      }
    </ul>
  )
}

export function NoListOfMovies () {
  return (
    <p style={{ color: 'red' }}>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? ListOfMovies({ movies })
      : NoListOfMovies()
  )
}
