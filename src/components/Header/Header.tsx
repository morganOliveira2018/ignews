import Image from 'next/image';
import logoSvg from '../../../public/images/logo.svg';
import { SignInButton } from '../SignInButton/SignInButton';
import styles from './Header.module.scss';

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
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}