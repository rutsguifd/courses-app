import { mockedCoursesList, mockedAuthorsList } from '@/constants';
import CourseCard from './components/CourseCard/CourseCard';

const Courses = () => {
	const getAuthorsForCourse = (
		authorsList: typeof mockedAuthorsList,
		courseAuthor
	) => {
		return authorsList.map((author) =>
			authorsList.find((author) => author.id === authorId)
		);
	};
	return (
		<div>
			{mockedCoursesList.map((course) => {
				return <CourseCard key={course.id} {...course} />;
			})}
		</div>
	);
};

export default Courses;
