import { Button } from 'components/ui/button';
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
	return (
		<div className='flex flex-row border-2 rounded-lg m-2 p-3 gap-2'>
			<div className='w-3/5'>
				<div>{title}</div>
				<div>{description}</div>
			</div>
			<div className='gap-y-10'>
				<div>Authors: {authors[0]}</div>
				<div>Duration: {duration}</div>
				<div>Created At: {creationDate}</div>
				<div className='text-center gap'>
					<Button>Show course</Button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
