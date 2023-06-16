import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

const App = () => {
  const { movies: mappingMovies } = useMovies()

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
        <Movies movies={mappingMovies} />
      </main>
    </div>
  )
}

export default App
