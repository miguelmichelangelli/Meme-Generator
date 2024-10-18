import React, { useState } from 'react'
import memesData from '../../memesData'

function Form() {

    const [memeText, setMemeText] = useState(
        {
            topText: '',
            bottomText: '',
        }
    )

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function handleTextChange({ target }) {
        const { name, value } = target

        setMemeText(prevText => ({
            ...prevText,
            [name]: value,
        }))
    }

    function changeImage(event) {

        event.preventDefault()

        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url

        console.log(url)

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    console.log(memeText)

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
                        placeholder='Top-text' 
                        value={memeText.topText}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input 
                        name='bottomText' 
                        id='bottom-text' 
                        className='form--input' 
                        type="text" 
                        placeholder='Bottom-text' 
                        value={memeText.bottomText}
                        onChange={handleTextChange}
                    />
                </div>
                <button 
                    className='form--button'
                    onClick={changeImage}>
                        Get a new meme image 🖼
                </button>
            </form>
            <div className="meme--container">
                <span className="meme--top-text">{memeText.topText}</span>
                <img src={meme.randomImage} className='meme--img' alt='Meme image' />
                <span className="meme--bottom-text">{memeText.bottomText}</span>
            </div>
        </main>
    )

}

export default Form