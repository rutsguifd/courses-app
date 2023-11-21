import ReactDOM from 'react-dom/client';
import App from './App';
import { AddCourseProvider } from './context/AddCourseProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<AddCourseProvider>
		<App />
	</AddCourseProvider>
);
