import { Button } from 'components/ui/button';
import Logo from './components/Logo/Logo';

const Header = () => {
	return (
		<div className='flex justify-between items-center w-full bg-zinc-500 m-2 p-3 border-2 rounded-lg'>
			<Logo />
			<div className=' flex flex-row'>
				<div>Nika</div>
				<Button>Logout</Button>
			</div>
		</div>
	);
};

export default Header;
