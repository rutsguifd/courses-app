import getCourseDuration from '@/helpers/getCourseDuration';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useAuthorsContext } from '@/context/AuthorsProvider';
import { Author } from '@/types/course/course';
import AuthorItem from './components/AuthorItem/AuthorItem';

const CreateCourse = () => {
	const [duration, setDuration] = useState(0);
	const formattedDuration = getCourseDuration(duration);
	const [author, setAuthor] = useState('');
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);

	const { authors, handleAddAuthor, handleDeleteAuthor } =
		useAuthorsContext();

	const handleOnAddAuthor = (author: Author) => {
		handleAddAuthor(author.id);
		setCourseAuthors((prev) => [...prev, author]);
	};

	const handleOnDeleteAuthor = (authorId: string) => {
		setCourseAuthors((prev) =>
			prev.filter((author) => author.id !== authorId)
		);
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
						<Input
							onChange={(e) => setAuthor(e.target.value)}
							id='add-author'
							required
							minLength={2}
						/>
						<Button onClick={() => handleAddAuthor(author)}>
							Create Author
						</Button>
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
						{authors.map((author) => (
							<AuthorItem
								key={author.id}
								author={author}
								onAddAuthor={handleOnAddAuthor}
								onDeleteAuthor={handleOnDeleteAuthor}
							/>
						))}
					</div>
					<div>
						<h2 className='text-center text-xl'>Course Authors</h2>
						{courseAuthors.map((author) => (
							<AuthorItem
								key={author.id}
								author={author}
								onAddAuthor={handleOnAddAuthor}
								onDeleteAuthor={handleOnDeleteAuthor}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
