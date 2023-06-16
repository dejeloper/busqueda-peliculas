import { Movies } from './components/movies'
import responseMovies from './mockups/result-by-title.json'

import './App.css'

const App = () => {
  const movies = responseMovies.Search

  return (
    <div className='page'>
      <header>
        <h1>Búsqueda de Películas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
