export default const getAuthorsForCourse = (
	authorList: {id: string, name: string}[],
	courseAuthors: string[]
) => {
	return courseAuthors.map((authorId) =>
		authorList.find((author) => author.id === authorId)
	);
};
