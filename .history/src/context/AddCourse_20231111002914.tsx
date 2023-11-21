import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface AddCourseContextProps {
	showCreateCourse: boolean;
	handleAddCourse: () => void;
}

const AppContext = createContext<AddCourseContextProps | undefined>(undefined);

export const useAppContext = (): AddCourseContextProps => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
};

interface AddCourseProviderProps {
	children: ReactNode;
}

export const AddCourseProvider: FC<AddCourseProviderProps> = ({ children }) => {
	const [showCreateCourse, setShowCreateCourse] = useState(false);

	const handleAddCourse = () => {
		setShowCreateCourse(!showCreateCourse);
	};

	return (
		<AppContext.Provider value={{ showCreateCourse, handleAddCourse }}>
			{children}
		</AppContext.Provider>
	);
};
