/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import avatarSvg from '../../public/images/avatar.svg';
import Image from 'next/image';
import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton/SubscribeButton';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
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

export async function getServerSideProps() {
  const price = await stripe.prices.retrieve('price_1L2HAiGvBYr5aZm3uuCVvJre');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product
    }
  }
}
