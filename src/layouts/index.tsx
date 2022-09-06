import { observer } from 'mobx-react';
import { PropsWithChildren } from 'react';
import styles from './index.less';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
const IndexLayout = observer(
  (props: PropsWithChildren<Props>): JSX.Element => (
    <div className={styles.container}>
      <div className={styles.menu}>nav</div>
      <div className={styles.setion}>
        <div className={styles.header}>header</div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  ),
);
export default IndexLayout;
