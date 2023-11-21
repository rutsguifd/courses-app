import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SearchBar = () => {
	return (
		<div className='flex items-center justify-between m-2'>
			<div>
				<form>
					<div>
						<Label htmlFor='search'>Search</Label>
						<Input id='search' />
					</div>
					<Button type='submit'>Search</Button>
				</form>
			</div>
			<Button>Add course</Button>
		</div>
	);
};

export default SearchBar;
