import React from 'react';

export class LivePreview extends React.Component {
	constructor(props){
		super(props);
		this.converter = new showdown.Converter();
		this.state = {
			html:"",
		};
	}
	componentDidUpdate(){  				//更新後觸發
		document.getElementById("LivePreview").innerHTML=this.state.html;
	}
	componentWillReceiveProps(props){  //收到新的props時觸發
		const html = this.converter.makeHtml(props.text);
		this.setState({html:html});
	}
	render(){
		return (
			<div id="LivePreview">{this.state.html}</div>
		);
	}
}

LivePreview.defaultProps = {
	html:"",
};

LivePreview.propTypes = {
	html:React.PropTypes.string,
};