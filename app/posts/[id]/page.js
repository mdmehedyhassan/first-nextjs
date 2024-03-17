import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import React, { Suspense } from 'react'

export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPost(id);
    return {
        title: post.title,
        description: post.body,
    }
}

export default async function Post({ params }) {
    const { id } = params;
    // const post = await getPost(id);
    // const comments = await getPostComments(id);
    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);
    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
   const post = await postPromise;
    return (
        <div>
            <h1 className="text-green-500">{post.title}</h1>
            <p>{post.body}</p>
            <hr />
            <Suspense fallback="Loading Comments...">
                <Comments commentsPromise={commentsPromise} />
            </Suspense>

        </div>
    )
}


export async function generateStaticParams () {
    const posts = await getAllPosts();
    return posts.map(post => ({
        id: post.id.toString()
    }))
}