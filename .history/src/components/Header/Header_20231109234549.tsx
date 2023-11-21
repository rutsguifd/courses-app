import { Button } from 'components/ui/button';
import Logo from './components/Logo/Logo';

const Header = () => {
	return (
		<div className='flex space-between'>
			<Logo />
			<div>
				<div>Nika</div>
				<Button>Logout</Button>
			</div>
		</div>
	);
};

export default Header;
