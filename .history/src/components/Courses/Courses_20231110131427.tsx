import { mockedCoursesList, mockedAuthorsList } from '@/constants';
import CourseCard from './components/CourseCard/CourseCard';

const Courses = () => {
	return (
		<div>
			{mockedCoursesList.map((course) => (
				<CourseCard
					key={course.id}
					{...course}
					{...mockedAuthorsList}
				/>
			))}
		</div>
	);
};

export default Courses;
