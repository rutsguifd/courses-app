import { mockedCoursesList, mockedAuthorsList } from '@/constants';
import CourseCard from './components/CourseCard/CourseCard';

const Courses = () => {
	return (
		<div>
			{mockedCoursesList.map((course) => {
				return <CourseCard key={course.id} {...course} />;
			})}
		</div>
	);
};

export default Courses;
