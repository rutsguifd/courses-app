import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const CreateCourse = () => {
	return (
		<div>
			<div className='flex justify-between m-2'>
				<div>
					<Label htmlFor='title'>Title</Label>
					<Input id='title' />
				</div>
				<Button>Create Course</Button>
			</div>
		</div>
	);
};

export default CreateCourse;
