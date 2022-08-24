import React from 'react'
import Meme from './meme'

function Form() {

    const [meme, setMeme] = React.useState({
        topLine : '',
        bottomLine : '', 
        imgUrl : ''
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then (data => {
            const allMemes = data.data.memes
            setAllMemes(allMemes)
            console.log(allMemes)
        })
    },[])


    function updateTextOnChange(e) {

        const {name, value} = e.target 

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })

    }

    function generateMeme() {


        const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)]
   
        setMeme(prevMeme => {
            return {
            ...prevMeme,
            imgUrl: randomMeme.url}
        })
    }


    return(
        <div>
        <form action="submit" id="generator-form">

            <div className="form-line">
                
                <label htmlFor="">First Line
                    <input type="text" name="topLine" id="top-line-input" onChange={updateTextOnChange} />
                </label>
                    
                    <label htmlFor="">Second Line
                        <input type="text" name="bottomLine" id="bottom-line-input" onChange={updateTextOnChange} />
                    </label>
            </div>
            <button type="button" onClick={generateMeme} >Generate</button>
            
        </form>
        
        <Meme 
        imgUrl={meme.imgUrl}
        topLine = {meme.topLine}
        bottomLine = {meme.bottomLine} />
        </div>
    )

}

export default Form