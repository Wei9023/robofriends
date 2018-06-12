import React, { Coponent } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import {robots} from './robots';

const states = {
	robots: robots,
	searchfield:''
}

class App extends Component {}
const App = () => {
	return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots = {robots}/>
		</div>
		)
}

export default App;