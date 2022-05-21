/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import avatarSvg from '../../public/images/avatar.svg';
import Image from 'next/image';
import styles from './home.module.scss';

export default function Home() {

  return (
    <>
      <Head>
        <title> Home | Ig.news </title>
      </Head>

      {/* Toda página precisa pelo menos de uma tag por volta de tudo, no caso a <main></main> */}
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <div>
          <Image
            src={avatarSvg}
            alt="Girl coding"
            width="336"
            height="521"
            layout="fixed"
          />
        </div>
      </main>
    </>
  )
}
