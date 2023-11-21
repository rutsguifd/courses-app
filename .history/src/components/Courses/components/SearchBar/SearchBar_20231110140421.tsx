import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SearchBar = () => {
	return (
		<div className='flex justify-center items-center space-between'>
			<div>
				<Label htmlFor='search'>Search</Label>
				<Input id='search' />
			</div>
			<Button>Add course</Button>
		</div>
	);
};

export default SearchBar;
