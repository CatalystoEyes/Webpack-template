import styles from "./App.module.scss"
import reactIcon from '../../assets/react.png'
import typescriptIcon from '../../assets/typescript.png'
import webpackIcon from '../../assets/webpack.png'

export const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.main_text}>Webpack template</h1>
      <div className={styles.images}>
        <img src={reactIcon} alt="react" />
        <img src={typescriptIcon} alt="typescript" />
        <img src={webpackIcon} alt="webpack" />
      </div>
    </div>
  );
};
