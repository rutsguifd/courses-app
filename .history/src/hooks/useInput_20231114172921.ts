import { ChangeEvent, useState } from 'react';
import useValidation, { Validations } from './useValidation';

export default function useInput(
	initialValue: string,
	validations: Validations
) {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState(false);
	const valid = useValidation(value, validations);

	const onChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValue(e.target.value);
	};

	const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setDirty(true);
	};

	const clearInput = () => {
		setValue('');
	};

	return { value, isDirty, onChange, onBlur, clearnput, ...valid };
}
