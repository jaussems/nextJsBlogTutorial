import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import ImageComponent from '../../components/image';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <ImageComponent></ImageComponent>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}