import React, { useState, useEffect } from 'react'

function Form() {
    const apiURL = 'https://api.imgflip.com/get_memes'

    const [ meme, setMeme ] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })

    const [ allMemes, setAllMemes ] = useState([])

    useEffect( () => {
        fetch( apiURL )
            .then( res => res.json() )
            .then( ({ data: { memes } }) => setAllMemes( memes ) )
    }, [] )

    function handleTextChange({ target }) {
        const { name, value } = target

        setMeme( prevValues => ({
            ...prevValues,
            [ name ]: value,
        }))
    }

    function changeImage( event ) {
        event.preventDefault()

        const randomNum = Math.floor( Math.random() * allMemes.length )
        const imgURL = allMemes[ randomNum ].url

        setMeme({
            topText:'',
            bottomText: '',
            randomImage: imgURL
        })
    }

    return (
        <main>
            <form className='form'>
                <div className="input">
                    <label htmlFor="top-text">Top text</label>
                    <input 
                        name='topText' 
                        id='top-text' 
                        className='form--input' 
                        type="text" 
                        value={ meme.topText }
                        onChange={ handleTextChange }
                    />
                </div>
                <div className="input">
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input 
                        name='bottomText' 
                        id='bottom-text' 
                        className='form--input' 
                        type="text" 
                        value={ meme.bottomText }
                        onChange={ handleTextChange }
                    />
                </div>
                <button 
                    className='form--button'
                    onClick={ changeImage }>
                        Get a new meme image 🖼
                </button>
            </form>
            <div className="meme--container">
                <span className="meme--top-text">{ meme.topText }</span>
                <img src={ meme.randomImage } className='meme--img' alt='Meme image' />
                <span className="meme--bottom-text">{ meme.bottomText }</span>
            </div>
        </main>
    )

}

export default Form