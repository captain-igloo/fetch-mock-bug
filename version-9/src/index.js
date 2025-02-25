export async function makeRequest() {
	const res = await fetch('http://example.com/my-url');
	return res.json();
}
