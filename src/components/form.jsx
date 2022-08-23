import React from 'react'
import memeData from './../memeData'
import Meme from './meme'

function Form() {

    const [meme, setMeme] = React.useState({
        topLine : '',
        bottomLine : '', 
        imgUrl : 'https://i.imgflip.com/30b1gx.jpg'
    })



    function updateTextOnChange(e) {

        const {name, value} = e.target 

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })

    }

    function generateMeme(e) {


        setMeme(prevMeme => {
            return {
                ...prevMeme,
                imgUrl : getRandomImgUrl()
            }
        })

    }


    function getRandomImgUrl() {

        const memeDataArray = memeData.data.memes
        const randomIndex = Math.floor(Math.random() * memeDataArray.length)
        return memeDataArray[randomIndex].url

    }



    return(
        <div>
        <form action="submit" id="generator-form">

            <div className="form-line">
                
                <label htmlFor="">Second Line
                    <input type="text" name="topLine" id="top-line-input" onChange={updateTextOnChange}/>
                </label>
                    
                    <label htmlFor="">First Line
                        <input type="text" name="bottomLine" id="bottom-line-input" onChange={updateTextOnChange}/>
                    </label>
            </div>
            <button type="button" onClick={generateMeme}>Generate</button>
        </form>
        
        <Meme 
        imgUrl={meme.imgUrl}
        topLine = {meme.topLine}
        bottomLine = {meme.bottomLine} />
        </div>
    )

}

export default Form