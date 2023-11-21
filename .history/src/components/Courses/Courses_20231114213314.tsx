import { Author, Course } from '@/types/course/course';
import { useState } from 'react';
import { FC } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

interface CoursesProps {
	coursesList: Course[];
	authorsList: Author[];
}

const Courses: FC<CoursesProps> = ({ coursesList, authorsList }) => {
	const [(filteredCourses, setFilteredCourses)] =
		useState<Course[]>(coursesList);

	const getSearchQuery = (query: string) => {
		console.log(query);
		if (query.trim() === '') {
			setFilteredCourses(coursesList); // Reset to the original list if the query is empty
		} else {
			const filteredList = coursesList.filter(
				(course) =>
					course.title.includes(query) || course.id.includes(query)
			);
			setFilteredCourses(filteredList);
		}
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
