import {saludar, buscarpokemon} from "./controllers/controllers.js";

let root = document.getElementById ("root");

async function Render ()
{
    let pokemones = await buscarpokemon ();

    let html ="";
    pokemones.forEach((pokemon) => {

        let cardpokemon = `<div>
        <span> ${pokemon.name}</span>
        <span> ${pokemon.url}</span>
        </div>`

        html += cardpokemon;
        
    });

}
Render()