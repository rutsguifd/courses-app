import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import './styles/globals.css';
import { mockedCoursesList, mockedAuthorsList } from '@/constants';
import { useAddCourseContext } from './context/AddCourseProvider';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useCoursesContext } from './context/CoursesProvider';

function App() {
	const { showCreateCourse } = useAddCourseContext();
	const { courses } = useCoursesContext();

	return (
		<div className='App'>
			<Header />
			{showCreateCourse ? (
				<CreateCourse />
			) : (
				<Courses
					coursesList={courses}
					authorsList={mockedAuthorsList}
				/>
			)}
		</div>
	);
}

export default App;
