import { useEffect, useState } from 'react'
import axios from '../../../api/index'
const usePokieList = () => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(null)

  const getPokemonList = async () => {
    setLoading(true)
    try {
      const response = await axios("pokemon?offset=0&limit=20")
      console.log(response)
      setPokemons(response?.data?.results)
    } catch (error) {
      setError(error.message)
      setPokemons([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getPokemonList()
  }, [])


  return (
    {
      loading,
      pokemons,
      error
    }
  )
}

export default usePokieList