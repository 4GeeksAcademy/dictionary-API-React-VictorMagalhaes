import React from "react";
import { useState } from "react";


const Dictionary = () => {

	const [word, setWord] = useState("")
	const [meaning, setMeaning] = useState("Get fast the meaning of thousends of words")
	
	
	  const getMeaning = async ()=>{
	
	  let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,)
	
		let response = await res.json()
		console.log(response)
		let meaningText = response[0]["meanings"][0].definitions[0].definition
		setMeaning(meaningText)
	
	  }
	 
	  const handleChange = (e) =>{
		if(e.target.name === "word") {
		  setWord(e.target.value)
		}
	  }
	
	  return (
		<div class="card text-center">
			
		  <div class="card-body">
			<h5 class="body">{word}</h5>
			
			<p className="meaning">{meaning}</p>
			  <input 
			  type="text"
			  onChange={handleChange}
			  placeholder="Put your word here"
			  name="word"
			  />			
		  </div>
		  <button class="btn btn-primary m-5" id="button" type="button" onClick={getMeaning} >Get the Meaning</button>
		
		</div>
	  )
	}

    export default Dictionary;