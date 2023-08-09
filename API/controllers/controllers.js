export function saludar () {
    console.log ("hola soy Gabriela");
}

export async function buscarpokemon () {
    let data = await fetch ("https://pokeapi.co/api/v2/pokemon/");
let dataparseada = await data.json ();


console.log (dataparseada);
return dataparseada.results;

}