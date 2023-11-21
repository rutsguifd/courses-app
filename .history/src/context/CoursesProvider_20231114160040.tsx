import { mockedCoursesList } from '@/constants';
import { Course } from '@/types/course/course';
import { createContext, useContext, useState, ReactNode, FC } from 'react';
import * as uuid from 'uuid';

interface CoursesContextProps {
	Courses: Course[];
	handleAddAuthor: (name: string) => void;
	handleDeleteAuthor: (id: string) => void;
}

const CoursesContext = createContext<CoursesContextProps | undefined>(
	undefined
);

export const useCoursesContext = (): CoursesContextProps => {
	const context = useContext(CoursesContext);
	if (!context) {
		throw new Error(
			'useCoursesContext must be used within an CoursesProvider'
		);
	}
	return context;
};

interface CoursesProviderProps {
	children: ReactNode;
}
export const CoursesProvider: FC<CoursesProviderProps> = ({ children }) => {
	const [Courses, setCourses] = useState<Course[]>(mockedCoursesList);

	const handleAddAuthor = (name: string) => {
		setCourses((prev) => [...prev, { id: uuid.v4(), name }]);
	};

	const handleDeleteAuthor = (id: string) => {
		setCourses((prev) => prev.filter((author) => author.id !== id));
	};

	return (
		<CoursesContext.Provider
			value={{ Courses, handleAddAuthor, handleDeleteAuthor }}
		>
			{children}
		</CoursesContext.Provider>
	);
};
