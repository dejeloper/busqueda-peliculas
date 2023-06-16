import '../App.css'

export const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <picture>
              <img src={movie.Poster} alt={`Poster de la película ${movie.Title}`} title={`Poster de la película ${movie.Title}`} />
            </picture>
          </li>
        ))
      }
    </ul>
  )
}

export const NoListOfMovies = () => {
  return (
    <p>No se encontraron peliculas para esta búsqueda</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? ListOfMovies({ movies })
      : NoListOfMovies()
  )
}
