import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SearchBar = () => {
	return (
		<div>
			<Label htmlFor='search'>Search</Label>
			<Input id='search' />
		</div>
	);
};

export default SearchBar;
