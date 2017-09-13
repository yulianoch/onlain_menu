import {User} from 'firebase/app';
import Actions, {Action} from './Actions';
import {StateWord, StateVisibilityFilter} from './State';

function setVisibilityFilter( visibilityFilter: StateVisibilityFilter ): Action
{
	return {
		type: Actions.SET_VISIBILITY_FILTER,
		payload: {visibilityFilter},
	};
}

function setWords( words: StateWord[] ): Action
{
	return {
		type: Actions.SET_WORDS,
		payload: {words},
	};
}

function setUser( user: User | null ): Action
{
	return {
		type: Actions.SET_USER,
		payload: {user},
	};
}


/**
 * Module.
 */
export {
	setVisibilityFilter,
	setWords,
	setUser,
};
