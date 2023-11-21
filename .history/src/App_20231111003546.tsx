import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import './styles/globals.css';
import { mockedCoursesList, mockedAuthorsList } from '@/constants';
import { useAddCourseContext } from './context/AddCourseProvider';

function App() {
	const {} = useAddCourseContext;
	return (
		<div className='App'>
			<Header />
			<Courses
				coursesList={mockedCoursesList}
				authorsList={mockedAuthorsList}
			/>
		</div>
	);
}

export default App;
