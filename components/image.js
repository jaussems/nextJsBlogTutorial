import Image from 'next/image';

export default function ImageComponent() {
    return (
        <Image
            src={require('../public/images/profile.jpeg').default} // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Jannes Aussems "
        />
    );
}
