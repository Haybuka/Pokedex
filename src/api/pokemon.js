import {

  useQuery,
} from '@tanstack/react-query';
import axios from './'

const getPokemons = async (page = 'pokemon?offset=0&limit=20') => await axios.get(`${page}`)


const getPokemon = async (name) => await axios.get(`pokemon/${name}`)

const getPokemonSpecies = async (id) => await axios.get(`pokemon-species/${id}`)



export const useGetPokemons = (page) => {
  return useQuery({
    queryKey: ['pokemons', page],
    queryFn: async () => getPokemons(page),
    select: data => data?.data
  })
}

export const useGetPokemon = (name) => {
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => getPokemon(name),
    select: data => data?.data
  })
}

export const useGetPokemonSpecies = (id) => {
  return useQuery({
    queryKey: ['Species', id],
    queryFn: async () => getPokemonSpecies(id),
    select: data => data?.data
  })
}