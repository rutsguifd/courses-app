import { Author, Course } from '@/types/course/course';
import CourseCard from './components/CourseCard/CourseCard';

interface CoursesProps {
	coursesList: Course[];
	authorsList: Author[];
}

const Courses = () => {
	return (
		<div>
			{mockedCoursesList.map((course) => (
				<CourseCard
					key={course.id}
					course={course}
					authorsList={mockedAuthorsList}
				/>
			))}
		</div>
	);
};

export default Courses;
