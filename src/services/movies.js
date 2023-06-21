const API_KEY = '8402e0b2'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search
    const mappingMovies = movies?.map((m) => {
      return {
        id: m.imdbID,
        title: m.Title,
        year: m.Year,
        imgUrl: m.Poster
      }
    })

    return mappingMovies
  } catch (e) {
    throw new Error('No se puede consultar origen de datos de las películas.')
  }
}
