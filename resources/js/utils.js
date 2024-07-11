export const sanatiseSearch = (input) => {
    if(Number(input)){
        return pokemonToSearchFor = input;
    }
    const removeCapitalse = input.toLowerCase()
    const removeSpecialCharacters = removeCapitalse.replace(/[^a-zA-Z ]/g, "").trim()
    const replaceSpace = removeSpecialCharacters.replace(/[^a-zA-Z]/g, "-")
    let pokemonToSearchFor = replaceSpace;
    if(removeCapitalse.includes('♀')){
        return pokemonToSearchFor + '-f'
    }
    if(removeCapitalse.includes('♂')){
        return pokemonToSearchFor + '-m'
    }
    return pokemonToSearchFor;
};