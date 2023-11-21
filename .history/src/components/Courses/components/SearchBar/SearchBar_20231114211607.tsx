import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAddCourseContext } from '@/context/AddCourseProvider';
import { useState } from 'react';

const SearchBar = () => {
	const { handleCreateCourse } = useAddCourseContext();
	const [value, setValue] = useState('');
	return (
		<div className='flex items-center justify-between m-2'>
			<div>
				<form className='flex flex-row items-end gap-2'>
					<div>
						<Label htmlFor='search'>Search</Label>
						<Input
							id='search'
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<Button type='submit'>Search</Button>
				</form>
			</div>
			<Button onClick={() => handleCreateCourse(true)}>Add course</Button>
		</div>
	);
};

export default SearchBar;
