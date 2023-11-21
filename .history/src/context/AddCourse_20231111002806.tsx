import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface AppContextProps {
	showCreateCourse: boolean;
	handleAddCourse: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = (): AppContextProps => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
};

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
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
