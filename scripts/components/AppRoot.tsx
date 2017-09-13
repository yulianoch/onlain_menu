import {h} from 'preact';
import Auth from './Auth';
import Header from './Header';

function TodoApp(): JSX.Element
{
	return (
	<body>
		<section>
			<h1>Сделай заказ</h1>
			<Auth/>	
		</section>
		<Header/>
	</body>
		
	);
}

/**
 * Корень приложения.
 */	

 const AppRoot = <TodoApp />;

/**
 * Module.
 */
export {
	AppRoot as default,
	TodoApp,
};
