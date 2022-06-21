import React from "react";
import Images from "./Images";
import Headings from "./Heading"

function Cards(props)
{
    return(
        <>
        <div className="cards">
            <Images imgsrc ={props.imgsrc}/>
            
            <p>Original Netflix Series</p>

            <Headings name={props.name}/>
            <a href={props.link} target="new_blank"><button>Watch now</button></a>
        </div>
        </>
    );
}

export default Cards