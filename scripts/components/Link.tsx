import {h} from 'preact';

/**
 * Component Properties.
 */
interface LinkProps
{
	active: boolean;
	children?: JSX.Element[];
	onClick( event: Event ): void;
}

/**
 * Ссылка-переключатель.
 */
function Link(
	{active, onClick,children, }: LinkProps,
): JSX.Element
{
	if ( active )
	{
		return <button type="button" class="active"
					onClick={onClick}
		>
			{children}
        </button>;
	}
	
	return (
		<button type="button" class="non-active"
		>
			{children}
		</button>
	);
}

/**
 * Module.
 */
export {
	Link as default,
	LinkProps,
};
