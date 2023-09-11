export const getIdFromUrl = (pokemonDetailsUrl: string) => {
    const tags: string[] = pokemonDetailsUrl.split('/')

    // return Number(tags.slice(-1)) !== NaN ? Number(tags.slice(-1)) : 0
    return Number(tags[tags.length - 2])
}