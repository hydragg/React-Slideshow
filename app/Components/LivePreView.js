import React from 'react';

export class LivePreview extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return (
			<div>{this.props.text}</div>
		);
	}
}
