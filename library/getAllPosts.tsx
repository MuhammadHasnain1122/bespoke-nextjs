
export default async function getAllPost() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) throw new Error('Did not get the posts.')

  return res.json();
}
