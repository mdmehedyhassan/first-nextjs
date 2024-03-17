export default async function getAllPosts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',
        {
            // cache: "force-cache" // usually it does
            // cache: 'no-store'  // if you never want to cache try this one
            next: {
                revalidate: 20 // it's will update every 20 seconds 
            }
        }
    );

    return result.json();
}