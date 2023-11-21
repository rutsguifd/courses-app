import { mockedAuthorsList } from '@/constants';
import { Author } from '@/types/course/course';
import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface AuthorsContextProps {
	authors: Author[];
	handleAddAuthor: (name: string) => void;
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
	const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);

	const handleAddAuthor = (name: string) => {
		setShowCreateCourse({...authors, {id: }});
	};

	return (
		<AuthorsContext.Provider value={{ showCreateCourse, handleAddAuthor }}>
			{children}
		</AuthorsContext.Provider>
	);
};