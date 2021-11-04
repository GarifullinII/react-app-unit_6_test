import React from 'react';

class Test extends React.Component {

	buttonHandler = () => {
		console.log('work');
	}

	render() {
		console.log('render 1');

		return (
			<>
				{console.log('render 2')}
				<button onClick={this.buttonHandler}>
					Click
				</button>
			</>
		)
	}
}

export default Test;