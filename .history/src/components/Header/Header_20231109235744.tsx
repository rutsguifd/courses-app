import { Button } from 'components/ui/button';
import Logo from './components/Logo/Logo';

const Header = () => {
	return (
		<div className='flex justify-between w-full'>
			<Logo />
			<div>
				<div>Nika</div>
				<Button>Logout</Button>
			</div>
		</div>
	);
};

export default Header;
