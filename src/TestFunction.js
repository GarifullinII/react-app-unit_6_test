import React, { useEffect } from 'react';

function TestFunction(props) {
	
	console.log('set state');
	const [s1, setS1] = React.useState(props.argument);

	const buttonHandler = () => {
		console.log('work buttonHadler');

		let val = s1;
		val ++;
		setS1(val);
	}

	// принимает функцию, которая срабатывает при эффектах внутри компонента, 
	useEffect(() => {
		console.log('effect');
	});
	
	console.log('render 1-1')
	return (
	<>
		{console.log('render 2-2')}
		<div>
			{s1}
		</div>
		<button onClick={buttonHandler}>
			Click
		</button>
	</>
	)
}

export default TestFunction;