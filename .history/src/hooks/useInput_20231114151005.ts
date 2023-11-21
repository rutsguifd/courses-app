import { useState } from 'react';
import { Validations } from './useValidation';

export function useInput(initialValue: string, validations: Validations) {
	const [value, setValue] = useState();
	const [isDirty, setDirty] = useState();
	const 
}
