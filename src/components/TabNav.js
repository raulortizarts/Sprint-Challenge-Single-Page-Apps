import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList"
import EpisodeList from "./EpisodeList"

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

    const panes = [
        { menuItem:
            {key: 'home', icon: 'home', content: 'home' },
            render: () => <Tab.Pane><Route path = '/' exact component = {WelcomePage} /> </Tab.Pane>},
        { menuItem:
            {key: 'character', icon: 'users', content: 'character' },
            render: () => <Route path = '/character' component = {CharacterList} />},
        { menuItem:
            {key: 'location', icon: 'map outline', content: 'location' },
            render: () => <Route path = '/location' component = {LocationList} />},
         { menuItem:
             {key: 'episode', icon: 'map outline', content: 'episode' },
             render: () => <Route path = '/episode' component = {EpisodeList} />}
        
        ]
    return (
        <Tab panes = {panes}/>
    )
};
