import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies, useSearch } from './hooks'
import './App.css'

function App () {
  const [ sort, setSort ] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading, errorSearch } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  const handlerSort = (event) => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Búsqueda de Películas</h1>
        <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} value={search} name='search' placeholder='Avengers, Matrix...'
          />
          <input type='checkbox' onChange={handlerSort} checked={sort} style={{ width: '20px', height: '20px' }} />
          <button type='submit'>Buscar</button>
        </form>
        {
          error && (<p style={{ color: 'red' }}>{error}</p>)
        }
        {
          errorSearch && (<p style={{ color: 'red' }}>{errorSearch}</p>)
        }
      </header>
      <main>
        {
          loading
            ? <p>Cargando...</p>
            : search.length > 0 && <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
