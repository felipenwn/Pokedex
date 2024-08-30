
var quantidade = document.getElementById('quantidade')
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value)
})

pegaPokemons(3);

function pegaPokemons(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10'+quantidade)
        .then((response) => {
            return response.json();
        })
        .then((allpokemon) => {
            var pokemons = [];
            allpokemon.results.map((val) => {

                

                fetch(val.url)

                    .then((response) => {
                        return response.json();
                    })

                    .then((pokemonSingle) => {

                        pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default, tipoa:  pokemonSingle.types[0].type.name,tipob: pokemonSingle.types[1].type.name });
                        
                    
                        if (pokemons.length == quantidade) {

                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";

                            pokemons.map((val) => {
                                
                                pokemonBoxes.innerHTML +=
                                    `<div class="pokemon-box">
                <div class= "bdimg"><img src="` + val.imagem + `" alt="pokemon picture"></div>
                <p>` + val.nome + `</p>
                <div class="tipos">
                <p class="poder">` + val.tipoa + `</p>
                <p class="poder">` + val.tipob + `</p>
                </div>
            </div>`;


                            }); 
                        }
                    });
                    //
 
                    //          
            });

        });
        
}

