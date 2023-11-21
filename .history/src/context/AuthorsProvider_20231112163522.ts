import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface AuthorsContextProps {
	showCreateCourse: boolean;
	handleAddCourse: (status: boolean) => void;
}

const AuthorsContext = createContext<AuthorsContextProps | undefined>(
	undefined
);

export const useAuthorsContext = (): AuthorsContextProps => {
	const context = useContext(AuthorsContext);
	if (!context) {
		throw new Error(
			'useAuthorsContext must be used within an AuthorsProvider'
		);
	}
	return context;
};

interface AuthorsProviderProps {
	children: ReactNode;
}

export const AuthorsProvider: FC<AuthorsProviderProps> = ({ children }) => {
	const [showCreateCourse, setShowCreateCourse] = useState(false);

	const handleAuthorsCourse = (status: boolean) => {
		setShowCreateCourse(status);
	};

	return (
		<AuthorsContext.Provider
			value={{ showCreateCourse, handleAuthorsCourse }}
		>
			{children}
		</AuthorsContext.Provider>
	);
};
