import Link from 'next/link';
import ImageComponent from '../../components/image';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <ImageComponent></ImageComponent>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}