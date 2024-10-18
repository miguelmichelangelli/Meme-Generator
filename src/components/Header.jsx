import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <img className='header--logo' src="../../public/images/troll-face.png" alt="Meme generator logo" />
            <h2 className='header--title'>MemeGenerator</h2>
            <h4 className='header--project-info'>React Project</h4>
        </header>
    )
}