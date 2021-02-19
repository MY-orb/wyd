import { history } from 'umi';
import styles from './index.less'
import { observer, useLocalObservable } from 'mobx-react'

const storeInitial = {
    context: 'test',
    setContext(str: string){
        this.context = str
    },
    goHome () {
        history.push('/home');
    }
}

const IndexPage = observer(()=>{
    const { goHome } = useLocalObservable(()=> storeInitial)
    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p className={styles.titleText} onClick={goHome}>王以栋</p>
                    <p className={styles.titleText}>个人简介</p>
                </div>
                <div className={styles.contentBot}>
                    <div className={styles.right}>
                        <div>部分经历</div>
                        <div>部分笔记</div>
                    </div>
                    <div className={styles.left}>
                        <div>
                            基本资料<br/>
                            性别：男
                            学历：本科
                            城市：杭州
                            博客：链接
                            GitHub： 链接
                        </div>
                        <div>
                            联系方式<br/>
                            电话：18658179701
                            邮箱：wyd_4219@163.com
                            微信：wyd_0305
                            QQ：1073930950
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default IndexPage
