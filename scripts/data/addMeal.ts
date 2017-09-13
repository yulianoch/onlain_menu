import {StateWord} from '../Store/State';
import getTodosRef from './getOrderRef';

function addMeal( name: string, category: string, cost: number ): void
{
	const todosRef = getTodosRef();
	
	if ( !todosRef )
	{
		return;
	}
	
	todosRef.push()
		.set(
			{
				name,
				category,
				cost,
			} as Partial<StateWord>,
		);
}

/**
 * Module.
 */
export {
	addMeal as default,
};
