import IMarginContainer from './interface/MarginContainer';
import styles from './container.module.scss';

export default function MarginContainer({ children }: IMarginContainer) {
	return (
		<div className={styles.container}>
			<div className={styles.container__main}>{children}</div>
		</div>
	);
}
