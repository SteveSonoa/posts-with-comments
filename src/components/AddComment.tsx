import React, { useState } from 'react';
import { Comment } from '../lib/types';
import './AddComment.css';

type Props = {
    addNewComment: (newComment: Comment) => void;
    postId: number;
};

export const AddComment = ({ addNewComment, postId }: Props) => {
    const [commentName, setCommentName] = useState('');
    const [commentBody, setCommentBody] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        switch(e.target.name) {
            case 'name':
                setCommentName(e.target.value);
                break;
            case 'body':
                setCommentBody(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
        }
    }

    const handleSubmit = () => {
        setIsLoading(true);
        setError(null);

        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId,
                email,
                name: commentName,
                body: commentBody
            })
        }).then(res => res.json()).then(_ => {
            addNewComment({
                postId,
                email,
                name: commentName,
                body: commentBody,
                id: Math.ceil(Math.random() * 999999)
            });
        }).then(() => {
            setCommentName('');
            setCommentBody('');
        }).catch(setError).finally(() => setIsLoading(false));

    }

    return (
        <div className="add-comment-container">
            <h3>Add A Comment</h3>
            <input aria-label="email" disabled={isLoading} name="email" value={email} placeholder="Email" onChange={handleChange} />
            <input aria-label="name" disabled={isLoading} name="name" value={commentName} placeholder="Comment Title" onChange={handleChange} />
            <textarea aria-label="body" disabled={isLoading} name="body" value={commentBody} onChange={handleChange} placeholder="Type your comment here" />
            <button aria-label="submit" disabled={isLoading || !email || !commentName || !commentBody} onClick={handleSubmit}>Add Comment</button>
            {error && <p className="error-message">Unable to post your comment. Please try again later.</p>}
        </div>
    );
};
