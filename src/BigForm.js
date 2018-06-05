import React, { Component } from 'react'



class BigForm extends Component {
	constructor() {
		super();
		this.state = {
			checked: [false, false, false]
		};
	}

	checkboxOnCheck = id => {
		const checked = this.state.checked.map((value, index) => {
			if(id === index) {
				return !value;
			}
			return value;
		});

		//this.setState({ checked: this.state.checked });
	}

	render() {
		const checked = this.state.checked
		return (
			<div className="form">
				<span>Checked boxes: {checked}</span>
				<div className="checkbox-wrapper">
					<span>checkbox 0</span>
					<input value={checked[0]} onChange={this.checkboxOnCheck(0)} type="checkbox" />
				</div>
				<div className="checkbox-wrapper">
					<span>checkbox 1</span>
					<input value={checked[1]} onChange={this.checkboxOnCheck(1)} type="checkbox" />
				</div>
				<div className="checkbox-wrapper">
					<span>checkbox 2</span>
					<input value={checked[2]} onChange={this.checkboxOnCheck(2)} type="checkbox" />
				</div>
			</div>
		)
	}
}

export default BigForm 