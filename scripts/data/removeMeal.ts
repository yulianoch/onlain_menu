import {database} from 'firebase/app';
import {getState} from '../Store/index';

function removeMeal( id: string ): void
{
	const stateUser = getState().user;
	if (stateUser)
	{
		const todoRef =  database().ref(`/users/${stateUser.uid}/order/${id}`);
		todoRef.remove();
	}
}

/**
 * Module.
 */
export {
	removeMeal as default,
};
