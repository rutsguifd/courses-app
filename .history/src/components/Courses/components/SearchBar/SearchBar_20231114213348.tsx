import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAddCourseContext } from '@/context/AddCourseProvider';
import { FC, useEffect, useState } from 'react';

interface SearchBarProps {
	passSearchQuery: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ passSearchQuery }) => {
	const { handleCreateCourse } = useAddCourseContext();
	const [value, setValue] = useState('');
	const handleSearch = () => {
		passSearchQuery(value);
	};

	return (
		<div className='flex items-center justify-between m-2'>
			<div className=''>
				<div>
					<div>
						<Label htmlFor='search'>Search</Label>
						<Input
							id='search'
							onChange={(e) => setValue(e.target.value)}
							value={value}
						/>
					</div>
					<Button onClick={handleSearch}>Search</Button>
				</div>
			</div>
			<Button onClick={() => handleCreateCourse(true)}>Add course</Button>
		</div>
	);
};

export default SearchBar;
