export default function getCurrentDate() {
	const today = new Date();

	// Get the day, month, and year components
	const day = today.getDate();
	const month = today.getMonth() + 1; // Months are zero-based
	const year = today.getFullYear();

	// Pad single-digit day and month with a leading zero if needed
	const formattedDay = day < 10 ? `0${day}` : day;
	const formattedMonth = month < 10 ? `0${month}` : month;

	// Assemble the date string in "dd/mm/yyyy" format
	const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

	return formattedDate;
}
