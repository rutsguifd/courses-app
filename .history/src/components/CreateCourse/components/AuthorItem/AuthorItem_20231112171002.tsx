import { Button } from '@/components/ui/button';
import { Author } from '@/types/course/course';

const AuthorItem = (author: Author) => {
	return (
		<div className='flex justify-between mb-2'>
			{author.name}
			<Button>Add Author</Button>
		</div>
	);
};

export default AuthorItem;
