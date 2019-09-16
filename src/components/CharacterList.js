import React, { useEffect, useState } from "react";
import {Card, Image} from "semantic-ui-react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(resolve => {
    setCharacter(resolve.data.results)
  })
  .catch(console.log)
}, []);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    {characters.map(character => {
      console.log(character)
      return (
        <card key = {character.name}>
          <Image src = {`${character.image}`}/>
          <Card.Content>
            <Card.Header>
              {character.name}
            </Card.Header>
            <Card.Description>
              {character.location.name}
            </Card.Description>
          </Card.Content>

        </card>
      )
    })}
    </section>
  );
}
