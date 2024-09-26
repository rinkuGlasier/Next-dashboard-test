// pages/post/[id].js
import { useRouter } from 'next/router';
import { blogPosts } from '@/app/appTwo/Common/lib/data';
import Image from 'next/image';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the post based on the ID
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Image src={post.img} width={300} height={300} alt="blog" />
      <h2>{post.heading}</h2>
      <p>{post.discription} </p>
      <p> {post.date} </p>
    </div>
  );
};

export default Post;
