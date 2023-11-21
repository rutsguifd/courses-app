import { mockedCoursesList } from '@/constants';
import { Course } from '@/types/course/course';
import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface CoursesContextProps {
	courses: Course[];
	handleAddCourse: (course: Course) => void;
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

	const handleAddAuthor = (course: Course) => {
		setCourses((prev) => [...prev, course]);
	};

	return (
		<CoursesContext.Provider value={{ Courses, handleAddAuthor }}>
			{children}
		</CoursesContext.Provider>
	);
};
