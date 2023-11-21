import { Button } from '../ui/button';
import Logo from './components/Logo/Logo';

const Header = () => {
	return (
		<div className='flex justify-between items-center bg-zinc-500 m-2 p-3 border-2 rounded-lg'>
			<Logo />
			<div className=' flex flex-row gap-3 items-center'>
				<div>Nika</div>
				<Button>Logout</Button>
			</div>
		</div>
	);
};

export default Header;
