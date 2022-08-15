import React from 'react'
import memeData from './../memeData'
import Meme from './meme'

function Form() {

    const [memeUrl, setMemeUrl] = React.useState('')

    function generateRandomUrl(e) {

        e.preventDefault()
        const memeDataArray = memeData.data.memes
        const randomIndex = Math.floor(Math.random() * memeDataArray.length)
        const randomMemeUrl = memeDataArray[randomIndex].url
        
        setMemeUrl(randomMemeUrl)

    }

    return(
        <div>
        <form action="submit" id="generator-form">

            <div className="form-line">
                
                <label htmlFor="">Second Line
                    <input type="text" name="first-line-input" id="first-line-input"/>
                </label>
                    
                    <label htmlFor="">First Line
                        <input type="text" name="second-line-input" id="second-line-input"/>
                    </label>
            </div>
            <button type="button" onClick={generateRandomUrl}>Generate</button>
        </form>
        <Meme imgUrl={memeUrl} />
        </div>
    )

}

export default Form