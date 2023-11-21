import { useState } from 'react';
import useValidation, { Validations } from './useValidation';

export function useInput(
	initialValue: HTMLInputElement,
	validations: Validations
) {
	const [value, setValue] = useState();
	const [isDirty, setDirty] = useState();
	const valid = useValidation(value, validations);

	const onChange = (e: HTMLInputElement) => {
		setValue(e);
	};
}
