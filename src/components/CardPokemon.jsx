import { useEffect, useState } from 'react';
import styles from './CardPokemon.module.css'

function CardPokemon({name, url}){
    const [pokemon, setPokemon] = useState([])
    const [imageFront, setImageFront] = useState()
    const [imageBack, setImageBack] = useState()
    let isFront = true;
    const [image, setImage] = useState()
    useEffect(() => {
        fetch(url).then(response => {
            if(!response.ok){
                throw new Error('Error')
            }
            return response.json()
        })
        .then(data => {
            // console.log(data)
            setImage(data.sprites.front_default)
            setImageBack(data.sprites.back_default)
            setImageFront(data.sprites.front_default)
            setPokemon(data)
        })
    }, [])
    
    function transformation(name) {
        return name[0].toUpperCase() + name.substring(1)
    }

    function mudarFoto() {
        
        if (isFront == true) {
            setImage(imageBack)
            isFront = false
            console.log(image)
        }else {
            setImage(imageFront)
            isFront = true
            console.log(image)
        }
    }

    return (
        <div className={styles.cardPokemon}>
            <img src={image} alt="" />
            
            <h2>{transformation(name)}</h2>
            <button onClick={mudarFoto}>Mudar foto</button>
        </div>
    )
}

export default CardPokemon;