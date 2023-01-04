import React from "react";
import { useState } from "react";


const PersonCard = props => {
    {/*data are we going to prop in components*/}
    const { firstName, age, hairColor } = props;
    {/*data that will change in state*/}
    const [myAge, setMyAge] = useState(age);
    {/*how the data will change*/}
    const updateAge = () => setMyAge(myAge + 1);
    

    return(
        <div>
            <h1>Name: {firstName}</h1>
            <h3>Hair Color: {hairColor}</h3>
            {/*pass myAge when useState to change age*/}
            <h2>Age: {myAge}</h2>
            {/*calling updateAge*/}
            <button onClick={updateAge}>Birthday</button>
            
            
        </div>
    );
}

export default PersonCard;