import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../lib/types';
import './ListItem.css';

export const ListItem = (props: Post) => (
    <div className="list-item">
        <Link to={`/${props.id}`}>
            
            <h2>{props.title}</h2>
            <div className="description-text">
            <p>{props.body.split('\n')[0]}</p>
            <p className="read-more">Read More</p>
            </div>
        </Link>
    </div>
);
