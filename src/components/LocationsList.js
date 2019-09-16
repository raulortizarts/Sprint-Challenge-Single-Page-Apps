import React, { useEffect, useState } from "react";
import {Card} from "semantic-ui-react";
import axios from "axios";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocation] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  axios.get('https://rickandmortyapi.com/api/location/')
  .then(resolve => {
    setLocation(resolve.data.results)
  })
  .catch(console.log)
}, []);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    {locations.map(location => {
      //console.log(character)
      return (
        <card key = {location.name}>
          
          <Card.Content>
            <Card.Header>
              {location.name}
            </Card.Header>
            <Card.Description>
              {location.type}
              {location.dimension}
            </Card.Description>
          </Card.Content>

        </card>
      )
    })}
    </section>
  );
}
