import Pokecard from "./​Pokecard";

function  ​Pokedex() {
    return(
        <div>
           <Pokecard name="Charmander"  type={"fire"} exe={62}  />
           <Pokecard name="Squirtle"  type={"water"} exe={63} />
           <Pokecard name="Metapod"  type={"bug"} exe={72} />
           <Pokecard name="Butterfree"  type={"flying"} exe={178} />
           <Pokecard name="Pikachu" type={"electric"} exe={112} />
           <Pokecard name="Jigglypuff"  type={"normal"} exe={95} />
           <Pokecard name="Gengar"  type={"poison"} exe={225} />
           <Pokecard name="Eevee"  type={normal} exe={65} />
        </div>
    )    
}

export default Pokedex;



