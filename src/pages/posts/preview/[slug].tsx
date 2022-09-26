import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import Head from 'next/head';
import styles from '../post.module.scss';
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/dist/client/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface PostPreviewProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

// se a pessoa estar logada e tem uma inscrição ativa, então é melhor a mesma não ver o preview

export default function PostPreview({ post }: PostPreviewProps) {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.activeSubscription) {
            router.push(`/posts/${post.slug}`)
        }
    }, [session])

    // geralmente colocamos no array de dependencias toda e qualquer variavel que a gente utilizar dentro do useEffect

    return (
        <>
            <Head>{post.title} | Ignews </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div
                        className={`${styles.postContent} ${styles.previewContent}`}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className={styles.continueReading}>
                        Wanna content reading?
                        <Link href="/">
                            <a href="">Subscribe now 🤗</a>
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking' // true, false e 'blocking'
    }
}

// Toda página que pode ser publica pode ser estática

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    const prismic = getPrismicClient();

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: response.data.title,
        content: RichText.asHtml(response.data.content.slice(0, 3)),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    };

    return {
        props: { post },
        redirect: 60 * 30, // 30 minutos - propriedade que diz que em quanto em quanto tempo quero que esse post seja renovado/atualizado conforme o acesso dos usuários
    }
}