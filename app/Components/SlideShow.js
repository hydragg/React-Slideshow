import React from 'react';
import { SlideShowButton } from './SlideShowButton';
import { LivePreview } from './LivePreview';

export class  SlideShow extends React.Component {
	constructor(props){
		super(props);
		this.onChange=this.onChange.bind(this);
		this.state = {
			text:"",
		};
	}
	onChange(e){
		this.setState({text:e.target.value});
	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return (
			<div>
				<from>
					<SlideShowButton />
					<textarea rows="30" onChange={this.onChange} />
				</from>
				<LivePreview text={this.state.text}/>
			</div>
		);
	}
}

