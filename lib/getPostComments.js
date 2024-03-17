export default async function getPostComments(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    if(result.status !== 200){
        throw new Error('there was an error getPost fetching')
    }
    return result.json();
}