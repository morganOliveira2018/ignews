import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe.js';
import styles from './SubscribeButton.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data: session } = useSession();
    const router = useRouter();

    async function handleSubscribe() {
        if (!session) {
            signIn('github');
            return;
        }

        // se já tiver a conta ativa, quando clicar no botão de subscription now, então redireciona para page /posts
        if(session.activeSubscription){
            router.push('/posts');
            return;
        }

        try {
            const response = await api.post('/subscribe')
            const sessionId = response.data;

            const stripe = await getStripeJs()
            await stripe.redirectToCheckout(sessionId)
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}