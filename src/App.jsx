import './App.css'

const App = () => {
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
        <p>Resultados</p>
      </main>
    </div>
  )
}

export default App
