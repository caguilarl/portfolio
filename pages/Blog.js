import Layout from "../components/Layout";
import { posts } from "../blogData";
import Link from "next/dist/client/link";


const Post = ({ post }) => {
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <div className="overflow">
                    <img src={post.imageUrl} alt="" className="card-img-top img-fluid" />
                </div>
                <div className="card-body">
                    <h1>{post.title}</h1>
                    <p>
                        {post.content}
                    </p>
                    <Link href={`/Post?title=${post.title}`} as={`/post/${post.title}`}> 
                        <button className="btn btn-light">
                            Read
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Blog = () => (
    <Layout useFooter={false} useDarkBg={true} title="My Blog">
        <div className="row">
            {
                posts.map((post, i) => (
                    <Post post={post} key={i} />
                ))
            }
        </div>
    </Layout>
)

export default Blog;