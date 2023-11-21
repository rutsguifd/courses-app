const AuthorItem = () => {
	return (
		<div className='flex justify-between mb-2' key={author.id}>
			{author.name}
			<Button>Add Author</Button>
		</div>
	);
};

export default AuthorItem;
