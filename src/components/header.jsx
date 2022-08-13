import React from 'react'
import Trollface from './../assets/trollface.svg'

function Header() {

    return (
    <div id="header">
            <img src={Trollface} alt="Meme Generator" width="64px" />
            <h1>MemeGenerator</h1>
       
    </div>
    )
}

export default Header
