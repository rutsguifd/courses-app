import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const CreateCourse = () => {
	return (
		<div className=' m-2'>
			<div className='flex justify-between items-end'>
				<div>
					<Label htmlFor='title'>Title</Label>
					<Input id='title' />
				</div>
				<Button>Create Course</Button>
			</div>
			<div>
				<Label htmlFor='description'>Description</Label>
				<Textarea id='description' />
			</div>
			<div className='flex flex-row gap-4'>
				<div className='flex flex-col items-center w-1/2'>
					<div>
						<h2>Add Author</h2>
						<Label htmlFor='title'>Title</Label>
						<Input id='title' />
					</div>
				</div>
				<div className='flex flex-col items-center w-1/2'>2</div>
			</div>
		</div>
	);
};

export default CreateCourse;
