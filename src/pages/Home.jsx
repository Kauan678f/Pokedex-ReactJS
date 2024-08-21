import React, { useEffect } from "react"
import styles from './Home.module.css'
import { useState } from "react"
import { FaChevronCircleLeft,FaChevronCircleRight  } from "react-icons/fa";

import NavBar from '../components/NavBar'
import CardPokemon from "../components/CardPokemon"

function Home() {
    const [pokemons, setPokemons] = useState([])
    const [pokemonNews, setPokemonNews] = useState([])
    const [search, setSearch] = useState('')
    const [cont, setCont] = useState(1)

    const [erro, setErro] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(response => {
            if (!response.ok){
                throw new Error('Erro na requisição')
            }
            return response.json()
        })
        .then(data => {
            // console.log(data.results)
            setTimeout(() => {
                // console.log(data.results[0])
                setPokemons(data.results)
                setLoading(false)
            }, 1000)
        })
        .catch(error => {
            setTimeout(() => {
                setErro(error.message)
                setLoading(false)
            }, 1000)
        })
    }, [])

    function searchPokemon(e){
        setCont(1)
        setPokemonNews([])
        // console.log(e.target.value)
        setSearch(e.target.value.toLowerCase())
        // console.log(search)
        // setPokemonNews(pokemons.filter((pokemon) => pokemon.name.includes(search)))
        // console.log(pokemonNews)
    }

    function back() {
        if(cont == 1) {
            setCont(1)
        }else {
            // window.scrollTo(0, 0);
            setCont(cont-1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    function next() {
        setCont(cont+1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    // console.log(pokemons)


    if(loading) {
        return <div className={styles.loading}>Loading...</div>
    }

    if(erro) {
        return <div className={styles.erro}>Erro: {erro}</div>
    }

    return (
        <>
            <NavBar />
            <div className={styles.home}>
                <h1>Pokemons</h1>
                <div className={styles.containerInput}>
                    <input type="serach" placeholder="Search" onChange={searchPokemon} />
                    <hr />
                </div>
                
                <div className={styles.container}>
                    {search == "" || search == " " || search == undefined ? (
                        pokemons.map((pokemon, key) => (
                            // <div>
                            //     {key}
                            // </div>
                            cont == 1 ? (
                                key + 1  <= cont * 9  && key + 1  >= (cont * 9) - 9 && (
                                    // <div>olá</div>
                                    <div className={styles.content}>
                                    <CardPokemon key={pokemon.url} name={pokemon.name} url={pokemon.url}/>
                                    </div>
                                )
                            ) : (
                                key + 1  <= cont * 9  && key + 1  >= (cont * 9) - 9 + 1 && (
                                    // <div>olá</div>
                                    <div className={styles.content}>
                                    <CardPokemon key={pokemon.url} name={pokemon.name} url={pokemon.url}/>
                                    </div>
                                )
                            )
                            
                        ))
                    ) : (
                        // <div>Olá</div>'
                        pokemons
                        .filter((pokemon) => pokemon.name.includes(search))
                        .map((pokemon, key) => (
                            cont == 1 ? (
                                key+1 <= cont * 10 && key+1 >= (cont * 10) - 10 && (
                                    <div className={styles.content}>
                                        <CardPokemon key={pokemon.url} name={pokemon.name} url={pokemon.url}/>
                                    </div>
                                )
                            ) : (
                                key+1 <= cont * 10 && key+1 >= (cont * 10) - 10 + 1 && (
                                    <div className={styles.content}>
                                        <CardPokemon key={pokemon.url} name={pokemon.name} url={pokemon.url}/>
                                    </div>
                                )
                            ) 
                        ))
                    )
                    }
                    
                </div>
                <footer className={styles.footer}>
                    <FaChevronCircleLeft className={styles.button} onClick={back} />
                    <h2>{cont}</h2>
                    <FaChevronCircleRight className={styles.button} onClick={next} />
                </footer>
            </div>

        </>
    )
}

export default Home;