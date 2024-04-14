import React, { useEffect, useState } from 'react'

const Joker = () => {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async () =>{
     const response = await fetch(URL);
     const jsonResponse = await response.json();
     console.log(jsonResponse);
     setjoke({setup : jsonResponse.setup,punchline : jsonResponse.punchline});
    }
 
     useEffect(()=>{
        async function getFirstJoke(){
            const response = await fetch(URL);
         const jsonResponse = await response.json();
         console.log(jsonResponse);
         setjoke({setup : jsonResponse.setup,punchline : jsonResponse.punchline});
        }
        getFirstJoke();
     },[])

    const [joke, setjoke] = useState({})
 

  return (
    <div>
        <h3>Joker!</h3>
        <h2>{joke.setup}</h2>
        <h3>{joke.punchline}</h3>
         <button onClick={getNewJoke}>New Joke</button>
    </div>
  )
}

export default Joker