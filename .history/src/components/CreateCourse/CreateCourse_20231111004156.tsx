import { Button } from '../ui/button';
import { Input } from '../ui/input';

const CreateCourse = () => {
	return (
		<div>
			<div className='flex justify-between'>
				<Input />
				<Button>Create Course</Button>
			</div>
		</div>
	);
};

export default CreateCourse;
