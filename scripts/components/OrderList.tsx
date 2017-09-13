import {h} from 'preact';
import {SubscribedComponent} from '../Store/index';
import State, {StateWord,StateVisibilityFilter} from '../Store/State';
import removeMeal from '../data/removeMeal';
/**
 * Component Properties.
 */
type OrderListProps = object;

/**
 * Component State.
 */
interface OrderListState
{
	words: StateWord[];
	visibilityFilter: StateVisibilityFilter;
	
}

/**
 * заказ
 */
class OrderList extends SubscribedComponent<State, OrderListProps, OrderListState>
{
	/**
	 * Блок для вывода результата
	 */
	private Result: HTMLInputElement;

	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		const words = this.state.words;
		return (
			(words.length == 0)?
			<h3> Сделайте ваш заказ</h3>
			:
			<ul>
				{
					words.map(
						( meal: StateWord ) => (
							<li><p>{meal.name} - {meal.category}	{meal.cost}</p>
								<button type="button"
									onClick={()=>this.onRemClick(meal.id)}
								>
									удалить
								</button>
							</li>
						),
					)
				}
				<div class="summ">Сумма (руб): 
                <input 
					ref={this.refResult} value = {this.GetRez()}
				/>
				</div>
			</ul>
		);
	}
	
	/**
	 * Сохраняет ссылку на элемент поля ввода.
	 */
	private refResult = ( element: HTMLInputElement ): void =>
	{
		this.Result = element;
	}


	protected GetRez(): string
	{
		const words = this.state.words;
        const l = Object.keys(words).length;
		var s: number = 0;
		for( var i=0;i<l;i++)
		{ 
			s = 0 + s + words[i].cost;
		}
           return(String(s));		
	}
	
	protected storeStateChanged( {words}: State ): void
	{
 		if ( words === this.state.words )
		{
			return;
		}
		this.setState( {words} );
		
	}

	private onRemClick = ( id: string): void =>
	{
		removeMeal( id);
	}
}

/**
 * Module.
 */
export {
	OrderList as default,
	OrderListProps,
	OrderListState,
};
