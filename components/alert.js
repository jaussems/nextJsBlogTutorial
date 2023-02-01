import styles from '../styles/alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, isSuccess }) {
    return (
        <div
            className={clsx({
                [styles.success]: isSuccess,
                [styles.error]: !isSuccess,
            })}
        >
            <h2>Test</h2>
            {children}
        </div>
    );
}
