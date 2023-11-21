import { FC } from 'react';
import formatCreationTime from '@/helpers/formatCreationDate';
import { Button } from '@/components/ui/button';
import getCourseDuration from '@/helpers/getCourseDuration';
import getAuthorsForCourse from '@/helpers/getAuthorsForCourse';
import { Author, Course } from '@/types/course/course';

interface CourseCardsProps {
	course: Course;
	authorsList: Author[];
}

const CourseCard: FC<CourseCardsProps> = ({ course, authorsList }) => {
	const { title, description, creationDate, duration, authors } = course;

	const filteredAuthors = getAuthorsForCourse(authorsList, authors)
		.map((author) => author?.name)
		.join(', ');

	const formattedCreation = formatCreationTime(creationDate);
	const formattedDuration = getCourseDuration(duration);
	return (
		<div className='flex flex-row border-2 rounded-lg m-2 p-3 gap-2'>
			<div className='w-3/5 space-y-2'>
				<div className='text-2xl font-bold'>{title}</div>
				<p>{description}</p>
			</div>
			<div className='space-y-2 w-2/5'>
				<div className='overflow-hidden whitespace-nowrap overflow-ellipsis'>
					Authors: {filteredAuthors}
				</div>
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
