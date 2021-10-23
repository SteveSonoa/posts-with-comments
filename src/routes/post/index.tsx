import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Comment, Post } from '../../lib/types';
import { BlogPost, UserComment, ErrorMessage, LoadingSpinner, AddComment, NotFound } from '../../components';

export const PostPage = () => {
    interface MatchParams {
        postId: string;
    }

    const match = useRouteMatch<MatchParams>();
    const [post, setPost] = useState<Post | null>(null);
    const [isPostLoading, setIsPostLoading] = useState(true);
    const [postError, setPostError] = useState<Error | null>(null);

    const [comments, setComments] = useState<Comment[]>([]);
    const [isCommentsLoading, setIsCommentsLoading] = useState(true);
    const [commentsError, setCommentsError] = useState<Error | null>(null);

    const getPosts = () => {
        setIsPostLoading(true);
        setPostError(null);

        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.postId}`)
            .then(res => res.json() as Promise<Post>)
            .then(data => {
                setPost(data);
            })
            .catch((e: Error) => setPostError(e))
            .finally(() => setIsPostLoading(false));
    }

    const getComments = () => {
        setIsCommentsLoading(true);
        setCommentsError(null);

        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.postId}/comments`)
            .then(res => res.json() as Promise<Comment[]>)
            .then(data => {
                setComments(data);
            })
            .catch((e: Error) => setCommentsError(e))
            .finally(() => setIsCommentsLoading(false));    }

    const addNewComment = (newComment: Comment) => {
        setComments([...comments, newComment])
    };

    useEffect(() => {
        getPosts();
        getComments();
    }, []);

    return (
        <div>
            <Link to="/">Back</Link>
            <div>
                {isPostLoading ? <LoadingSpinner /> : postError ? <ErrorMessage {...postError} /> : post && Object.keys(post).length ? <BlogPost post={post} /> : <NotFound />}
            </div>
            {(isCommentsLoading || isPostLoading || (post && Object.keys(post).length > 0)) && <div>
                <h3>Comments</h3>
                {isCommentsLoading ? <LoadingSpinner /> : commentsError ? <ErrorMessage {...commentsError} /> : (
                    comments.map((comment, i) => (
                        <UserComment key={comment.id} {...comment} i={i} />
                    ))
                )}
                {isPostLoading ? null : <AddComment postId={parseInt(match.params.postId)} addNewComment={addNewComment} />}
            </div>}
        </div>
    );
};

PostPage.DisplayName = "PostPage";
