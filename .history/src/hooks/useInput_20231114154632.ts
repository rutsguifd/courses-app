import { ChangeEvent, useState } from 'react';
import useValidation, { Validations } from './useValidation';

export function useInput(initialValue: string, validations: Validations) {
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

	return { value, isDirty, onChange, onBlur, ...valid };
}
