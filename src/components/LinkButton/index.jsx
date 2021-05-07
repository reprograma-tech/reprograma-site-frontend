import styles from './styles.module.scss';

export function LinkButton({variant, label, to}){
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={to}>{label}</a>
  )
}