import {useParams} from 'react-router';
import {posts} from '../data';
import NotFound from './NotFound';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export const FullPost = () => {
  const {id} = useParams();
  const post = posts.find((post) => post.id === +id);

  if (!post) return <NotFound />;
  return (
    <div className="full-post">
      <h1>Статья №{post.title}</h1>
      <img src={post.imageUrl} alt="Article" />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};

export default FullPost;
