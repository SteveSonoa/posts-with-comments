import React from 'react';
import Avatar from 'boring-avatars';
import { Comment } from '../lib/types'
import './Comment.css';

interface Props extends Comment {
    i: number;
}

export const UserComment = (props: Props) => {
    const colorPallettes = [
        ["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],
        ["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"],
        ["#ecd078","#d95b43","#c02942","#542437","#53777a"],
        ["#556270","#4ecdc4","#c7f464","#ff6b6b","#c44d58"],
        ["#774f38","#e08e79","#f1d4af","#ece5ce","#c5e0dc"],
        ["#e8ddcb","#cdb380","#036564","#033649","#031634"],
        ["#490a3d","#bd1550","#e97f02","#f8ca00","#8a9b0f"]
    ];

    return (
        <div className="comment-container">
            <div className="comment-avatar">
                <Avatar
                    size={40}
                    name={props.email}
                    variant="beam"
                    colors={colorPallettes[props.i % colorPallettes.length]}
                />
            </div>
            <div className="comment-text">
                <div className="comment-title">{props.name}</div>
                <div className="comment-author">{props.email}</div>
                <div className="comment-body">{props.body}</div>
            </div>
        </div>
    )
};
