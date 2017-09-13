import {User} from 'firebase/app';
import {h} from 'preact';
import {SubscribedComponent} from '../Store/index';
import State from '../Store/State';
import signIn from '../data/signIn';
import signOut from '../data/signOut';
import MenuList from './MenuList';

/**
 * Component Properties.
 */
interface AuthProps
{
}

/**
 * Component State.
 */
interface AuthState
{
	user: User | null;
}

class Auth extends SubscribedComponent<State, AuthProps, AuthState>
{
	/**
	 * Render component.
	 */
	public render( _props: AuthProps, {user}: AuthState ): JSX.Element
	{
		return (
			<div /*class="auth"*/>
				{
					user
					? [
						(
							<div class="menu-auth">
								<span className="name">
									User: {user.displayName}
								</span>
								<button type="button"
									class="sign-out"
									onClick={signOut}
								>
									Выйти
								</button>
							</div>
						),
							<MenuList />,
						]
					: (
						<button type="button"
							class="sign-in"
							onClick={signIn}
						>
							Авторизоваться 
						</button>
					)
				}
			</div>
		);
	}
	
	protected storeStateChanged( {user}: State ): void
	{
		if ( user === this.state.user )
		{
			return;
		}
		
		this.setState( {user} );
	}
}

/**
 * Module.
 */
export {
	Auth as default,
	AuthProps,
	AuthState,
};
