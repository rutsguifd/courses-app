import { Button } from '@/components/ui/button';
import formatCreationTime from '@/heplers/formatCreationDate';
import { FC } from 'react';

interface CourseCarsProps {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

const CourseCard: FC<CourseCarsProps> = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	const formattedCreation = formatCreationTime(creationDate);
	return (
		<div className='flex flex-row border-2 rounded-lg m-2 p-3 gap-2'>
			<div className='w-3/5 space-y-2'>
				<div className='text-2xl font-bold'>{title}</div>
				<div>{description}</div>
			</div>
			<div className='space-y-2'>
				<div>Authors: {authors[0]}</div>
				<div>Duration: {duration}</div>
				<div>Created At: {formatCreationTime}</div>
				<div className='text-center gap'>
					<Button>Show course</Button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
