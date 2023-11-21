import ReactDOM from 'react-dom/client';
import App from './App';
import { AddCourseProvider } from './context/AddCourseProvider';
import { AuthorsProvider } from './context/AuthorsProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<AuthorsProvider>
		<AddCourseProvider>
			<App />
		</AddCourseProvider>
	</AuthorsProvider>
);
