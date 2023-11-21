import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import './styles/globals.css';
import { mockedCoursesList, mockedAuthorsList } from '@/constants';
import { useAddCourseContext } from './context/AddCourseProvider';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const { showCreateCourse } = useAddCourseContext();
	return (
		<div className='App'>
			<Header />
			{showCreateCourse ? (
				<CreateCourse />
			) : (
				<Courses
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
				/>
			)}
		</div>
	);
}

export default App;
