import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'
import debounce from 'just-debounce-it'

export const useMovies = ({ search, sort }) => {
  const [ movies, setMovies ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ errorSearch, setErrorSearch ] = useState(null)
  const previousSearch = useRef(search)

  useEffect(() => {
    debounceGetMovie({ search })
  }, [ search ])

  const debounceGetMovie = useCallback(debounce(({ search }) => {
    getMovies({ search })
  }, 500)
  , [])

  const getMovies = async ({ search }) => {
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

  const getSortMovies = useMemo(() => {
    return (sort && movies !== undefined)
      ? [ ...movies ].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [ sort, movies ])

  return { movies: getSortMovies, getMovies, errorSearch, loading }
}
