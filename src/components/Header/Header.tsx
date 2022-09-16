import Image from 'next/image';
import logoSvg from '../../../public/images/logo.svg';
import { SignInButton } from '../SignInButton/SignInButton';
import styles from './Header.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image
                    src={logoSvg}
                    alt="Logo ignews"
                    width="110"
                    height="31"
                />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}