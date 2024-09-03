function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}/`;

    const pokemonImage = document.getElementById('pokemon-image');
    const pokemonNameElement = document.getElementById('pokemon-name');


    pokemonImage.style.opacity = 0;
    pokemonNameElement.style.opacity = 0;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            const pokemonImageUrl = data.sprites.front_default;

            document.getElementById('pokemon-name').textContent = pokemonName;


            const img = new Image();
            img.src = pokemonImageUrl;
            img.onload = () => {
                pokemonImage.src = pokemonImageUrl;
                pokemonImage.alt = pokemonName;
         
                pokemonImage.style.opacity = 1;
                pokemonNameElement.style.opacity = 1;
            };
        })
        .catch(error => console.error('Error fetching Pokémon:', error));
}


setInterval(getRandomPokemon, 5000);

getRandomPokemon();
