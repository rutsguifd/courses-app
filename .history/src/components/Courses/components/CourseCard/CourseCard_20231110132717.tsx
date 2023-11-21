import { FC } from 'react';
import formatCreationTime from '@/heplers/formatCreationDate';
import { Button } from '@/components/ui/button';
import getCourseDuration from '@/heplers/getCourseDuration';

interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

interface Author {
	id: string;
	name: string;
}

interface CourseCardsProps {
	course: Course;
	authorsList: Author[];
}

const CourseCard: FC<CourseCardsProps> = ({ course, authorsList }) => {
	const { title, description, creationDate, duration, authors } = course;

	const getAuthorsForCourse = (
		authorList: typeof authorsList,
		courseAuthors: string[]
	) => {
		return courseAuthors.map((authorId) =>
			authorList.find((author) => author.id === authorId)
		);
	};

	const filteredAuthors = getAuthorsForCourse(authorsList, authors).join(
		', '
	);

	const formattedCreation = formatCreationTime(creationDate);
	const formattedDuration = getCourseDuration(duration);
	return (
		<div className='flex flex-row border-2 rounded-lg m-2 p-3 gap-2'>
			<div className='w-3/5 space-y-2'>
				<div className='text-2xl font-bold'>{title}</div>
				<div>{description}</div>
			</div>
			<div className='space-y-2'>
				<div>Authors: {filteredAuthors}</div>
				<div>Duration: {formattedDuration}</div>
				<div>Created At: {formattedCreation}</div>
				<div className='text-center gap'>
					<Button>Show course</Button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
