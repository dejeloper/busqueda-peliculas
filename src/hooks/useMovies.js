import { useEffect, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search }) => {
  const [ movies, setMovies ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ errorSearch, setErrorSearch ] = useState(null)
  const previousSearch = useRef(search)

  useEffect(() => {
    getMovies()
  }, [ search ])

  const getMovies = async () => {
    if (search === previousSearch.current) {
      return
    }

    try {
      setLoading(true)
      setErrorSearch(null)
      previousSearch.current = search

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
