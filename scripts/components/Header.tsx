import {h} from 'preact';
import State, { StateWord} from '../Store/State';
import { SubscribedComponent} from '../Store/index';
import OrderList from './OrderList';
import Link from './Link';
import removeMeal from '../data/removeMeal';
/**
 * Component Properties.
 */
type HeaderProps = object;

/**
 * Component State.
 */
interface HeaderState
{
/**	visibilityFilter: StateVisibilityFilter; */
	words: StateWord[];
}


/**
 * Шапка приложения.
 */
class Header extends SubscribedComponent<State, HeaderProps, HeaderState>
{
	/**
	 * Render component.
	 */
	public render(
		_props: HeaderProps,

	): JSX.Element
	{
		const {words} = this.state;
		return (
		<section>
			<h2>Заказ</h2>				
			<OrderList/>
			<header> 
				{(words.length != 0)?
					
				<Link
					active={true}
					onClick={this.onSentClick}					
				>
				отправить
				</Link>
				:
				<Link
					active={false}
					onClick={this.onSentClick}					
				>
				отправить
				</Link>
				}
				{(words.length != 0)?

				<Link 
				    active={true}
					onClick={this.onRemClick}
				>
				сброс
				</Link>
				:
				<Link
					active={false}
					onClick={this.onRemClick}
				>
					сброс
				</Link>
				}
			</header>
		
			<input class = 'FOOT' ref={this.refOK} value ='' />
		</section>
			
		);
	}
	
	protected storeStateChanged( { words}: State ): void
	{
		if (  words === this.state.words)
		{
			return;
		}
		
		this.setState( { words} );
	}
	

	private OK: HTMLInputElement;
	private refOK = ( element: HTMLInputElement ): void =>
	{
		this.OK = element;
	}


	private onSentClick = ( ) : void =>
	{
		console.log('SEND');
		this.OK.value = 'ВЫПОЛНЕНО';
	}

	
	protected onRemClick = ( ): void =>
	{
		const words = this.state.words;
        const l = Object.keys(words).length;
		for( var i=0;i<l;i++)
		{ 
			removeMeal( words[i].id); 
		}
	}	
}

/**
 * Module.
 */
export {
	Header as default,
	HeaderProps,
	HeaderState,
};
