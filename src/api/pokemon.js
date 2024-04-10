import {

  useQuery,
} from '@tanstack/react-query';
import axios from './'

const getPokemons = async (page = 'pokemon?offset=0&limit=20') => await axios.get(`${page}`)


export const useGetPokemons = (page) => {
  return useQuery({
    queryKey: ['pokemons', page],
    queryFn: async () => getPokemons(page),
    select: data => data?.data
  })
}