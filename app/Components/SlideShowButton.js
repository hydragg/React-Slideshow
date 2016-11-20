import React from 'react';

export class SlideShowButton extends React.Component {
	constructor(props){
		super(props);
		this.handle=this.handle.bind(this);
		this.state = {
		};
	}
	componentDidMount(){         //元件寫入DOM之後觸發
		$(this.refs.content).addClass("disabled");
	}
	componentDidUpdate(){        //更新後觸發
		if(this.props.canPlay === true){
			$(this.refs.content).removeClass("disabled");
		}else{
			$(this.refs.content).addClass("disabled");
		}
	}
	handle(e){
		document.getElementById("source").innerHTML = this.props.text;
		remark.create();
	}
	render(){
		return (
			<div>
				<button ref="content" onClick={this.handle} className={this.props.className}>播放</button>
			</div>
		);
	}
}
