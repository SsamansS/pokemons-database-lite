import axios from 'axios'

export default class PokeAPI {
    baseUrl: string = 'https://pokeapi.co/api/v2/'

    GetPokemons = async () => {
        let res: any = []
        await axios.get(this.baseUrl + 'pokemon?limit=1000')
            .then(function (response) {
                res = response.data
            })
            .catch(function (error) {
                console.error('Ошибка запроса:', error)
            });
        return res
    }

    GetPokemonDetails = async (id: number) => {
        let res: any = []
        await axios.get(this.baseUrl + `pokemon/${id}/`)
            .then(function (response) {
                res = response.data
            })
            .catch(function (error) {
                console.error('Ошибка запроса:', error)
            });
        return res
    }
}