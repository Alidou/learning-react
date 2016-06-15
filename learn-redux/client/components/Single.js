import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { postId } = this.props.params;
        const { posts, comments } = this.props;
        const index = this.props.posts.findIndex((post => post.code === postId));
        const post = posts[index];
        const postComments = comments[postId] || [];
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
});

export default Single;