import styles from '../styles/alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            <h2>Test</h2>
            {children}
        </div>
    );
}
