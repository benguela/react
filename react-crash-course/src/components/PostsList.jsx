import Post from './Post';
import classes from './PostsLists.module.css';

function PostsLists() {
    return (
        <ul className={classes.posts}>
            <Post author="tim" body="abc"/>
            <Post author="bob" body="xyz" />            
        </ul>
    )
}

export default PostsLists