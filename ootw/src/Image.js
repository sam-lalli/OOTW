import './Image.css'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
const Image = props => {

    const { image } = props
    const [description, setDescription] = useState(false)
    const [title, SetTitle] = useState(false)

    const toggleDescription = () =>{
        setDescription(!description)
        SetTitle(!title)
    }

    let buttonTitle = title ? "Close Description" : "View Description"

    const isImage = image.url.pop() === "jpg"
    //image.url.split().pop() === "jpg"
    

    
    // https://youtu.be/q9ZCBR-onRw
    //conditional logic to decide if img or video
    return (
        <div className="Image">
            <h2 id="typewriter">{image.title}.</h2>
            <div classname="imgContainer">
                {
                    isImage ? <img id="image" src={image.url} alt={image.explaination}/>
                    : <ReactPlayer className="player" url={image.url} playing={true} loop={true}/>
                }                
            </div>
        
            <div>
                {
                    description ?
                    <div>
                        <h2 className="fade">Description:</h2>
                        <p id="explanation">{image.explanation}</p>
                    </div>
                    : null
                }
                <button onClick={() => toggleDescription()}>{buttonTitle}</button>
            </div>
            
        </div>
    )
}

export default Image
