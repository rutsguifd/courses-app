import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import './styles/globals.css';
import { mockedAuthorsList } from '@/constants';
import { useAddCourseContext } from './context/AddCourseProvider';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useCoursesContext } from './context/CoursesProvider';
import { useAuthorsContext } from './context/AuthorsProvider';

function App() {
	const { showCreateCourse } = useAddCourseContext();
	const { courses } = useCoursesContext();
	const { authors } = useAuthorsContext();

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
