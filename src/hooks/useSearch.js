import { useEffect, useState } from 'react'

export function useSearch () {
  const [ search, setSearch ] = useState('')
  const [ error, setError ] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [ search ])

  return { search, setSearch, error }
}
