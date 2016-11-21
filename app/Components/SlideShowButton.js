import React from 'react';

export class SlideShowButton extends React.Component {
	constructor(props){
		super(props);
		this.handle=this.handle.bind(this);
		this.state = {
			text:"",
		};
	}
	componentDidMount(){        	    //元件寫入DOM之後觸發
		$(this.refs.content).addClass("disabled");
	}
	componentDidUpdate(){        		//更新後觸發
		if(this.props.canPlay === true){
			$(this.refs.content).removeClass("disabled");
		}else{
			$(this.refs.content).addClass("disabled");
		}
		
	}
	componentWillReceiveProps(props){   //收到新的props時觸發
		this.setState({text:props.text});
	}
	handle(e){
		document.getElementById("source").innerHTML = this.state.text;
		remark.create();
	}
	render(){
		return (
			<div>
				<button ref="content" 
						onClick={this.handle} 
						className={this.props.className}>播放
				</button>
			</div>
		);
	}
}

SlideShowButton.defaultProps = {    //當父元件沒有提供值時則用預設值
	canPlay:true,
	text:"",
};

SlideShowButton.propTypes = {       //規範原件prop的資料型別
	canPlay:React.PropTypes.bool,
	text:React.PropTypes.string,
};