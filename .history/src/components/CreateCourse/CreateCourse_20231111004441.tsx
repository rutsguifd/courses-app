import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const CreateCourse = () => {
	return (
		<div>
			<div className='flex justify-between items-end m-2'>
				<div>
					<Label htmlFor='title'>Title</Label>
					<Input id='title' />
				</div>
				<Button>Create Course</Button>
			</div>
			<div>
				<Label htmlFor='title'>Title</Label>
				<Input id='title' />
			</div>
		</div>
	);
};

export default CreateCourse;
