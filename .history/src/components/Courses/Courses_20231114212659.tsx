import { Author, Course } from '@/types/course/course';
import { FC } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

interface CoursesProps {
	coursesList: Course[];
	authorsList: Author[];
}

const Courses: FC<CoursesProps> = ({ coursesList, authorsList }) => {
	const getSearchQuery = (query: string) => {
		console.log(query);
		coursesList = coursesList.filter(
			(course) =>
				course.title.includes(query) || course.id.includes(query)
		);
		console.log(coursesList);
	};

	return (
		<div>
			<SearchBar passSearchQuery={getSearchQuery} />
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
