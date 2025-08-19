const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const content = document.querySelector('.content')
const loadBackButton = document.getElementById('loadBackButton')

const maxRecords = 151
const limit = 10
let offset = 0
let pokemonItems = []


const convertPokemonToLi = (pokemon) => {
    return `
        <li class="pokemon ${pokemon.type}" data-number="${pokemon.number}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${(pokemon.types || []).map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function showPokemonDetails(pokemon) {

    if (!pokemon) {
        console.warn("O objeto Pokémon está indefinido.");
        return;
    }


    const pokemonDetails = document.createElement('div')
    content.style.display = "none"

    pokemonDetails.innerHTML = `
        <div class="pokemon-card">
            <h2>${pokemon.name} (#${pokemon.number})</h2>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
            <button id="closeButton">Fechar</button>
        </div>
    `
    document.body.appendChild(pokemonDetails)
    document.getElementById('closeButton').addEventListener('click', () => {
        document.body.removeChild(pokemonDetails)
        content.style.display = "grid"
    })
}

async function loadPokemonItens (offset, limit){
        await pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
 
        

        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        
        pokemonItems = document.querySelectorAll('.pokemon')
        for (let i = 0; i < pokemonItems.length; i++) {
            pokemonItems[i].addEventListener('click', () => showPokemonDetails(pokemons[i]))  
        }
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {

    for(let i = 0; i < pokemonItems.length; i++){
    pokemonItems[i].remove()
    }

    offset += limit
    const qtdRecordsWithNextPage = offset + limit


    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        if (loadMoreButton.parentElement) {
            loadMoreButton.parentElement.removeChild(loadMoreButton)
        }
    } else {
        loadPokemonItens(offset, limit)
    }
})

loadBackButton.addEventListener('click', () => {

    for(let i = 0; i < pokemonItems.length; i++){
    pokemonItems[i].remove()
    }

    offset -= limit
    const qtdRecordsWithNextPage = offset - limit


    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords + offset
        loadPokemonItens(offset, newLimit)

        if (loadMoreButton.parentElement) {
            loadMoreButton.parentElement.removeChild(loadMoreButton)
        }
    } else {
        loadPokemonItens(offset, limit)
    }
})
