import { history } from 'umi';
import styles from './index.less'
import { observer, useLocalObservable } from 'mobx-react'

const storeInitial = {
    context: 'test',
    setContext(str: string){
        this.context = str
    }
}

const goHome = () => {
    history.push('/home');
}

export default function IndexPage() {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
          <div onClick={goHome} className={styles.title}>王以栋</div>
          <div className={styles.contentBot}>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
          </div>

      </div>
    </div>
  );
}
