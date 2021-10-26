import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post, User } from '../lib/types';
import './BlogPost.css';

type Props = {
    post: Post | null;
}

export const BlogPost = ({ post }: Props) => {
    const [author, setAuthor] = useState<string>('Anonymous');

    const formatBody = (body: string) => body.split('\n').map((p, i) => <p key={i}>{p}</p>)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
            .then(res => res.json() as Promise<User>)
            .then(data => {
                setAuthor(data.username);
            })
            .catch(_ => setAuthor('Anonymous'));
    }, [post?.userId]);

    return post ? (
        <div className="blog-post-container">
            <h2>{post.title}</h2>
            <p className="post-author">Posted by <Link className="post-author" to={`/?author=${post.userId}`}>{author}</Link></p>
            <div className="post-body">{formatBody(post.body)}</div>
        </div>
    ) : null;
};
