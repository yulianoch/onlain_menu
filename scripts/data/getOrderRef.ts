import {database} from 'firebase/app';
import {getState} from '../Store/index';

function getOrderRef( uid: string ): database.Reference;
function getOrderRef(): database.Reference | null;
function getOrderRef( uid?: string ): database.Reference | null
{
	if ( !uid )
	{
		const stateUser = getState().user;
		
		if ( !stateUser )
		{
			return null;
		}
		
		uid = stateUser.uid;
	}
	
	return database().ref( `/users/${uid}/order` );
}

/**
 * Module.
 */
export {
	getOrderRef as default,
};
