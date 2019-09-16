import React, { useEffect, useState } from "react";
import {Card} from "semantic-ui-react";
import axios from "axios";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisode] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  axios.get('https://rickandmortyapi.com/api/episode/')
  .then(resolve => {
    setEpisode(resolve.data.results)
  })
  .catch(console.log)
}, []);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    {episodes.map(episode => {
      //console.log(character)
      return (
        <card key = {episode.name}>
          
          <Card.Content>
            <Card.Header>
              {episode.name}
            </Card.Header>
            <Card.Description>
              {episode.episode}
              {episode.air_date}
            </Card.Description>
          </Card.Content>

        </card>
      )
    })}
    </section>
  );
}
