import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsLists.module.css';

function PostsLists() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="tim" body="abc"/>
                <Post author="bob" body="xyz" />            
            </ul>
        </>
    )
}

export default PostsLists