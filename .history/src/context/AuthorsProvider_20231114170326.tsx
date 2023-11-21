import { mockedAuthorsList } from '@/constants';
import { Author } from '@/types/course/course';
import { createContext, useContext, useState, ReactNode, FC } from 'react';
import * as uuid from 'uuid';

interface AuthorsContextProps {
	authors: Author[];
	handleAddAuthor: (name: string) => void;
	handleDeleteAuthor: (id: string) => Author[];
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
		setAuthors((prev) => [...prev, { id: uuid.v4(), name }]);
	};

	const handleDeleteAuthor = (id: string) => {
		return authors.filter((author) => author.id !== id);
	};

	return (
		<AuthorsContext.Provider
			value={{ authors, handleAddAuthor, handleDeleteAuthor }}
		>
			{children}
		</AuthorsContext.Provider>
	);
};
