export default function getCourseDuration(time: number) {
	const hours = Math.floor(time / 60);
	const minutes = time % 60;
	return time > 60
		? (hours < 10 ? '0' + hours : hours) +
				':' +
				minutes.toPrecision(2) +
				(hours === 1 ? ' hour' : ' hours')
		: time + ' minutes';
}
