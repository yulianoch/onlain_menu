import {h} from 'preact';
import {SubscribedComponent} from '../Store/index';
import State, {StateWord} from '../Store/State';
import addMeal from '../data/addMeal';

/**
 * Component Properties.
*/
type MenuListProps = object;

/**
 * Component State.
 */
interface MenuListState
{
	menus: StateWord[];
}
	const  Menu = {
	menus:
	[{
	id:'1',
	name: 'Суп Харчо',
	category: 'Первые блюда',
	cost: 100
	},
	{
	id:'2',
	name: 'Куриный суп',
	category: 'Первые блюда',
	cost: 120
	},
	{
	id: '3',
	name: 'Плов из баранины',
	category: 'Вторые блюда',
	cost : 150
	},
	{
	id: '4',
	name: 'Котлета с пюре',
	category: 'Вторые блюда',
	cost : 120
	},
	{
	id: '5',
	name: 'Тушеная говядина с овощами',
	category: 'Вторые блюда',
	cost : 200
	},
	{
	id: '6',
	name: 'Салат Оливье',
	category: 'Закуски',
	cost : 100
	},
	{
	id: '7',
	name: 'Овощной салат',
	category: 'Закуски',
	cost : 60
	},
	{
	id: '8',
	name: 'Чизкейк',
	category: 'Десерты',
	cost : 110
	},
	{
	id: '9',
	name: 'Мороженое',
	category: 'Десерты',
	cost : 70
	}]
	};

/**
 * меню
 */
class MenuList extends SubscribedComponent< State,MenuListProps,MenuListState>
{


	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		return (
			(Menu.menus.length == 0)?
			<div > Добавьте блюда в меню</div>
			:					
			<ul class="menu-list"> 
				<h2 >  Меню </h2>
					{
						Menu.menus.map(
						( word: StateWord ) => (
							<li><p>{word.name} - {word.category} - {word.cost}</p>
								<button type="button"
									onClick={()=>this.onClick(word.name,word.category,word.cost)}
								>
									выбрать
								</button>
							</li>
						),
						)
					}
			</ul>
			)
	};
	
	protected storeStateChanged( ): void
	{
		return;
	}

	private onClick = (name:string,category:string,cost:number): void =>
	{
		addMeal( name,  category, cost );
	}
}

/**
 * Module.
 */
export {
	MenuList as default,
	MenuListProps,
	MenuListState,
};
