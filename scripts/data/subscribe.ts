import * as Firebase from 'firebase/app';
import {StateWord} from '../Store/State';
import {setWords, setUser} from '../Store/creators';
import {dispatch} from '../Store/index';
import getOrderRef from './getOrderRef';

function subscribe(): void
{
	Firebase.auth().onAuthStateChanged(
		( user: Firebase.User | null ) =>
		{
			if ( user )
			{
				subscribeToWords( user.uid );
			}
			else
			{
				unsubscribeFromWords();
			}
			dispatch( setUser( user ) );
		}
	);
}

function subscribeToWords( uid: string ): void
{
	const orderRef = getOrderRef( uid );
	
	orderRef.on(
		'value',
		( snapshot ) =>
		{
			const value = (
				snapshot
				? snapshot.val()
				: null
			);
			
			if ( !value )
			{
				dispatch( setWords( [] ) );
				return;
			}
			
			const keys = Object.keys( value );
			const words: StateWord[] = [];
			
			for ( const key of keys )
			{
				const {name} = value[key] as StateWord;
				const {category} = value[key] as StateWord;
				const {cost} = value[key] as StateWord;
				
				words.push(
					{
						id: key,
						name,
						category,
						cost,
					},
				);
			}
			dispatch( setWords( words ) );

		},
	);
}

function unsubscribeFromWords(): void
{
	const todosRef = getOrderRef();
	
	todosRef && todosRef.off();
}

/**
 * Module.
 */
export {
	subscribe as default,
};
