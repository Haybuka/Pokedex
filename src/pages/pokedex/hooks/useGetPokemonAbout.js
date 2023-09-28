import { useEffect, useState } from 'react'
import axios from '../../../api/index'


const useGetPokemonAbout = (id) => {
  const [loading, setLoading] = useState(false)
  const [pokemonData, setPokemonData] = useState({})
  const [error, setError] = useState(null)

  const getPokemon = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`pokemon-species/${id}/`);
      setPokemonData(response.data)
      setError(null)
      setLoading(false)

    } catch (error) {
      setError(error.message)
      setLoading(false)
    }

  }
  useEffect(() => {
    getPokemon()
  }, [])

  return {
    loading,
    about: pokemonData,
    error
  }
}

export default useGetPokemonAbout