const AuthorItem: FC<AuthorItemProps> = ({
	author,
	courseList,
	onAddAuthor,
	onDeleteAuthor,
}) => {
	const [isAdded, setIsAdded] = useState(false);

	const handleAddAuthorClick = () => {
		setIsAdded(true);
		onAddAuthor({ ...author, isCourseAuthor: true });
	};

	const handleDeleteAuthorClick = () => {
		setIsAdded(false);
		onDeleteAuthor({ ...author, isCourseAuthor: false });
	};

	return (
		<div className='flex justify-between mb-2'>
			{author.name}
			{courseList ? (
				<Button onClick={handleDeleteAuthorClick}>Delete Author</Button>
			) : (
				<Button onClick={handleAddAuthorClick}>
					{isAdded ? 'Added' : 'Add Author'}
				</Button>
			)}
		</div>
	);
};
