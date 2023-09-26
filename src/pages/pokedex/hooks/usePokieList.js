import { useEffect, useState } from 'react'
import axios from '../../../api/index'
const useTypeHook = () => {

  const [loading, setLoading] = useState(false)
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [error, setError] = useState(null)

  const getPokemonTypes = async () => {
    setLoading(true)
    try {
      const response = await axios("type/")
      console.log(response)
      setPokemonTypes(response?.data?.results)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    getPokemonTypes()
  }, [])


  return (
    {
      loading,
      pokemonTypes,
      error
    }
  )
}

export default useTypeHook