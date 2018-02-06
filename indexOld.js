import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



const PostLink = (props) => {
    return (
        <li>
            <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )

}

const Index = () => {
    return (
        <Layout>
            <h1>My Web Dev Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" title="Hello Next.Js" />
                <PostLink id="learn-nextjs" title="Learning Next.Js is cool!" />
                <PostLink id="deploy-app-zeit" title="Deploy your app with Zeit" />
            </ul>
        </Layout>
    )
}

export default Index;

