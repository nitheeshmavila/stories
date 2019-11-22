import React from "react";

import Header from "./components/header/header";
import Post from "./components/post/post";

export default class App extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			name: "Nitheesh"
		};

		this.changeFn = this.changeFn.bind(this);
	}

	changeFn(e) {
		this.setState({
			name: e.target.value
		})
	}

	render(){
		return(
			<div>
				<Header/>
				<Post/>
				<Post/>
				{/* <input type="text" value={this.state.name} onChange={this.changeFn}/> */}
			</div>
		);
	}
}



