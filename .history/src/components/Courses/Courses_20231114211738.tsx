import { Author, Course } from '@/types/course/course';
import { FC } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

interface CoursesProps {
	coursesList: Course[];
	authorsList: Author[];
}

const Courses: FC<CoursesProps> = ({ coursesList, authorsList }) => {
	const getSearchQueue = () => {};

	return (
		<div>
			<SearchBar />
			{coursesList.map((course) => (
				<CourseCard
					key={course.id}
					course={course}
					authorsList={authorsList}
				/>
			))}
		</div>
	);
};

export default Courses;
