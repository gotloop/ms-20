import { Keyboard } from './components/keyboard'
import styles from './app.module.css';
export function App() {
  return (
    <>
      <div className={styles.mainLayout}>
        <Keyboard></Keyboard>
      </div>
    </>
  )
}
