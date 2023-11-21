export default function getCurrentDate() {
	const today = new Date();

	const day = today.getDate();
	const month = today.getMonth() + 1; // Months are zero-based
	const year = today.getFullYear();

	const formattedDay = day < 10 ? `0${day}` : day;
	const formattedMonth = month < 10 ? `0${month}` : month;

	const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

	return formattedDate;
}
