import { Button } from '@/components/ui/button';
import { Author } from '@/types/course/course';
import { FC } from 'react';

interface AuthorItemProps {
	author: Author;
}

const AuthorItem: FC<AuthorItemProps> = ({ author }) => {
	return (
		<div className='flex justify-between mb-2'>
			{author.name}
			<Button>Add Author</Button>
		</div>
	);
};

export default AuthorItem;
