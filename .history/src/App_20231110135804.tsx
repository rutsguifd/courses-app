import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import './styles/globals.css';
import { mockedCoursesList, mockedAuthorsList } from '@/constants';

function App() {
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
