export default function formatCreationTime(creationDate: string) {
	return creationDate.replaceAll('/', '.');
}
