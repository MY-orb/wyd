import { observer, useLocalObservable } from 'mobx-react'
import styles from './index.less'
import calendar from '@/images/calendar.png'
import { CopyOutlined } from '@ant-design/icons'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import md1 from '@/md/1.md'
import md2 from '@/md/2.md'

const renderers = {
    // @ts-ignore
    code: ({language, value}) => {
        return <SyntaxHighlighter style={a11yDark} language={language} children={value} />
    }
}

const storeInitial = {
  context: '',
  setContext(str: string){
    this.context = str
  }
}

const Index = observer(() => {
  const { context, setContext } = useLocalObservable(() => storeInitial)
  return (
    <div className={styles.box}>
      <header className={styles.header}>Note</header>
      <div className={styles.content}>
        <h2>2月开发记录</h2>
          <div className={styles.lineStyle}/>
          <div className={styles.title}>
              <img className={styles.img} src={calendar}/>
              <p className={styles.calendar}>2021/02/18</p>
              <CopyOutlined className={styles.icon} />
              <p className={styles.tit}>小记</p>
          </div>
          <div className={styles.note}>
              <ReactMarkdown renderers={renderers} plugins={[gfm]} escapeHtml={false} source={md1}/>
              <ReactMarkdown renderers={renderers} plugins={[gfm]} escapeHtml={false} source={md2}/>
          </div>
      </div>
    </div>
  );
})
export default Index
