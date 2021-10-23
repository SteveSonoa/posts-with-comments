import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Post } from '../../lib/types';
import { ErrorMessage, ListItem, LoadingSpinner, NotFound } from '../../components';
import './List.css';

export const ListPage = () => {
    const location = useLocation();

    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [searchText, setSearchText] = useState('');

    const getPosts = () => {
        setIsLoading(true);
        setError(null);

        let url = 'https://jsonplaceholder.typicode.com/posts/';

        if (location.search) {
            const authorId = location.search.split('author=')[1].split('&')[0];
            if (/^[0-9]+$/.test(authorId)) {
                url = `https://jsonplaceholder.typicode.com/posts?userId=${authorId}`
            }
        }

        fetch(url)
            .then(res => res.json() as Promise<Post[]>)
            .then(data => {
                setPosts(data);
                setFilteredPosts(data);
            })
            .catch((e: Error) => setError(e))
            .finally(() => setIsLoading(false));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setFilteredPosts(posts.filter(post => !e.target.value || post.body.includes(e.target.value) || post.title.includes(e.target.value)))
    }

    useEffect(() => {
        getPosts();
    }, [location.search]);

    return (
        <div className="list-page">
            <input value={searchText} onChange={handleChange} placeholder="Search posts..." />
            {isLoading ? <LoadingSpinner /> : error ? <ErrorMessage {...error} /> :
                <div className="list-item-container">
                    {filteredPosts.length ? filteredPosts.map(post => (
                        <ListItem {...post} key={post.id} />
                    )) : <NotFound />}
                </div>
            }
        </div>
    );
};

ListPage.DisplayName = "ListPage";
