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
	onChange(e){   //內容發生改變時觸發
		this.setState({text:e.target.value});
	}
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return (
			<div className="row">
				<div className="col-md-6">
					<from>
						<SlideShowButton className="btn btn-primary" />
						<textarea rows="30" onChange={this.onChange} className="form-control"/>
					</from>
				</div>
				<div className="col-md-6">
					<LivePreview text={this.state.text}/>
				</div>
			</div>
		);
	}
}

