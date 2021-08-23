import Layout from "../components/Layout";
import { useRouter } from "next/dist/client/router";
import { posts } from "../blogData";

const Post = () =>{

    const router = useRouter();
    console.log(router.query.title);

    const currentPost = posts.filter(post => post.title === router.query.title)[0];

    return(
    <Layout title useFooter={false} title={currentPost.title}>
        <div className="text-center">
        <img src={currentPost.imageUrl} className="img-fluid" style={{width:'70%', height:'auto'}}/>
        </div>
        
        <p>
            {currentPost.content}
        </p>
    </Layout>
    );
}

export default Post;