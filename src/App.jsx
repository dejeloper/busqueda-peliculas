import { Movies } from './components/Movies'
import { useMovies, useSearch } from './hooks'
import './App.css'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies: mappingMovies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Búsqueda de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} value={search} name='search' placeholder='Avengers, Matrix...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {
          error && (<p style={{ color: 'red' }}>{error}</p>)
        }
      </header>
      <main>
        <Movies movies={mappingMovies} />
      </main>
    </div>
  )
}

export default App
