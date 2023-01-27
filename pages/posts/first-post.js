import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import ImageComponent from '../../components/image';
import Alert from '../../components/alert';
import { useState } from 'react';





export default function FirstPost() {
    const [toggleType, setToggleType] = useState(false);

    function toggleShowAlert() {
        setToggleType(!toggleType);
    }


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
            <button onClick={() => {
                toggleShowAlert()
            }}>Toggle Alert</button>

            <Alert type={toggleType ? 'success' : 'error'}></Alert>
        </Layout>
    );
}