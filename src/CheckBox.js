import React, { Component } from 'react'


class CheckBox extends Component {
	constructor(props){
		super(props)
		this.state={
			items:props.items,
			checked:[false,false,false],
			count:0
		}
	}

	checkboxOnCheck = e => {

		console.log(e)
		this.setState({count: this.state.count + 1});
	}

	render(){
		const checked = this.state.count
		return(<div>
				<span>Checked boxes: {checked}</span>
				{this.state.items.map((item,i) => { 
					
					return  <div key={i} className="checkbox-wrapper">
								<span>checkbox {i}</span>
								<input value={this.state.checked[i]} onClick={(event) => this.checkboxOnCheck(event,i)} type="checkbox" />
							</div>
					
				})}
				</div>
			)
	}
}


export default CheckBox