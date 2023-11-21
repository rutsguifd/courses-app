import { ChangeEvent, useState } from 'react';
import useValidation, { Validations } from './useValidation';

export function useInput(
	initialValue: HTMLInputElement,
	validations: Validations
) {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState();
	const valid = useValidation(value, validations);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e);
	};
}
