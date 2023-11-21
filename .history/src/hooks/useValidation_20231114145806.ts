import { useState } from 'react';

export default function useValidation() {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
}
