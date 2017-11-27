import React from "react";
import "./Person.css"

const Person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click} >Soy {props.name} y tengo {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default Person;