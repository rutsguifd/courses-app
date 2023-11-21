import { ChangeEvent, useState } from 'react';
import useValidation, { Validations } from './useValidation';

export function useInput(initialValue: string, validations: Validations) {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setDirty] = useState();
	const valid = useValidation(value, validations);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e);
	};
}
