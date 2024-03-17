export default async function Comments({commentsPromise}){
    const comments = await commentsPromise;
    return (
        <div className="mt-10">
                <h1>Comments</h1>
                <ul>
                    {
                        comments.map(comment => <li
                            className='mb-3'
                            key={comment.id}>{
                            comment.body
                        }</li>)
                    }
                </ul>
            </div>
    )
}