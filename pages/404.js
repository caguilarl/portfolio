import Layout from "../components/Layout";
import Link from 'next/link'


const Custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1> Oops!</h1>
            <h3>
                Sorry, but this content doesn't exists...
            </h3>
            <p>
                Back to <Link href="/"><a>home</a></Link>
            </p>
            <img src="broken_link.jpg" />
        </div>
    </Layout>
)

export default Custom404;