import { useEffect, useState } from 'react';

export interface Validations {
	isEmpty: boolean;
	minLength: number;
}

export default function useValidation(value: string, validations: Validations) {
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
	const [inputValid, setInputValid] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation]
						? setMinLengthError(true)
						: setMinLengthError(false);
					break;
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true);
					break;
			}
		}
	}, [value]);

	useEffect(() => {
		if (isEmpty || minLengthError) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}
	}, [isEmpty, minLengthError]);

	useEffect(() => {
		if (minLengthError && !isEmpty) {
			setErrorMessage(`Min Length Is ${validations.minLength}`);
		} else {
			setErrorMessage('');
		}
	}, [minLengthError, isEmpty]);

	return { isEmpty, minLengthError, inputValid, errorMessage };
}
