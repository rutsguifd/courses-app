import getCourseDuration from '@/helpers/getCourseDuration';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { mockedAuthorsList } from '@/constants';
import { v4 } from 'uuid';

const CreateCourse = () => {
	const [duration, setDuration] = useState(0);
	const [author, setAuthor] = useState('');
	const formattedDuration = getCourseDuration(duration);

	const createAuthor = () => {
		mockedAuthorsList.push({ id: v4() });
	};

	return (
		<div className='m-2'>
			<div className='flex justify-between items-end'>
				<div>
					<Label htmlFor='title'>Title</Label>
					<Input id='title' required minLength={2} />
				</div>
				<Button>Create Course</Button>
			</div>
			<div>
				<Label htmlFor='description'>Description</Label>
				<Textarea id='description' required minLength={2} />
			</div>
			<div className='flex flex-row gap-4 my-6 p-4 border-2 rounded-lg'>
				<div className='flex flex-col w-1/2'>
					<div className='w-full space-y-2'>
						<h2 className='text-center text-xl'>Add Author</h2>
						<Label htmlFor='add-author'>Add Author</Label>
						<Input id='add-author' required minLength={2} />
						<Button>Create Author</Button>
					</div>
					<div className='w-full space-y-2'>
						<h2 className='text-center text-xl'>Duration</h2>
						<Label htmlFor='duration'>Duration</Label>
						<Input
							type='number'
							id='duration'
							onChange={(e) =>
								setDuration(parseInt(e.target.value))
							}
							required
						/>
						<h3 className='text-xl'>
							Duration: {formattedDuration}
						</h3>
					</div>
				</div>
				<div className='flex flex-col w-1/2'>
					<div>
						<h2 className='text-center text-xl'>Authors</h2>
						{mockedAuthorsList.map((author) => (
							<div
								className='flex justify-between mb-2'
								key={author.id}
							>
								{author.name}
								<Button>Add Author</Button>
							</div>
						))}
					</div>
					<div>
						<h2 className='text-center text-xl'>Course Authors</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
