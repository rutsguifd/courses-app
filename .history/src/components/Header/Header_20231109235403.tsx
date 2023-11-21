import { Button } from 'components/ui/button';
import Logo from './components/Logo/Logo';
import '../../styles/globals.css';

const Header = () => {
	return (
		<div className='flex space-between w-full'>
			<Logo />
			<div>
				<div>Nika</div>
				<Button>Logout</Button>
			</div>
		</div>
	);
};

export default Header;
