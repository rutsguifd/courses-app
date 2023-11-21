import { mockedAuthorsList } from '@/constants';
import { Author } from '@/types/course/course';
import { createContext, useContext, useState, ReactNode, FC } from 'react';
import * as uuid from 'uuid';

interface AuthorsContextProps {
	authors: Author[];
	courseAuthors: Author[];
	handleAddAuthor: (name: string) => void;
	handleAddCourseAuthor: (author: Author) => void;
	handleDeleteAuthor: (id: string) => void;
	handleRemoveCourseAuthor: (id: string) => void;
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
// AuthorsProvider.tsx
export const AuthorsProvider: FC<AuthorsProviderProps> = ({ children }) => {
	const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);

	const handleAddAuthor = (name: string) => {
		const newAuthor = { id: uuid.v4(), name };
		setAuthors((prev) => [...prev, newAuthor]);
	};

	const handleDeleteAuthor = (id: string) => {
		setAuthors((prev) => prev.filter((author) => author.id !== id));
	};

	const handleAddCourseAuthor = (author: Author) => {
		setCourseAuthors((prev) => [
			...prev,
			{ ...author, isCourseAuthor: true },
		]);
	};

	const handleRemoveCourseAuthor = (id: string) => {
		setCourseAuthors((prev) => prev.filter((author) => author.id !== id));
	};

	return (
		<AuthorsContext.Provider
			value={{
				authors,
				courseAuthors,
				handleAddAuthor,
				handleDeleteAuthor,
				handleAddCourseAuthor,
				handleRemoveCourseAuthor,
			}}
		>
			{children}
		</AuthorsContext.Provider>
	);
};
