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
			<div className='flex flex-row gap-4 my-4'>
				<div className='flex flex-col w-1/2'>
					<div>
						<h2 className='text-center text-xl'>Add Author</h2>
						<Label htmlFor='add-author'>Add Author</Label>
						<Input id='add-author' />
					</div>
				</div>
				<div className='flex flex-col w-1/2'>2</div>
			</div>
		</div>
	);
};

export default CreateCourse;
