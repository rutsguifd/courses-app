import { Button } from '@/components/ui/button';
import { Author } from '@/types/course/course';
import { FC, useState } from 'react';

interface AuthorItemProps {
	author: Author;
	courseList: boolean;
	onAddAuthor: (author: Author) => void;
	onDeleteAuthor: (author: Author) => void;
}

const AuthorItem: FC<AuthorItemProps> = ({
	author,
	courseList,
	onAddAuthor,
	onDeleteAuthor,
}) => {
	const [isAdded, setIsAdded] = useState(false);

	const handleAddAuthorClick = () => {
		setIsAdded(true);
		onAddAuthor(author);
	};

	const handleDeleteAuthorClick = () => {
		setIsAdded(false);
		onDeleteAuthor(author);
	};

	return (
		<div className='flex justify-between mb-2'>
			{author.name}
			{courseList ? (
				<Button type='button' onClick={handleDeleteAuthorClick}>
					Delete Author
				</Button>
			) : (
				<Button type='button' onClick={handleAddAuthorClick}>
					Add Author
				</Button>
			)}
		</div>
	);
};

export default AuthorItem;
