import ReactDOM from 'react-dom/client';
import App from './App';
import { AddCourseProvider } from './context/AddCourseProvider';
import { AuthorsProvider } from './context/AuthorsProvider';
import { CoursesProvider } from './context/CoursesProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<CoursesProvider>
		<AuthorsProvider>
			<AddCourseProvider>
				<App />
			</AddCourseProvider>
		</AuthorsProvider>
	</CoursesProvider>
);
