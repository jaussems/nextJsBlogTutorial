import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a programmer learning NextJs atm because it looks fun, fast and efficient.</p>
        <p>
          This is a introduction example Site to get a grasp of what NextJs is about.
        </p>
      </section>
    </Layout>
  );
}