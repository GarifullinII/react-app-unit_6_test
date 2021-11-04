import React from 'react';

class TestClass extends React.Component {

	// state в ООП указываем в конструкторе
	constructor(props) {
		console.clear();
		console.log('constructor');
		console.log(props);
		// в самом начале запускается constructor и только потом происходит render компонента

		super();
		this.state = {
			s1: 0
		}

		// this.state = {
		// 	s1: props.argument - можно присвоить в state нужные props, при этом они присвоятся один раз
		// }
	}

	// метод срабатываемый при клике по кнопке
	buttonHandler = () => {
		console.log('work');

		let val = this.state.s1;
		val ++;
		this.setState({ s1: val})
	}

	static getDerivedStateFromProps(props, state) {
		console.log('get derived state');

		return null

		// return ({ s1: props.argument })
	}

	componentDidMount() {
		console.log('component did mount')
	}

	render() {
		console.log('render 1');

		return (
			<>
				{console.log('render 2')}
				<div>
					{this.state.s1}
				</div>
				<button onClick={this.buttonHandler}>
					Click
				</button>
			</>
		)
	}
}

export default TestClass;

// один жизненный цикл - создание компонента, запуск constructor только при создании компонента, далее только перерисовка - render. При  обновлении state перезапускается только render. Компонента не создается заново.
// getDerivedStateFromProps(props, state) - метод, который позволяет узнать, а не изменился props или state при перерисовке. Метод запускается при каждой перерисовке. Позволяет посмотреть, что лежит в props и присвоить их state.
// componentDidMount() - метод, который показывае, что компонент был выведен и закончил свою отрисовку