export default function getCourseDuration(time: number) {
	const hours = Math.floor(time / 60);
	const minutes = time % 60;
    const result = hours<10? "0"
}
