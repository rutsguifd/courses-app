export default function formatCreationTime(creationTime: string) {
	return creationTime.replaceAll('/', '.');
}
