import styles from "./Button.module.css"

function Button({text}) {
  // css를 모듈화해서 사용
  return <button className={styles.btn}>{text}</button>
}

export default Button;