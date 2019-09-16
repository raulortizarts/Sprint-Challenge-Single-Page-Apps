import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import {Route, NavLink} from 'react-router-dom'
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList'
import Episodelist from './components/EpisodeList'

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <nav>
        <NavLink to='/'>Characters</NavLink>
        <NavLink to='/location'>Location</NavLink>
        <NavLink to='/episodes'>Episodes</NavLink>
      </nav>
      <Route exact path='/' component={CharacterList}/>
      <Route path='/location' component={LocationList}/>
      <Route path='/episodes' component={Episodelist}/> */}
      {/* <Tab.Pane><CharacterList /></Tab.Pane>
      <Tab.Pane><LocationList /></Tab.Pane>
      <Tab.Pane><Episodelist /></Tab.Pane> */}
    </main>
  );
}
