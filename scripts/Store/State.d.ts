import {User} from 'firebase/app';

/**
 Исходный массив
*/ 
interface Menu
{
	menus: StateWord[];
}

/**
 * Состояние приложения.
 */
interface State
{
	/** Задачи */
	words: StateWord[];
	/** Фильтр видимости */
	visibilityFilter: StateVisibilityFilter;
	/** Данные пользователя */
	user: User | null;

}

/**
 * Задача.
 */

interface StateWord
{
	/** Идентификатор */
	id: string;
	/** блюдо */
	name: string;
	/** категория */
	category: string;
	/**  цена*/
	cost: number;
}

/**
 * Фильтр видимости.
 */
type StateVisibilityFilter = 'SHOW_AND_ADD' | 'TEST';

/**
 * Module.
 */
export {
	State as default,
	StateWord,
	StateVisibilityFilter,
	Menu,
};
