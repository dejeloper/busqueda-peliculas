import { useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search }) => {
  const [ movies, setMovies ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ errorSearch, setErrorSearch ] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setErrorSearch(null)

      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setErrorSearch(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, errorSearch, loading }
}
