import { useEffect, useState } from 'react';

export default function useValidation(value: string, validations) {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
		}
	}, [value]);
}
