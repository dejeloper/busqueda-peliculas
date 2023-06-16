import responseMovies from './mockups/result-by-title.json'

export const useMovies = () => {
  const movies = responseMovies.Search
  const mappingMovies = movies?.map((m) => {
    return {
      id: m.imdbID,
      title: m.Title,
      year: m.Year,
      imgUrl: m.Poster
    }
  })

  return { movies: mappingMovies }
}
