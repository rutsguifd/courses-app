import { useState } from 'react';
import useValidation, { Validations } from './useValidation';

export function useInput(initialValue: string, validations: Validations) {
	const [value, setValue] = useState();
	const [isDirty, setDirty] = useState();
	const valid = useValidation(validations);
}
