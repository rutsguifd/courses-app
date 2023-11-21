import { useState } from 'react';

export function useInput(initialValue: string, validations) {
	const [value, setValue] = useState();
	const [isDirty, setDirty] = useState();
	const [valid, set];
}
