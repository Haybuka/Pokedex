import { useEffect, useState } from 'react'
import axios from '../../../api/index'
const usePokieList = ({ pageNumber = 0 }) => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(null)

  const getPokemonList = async () => {
    setLoading(true)
    try {
      const response = await axios(`pokemon?offset=${pageNumber}&limit=20`)
      setPokemons(response?.data?.results)
    } catch (error) {
      setError(error.message)
      setPokemons([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getPokemonList()
  }, [pageNumber])


  return (
    {
      loading,
      pokemons,
      error
    }
  )
}

export default usePokieList