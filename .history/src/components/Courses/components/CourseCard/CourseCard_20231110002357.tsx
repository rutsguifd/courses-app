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
		<div className='border-'>
			<div>{title}</div>
			<div>{description}</div>
		</div>
	);
};

export default CourseCard;
