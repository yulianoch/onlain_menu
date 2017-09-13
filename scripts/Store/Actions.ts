import {Action as BaseAction} from 'small-redux';

/**
 * Возможные действия.
 */
const Actions = {
	ADD_WORD: 'ADD_WORD' as 'ADD_WORD',
	SET_WORDS: 'SET_WORDS' as 'SET_WORDS',
	SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER' as 'SET_VISIBILITY_FILTER',
	SET_USER: 'SET_USER' as 'SET_USER',
};

/**
 * Объект действия.
 */
interface Action extends BaseAction
{
	/** Тип */
	type: keyof typeof Actions;
	/** Данные */
	payload: any;
}

/**
 * Module.
 */
export {
	Actions as default,
	Action,
};
