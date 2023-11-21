export default function formatCreationTime(creationTime: string): string {
	return creationTime.replaceAll('/', '.');
}
