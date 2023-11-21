import getCourseDuration from '@/helpers/getCourseDuration';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useAuthorsContext } from '@/context/AuthorsProvider';
import { Author, Course } from '@/types/course/course';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { useInput } from '@/hooks/useInput';

const CreateCourse = () => {
	const [course, setCourse] = useState<Course>();
	// const [duration, setDuration] = useState(0);
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);

	const title = useInput('', { isEmpty: true, minLength: 2 });
	const description = useInput('', { isEmpty: true, minLength: 2 });
	const author = useInput('', { isEmpty: true, minLength: 2 });
	const duration = useInput('', { isEmpty: true, minLength: 2 });

	const formattedDuration = getCourseDuration(parseInt(duration.value));

	const { authors, handleAddAuthor, handleDeleteAuthor } =
		useAuthorsContext();

	const handleOnAddAuthor = (author: Author) => {
		handleDeleteAuthor(author.id);
		setCourseAuthors((prev) => [...prev, author]);
	};

	const handleOnDeleteAuthor = (Author: Author) => {
		handleAddAuthor(Author.name);
		setCourseAuthors((prev) =>
			prev.filter((author) => author.id !== Author.id)
		);
	};

	// const handleSubmit = (e: Htm) => {};

	return (
		<div className='m-2'>
			<form>
				<div className='flex justify-between items-end'>
					<div>
						<Label htmlFor='title'>
							{title.errorMessage || 'Title'}
						</Label>
						<Input
							id='title'
							onChange={(e) => title.onChange(e)}
							onBlur={(e) => title.onBlur(e)}
							value={title.value}
						/>
					</div>
					<Button>Create Course</Button>
				</div>
				<div>
					<Label htmlFor='description'>
						{description.errorMessage || 'Description'}
					</Label>
					<Textarea
						id='description'
						onChange={(e) => description.onChange(e)}
						onBlur={(e) => description.onBlur(e)}
						value={description.value}
					/>
				</div>
				<div className='flex flex-row gap-4 my-6 p-4 border-2 rounded-lg'>
					<div className='flex flex-col w-1/2'>
						<div className='w-full space-y-2'>
							<h2 className='text-center text-xl'>Add Author</h2>
							<Label htmlFor='add-author'>Add Author</Label>
							<Input
								onChange={(e) => author.onChange(e)}
								onBlur={(e) => author.onBlur(e)}
								value={author.value}
								id='add-author'
							/>
							<Button
								onClick={() => handleAddAuthor(author.value)}
							>
								Create Author
							</Button>
						</div>
						<div className='w-full space-y-2'>
							<h2 className='text-center text-xl'>Duration</h2>
							<Label htmlFor='duration'>Duration</Label>
							<Input
								type='number'
								id='duration'
								onChange={(e) => duration.onChange(e)}
								onBlur={(e) => duration.onBlur(e)}
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
									courseList={false}
									onAddAuthor={handleOnAddAuthor}
									onDeleteAuthor={handleOnDeleteAuthor}
								/>
							))}
						</div>
						<div>
							<h2 className='text-center text-xl'>
								Course Authors
							</h2>
							{courseAuthors.map((author) => (
								<AuthorItem
									key={author.id}
									author={author}
									courseList={true}
									onAddAuthor={handleOnAddAuthor}
									onDeleteAuthor={handleOnDeleteAuthor}
								/>
							))}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;
