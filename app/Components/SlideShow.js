import react from 'react';

export class  SlideShow extends React.Component {
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
			<div>
				<from>
					<SlideShowButton />
					<textarea />
				</from>
				<LivePreVies />
			</div>
		);
	}
}

