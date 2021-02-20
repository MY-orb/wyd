import { history } from 'umi';
import styles from './index.less'
import { observer, useLocalObservable } from 'mobx-react'
import avatar from '@/images/avatar.png'

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
                    <div>
                        <img className={styles.img} src={avatar}/>
                    </div>
                    <div>
                        <p className={styles.name}>王以栋</p>
                        <p className={styles.intro}>个人简介：积极乐观、态度端正；具有多端开发经验</p>
                    </div>
                </div>
                <div className={styles.contentBot}>
                    <div className={styles.left}>
                        <div className={styles.info}>
                            <h3>基本资料</h3>
                            <p>性别：男</p>
                            <p>学历：本科</p>
                            <p>城市：杭州</p>
                            <p className={styles.goBlog} onClick={goHome}>博客：MY-orb</p>
                            <p className={styles.goBlog}  onClick={()=>{
                                window.open('https://github.com/MY-orb')
                            }}>GitHub： MY-orb</p>
                        </div>
                        <div className={styles.phone}>
                            <h3>联系方式</h3>
                            <p>电话：18658179701</p>
                            <p>邮箱：wyd_4219@163.com</p>
                            <p>微信：wyd_0305</p>
                            <p>Q Q：1073930950</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <p className={styles.rightTitle}>工作经历-</p>
                            <p className={styles.companyName}>杭州晞格玛云网络科技有限责任公司 前端工程师 2019/09 - 至今</p>
                            <p className={styles.workCon}>工作内容：</p>
                            <p>协助搭建项目框架，为项目提供开发环境</p>
                            <p>维护公司多个私有库，为业务需求提供技术支持</p>
                            <p>与后端协作，高效完成产品需求</p>
                            <p>需求评审、与产品人员调研三方产品</p>
                            <p>为web端项目编写技术手册，定期组织召开CodeReview</p>

                            <p className={styles.companyName}>杭州维甄科技有限公司 web前端 2018/11 - 2019/09</p>
                            <p className={styles.workCon}>工作内容：</p>
                            <p>协助主程搭建项目框架，为项目提供开发环境</p>
                            <p>与后端协作，高效完成产品的数据交互、动态信息展示</p>
                            <p>为北京通州、青海德令哈农安信用建设提供大数据屏的技术支持</p>
                            <p>为web端项目编写技术手册</p>

                            <p className={styles.companyName}>武汉魅客科技有限公司 web前端 2017/09 - 2018/11</p>
                            <p className={styles.workCon}>工作内容：</p>
                            <p>主要负责前端的App的开发工作；</p>
                            <p>与后台工程师协作，高效完成产品的数据交互、动态信息展示；</p>
                            <p>通过一些前端技术手段，提高用户体验并满足性能要求；</p>
                            <p>后台管理项目搭建与开发</p>
                        </div>
                        <div style={{marginTop:10}}>
                            <p className={styles.rightTitle}>项目经历-</p>
                            <p className={styles.companyName}>国际私塾学府公众号H5 2020/11 - 至今</p>
                            <p>项目介绍：国际私塾学府公众号H5是专为在校区上课的学员及家长打造的H5平台，家长可以及时了解学员的上课进度。课后学员可以通过平台观看讲义，并及时给出课程评价。</p>
                            <p>负责内容：</p>
                            <p>参与技术选型工作</p>
                            <p>负责商城订单的设计与主要开发</p>
                            <p>负责学员课程的设计与开发</p>
                            <p>开发自定义组件，维护项目公共组件</p>
                            <p className={styles.highLight}>技术栈： React/ TypeScript/ Taro/ MobX/ Scss</p>

                            <p className={styles.companyName}>私塾云协同 2020/11 - 至今</p>
                            <p>项目介绍：晞格玛·云是专为教育行业打造的员工协同APP端平台，配合晞格玛·云移动端使用，赋能教育，提高员工工作效率，打通企业内部信息流，为校区运营提供全方位解决方案。</p>
                            <p>负责内容：</p>
                            <p>负责审批功能设计与开发</p>
                            <p>负责自定义表单的设计与开发</p>
                            <p>负责外呼三方sdk对接</p>
                            <p>开发自定义组件，维护项目公共组件</p>
                            <p>制定团队RN开发UI规范</p>
                            <p className={styles.highLight}>技术栈： React Native/ TypeScript/ Antd/ MobX</p>

                            <p className={styles.companyName}>晞格玛·云 2019/09 - 至今</p>
                            <p>项目介绍：晞格玛·云是专为教育行业打造的员工协同PC端平台，配合晞格玛·云移动端使用，赋能教育，提高员工工作效率，打通企业内部信息流，为校区运营提供全方位解决方案。</p>
                            <p>负责内容：</p>
                            <p>负责自定义审批的设计与主要开发，维护PC、移动端共用的控件库</p>
                            <p>负责图形报表与数据报表的主要开发，维护PC、移动端共用的图表库</p>
                            <p>负责考勤统计的设计与开发</p>
                            <p>负责外呼功能，与第三方对接</p>
                            <p>协助主管完成云盘功能的开发</p>
                            <p>开维护项目公共组件，如弹窗、人员选择器、筛选组件等</p>
                            <p className={styles.highLight}>技术栈： Vue/ Electron/ Element/ ECharts/ Scss</p>

                            {/*<p className={styles.companyName}>农业执法 Hybrid APP 2019/05 - 2019/09</p>*/}
                            {/*<p>项目介绍：维甄科技为农村县/市执法团队打造的纠察执法APP；该系统为执法团队执法纠察提供信息服务保障；帮助政府团队高效率的记录分析企业的行为</p>*/}
                            {/*<p>负责内容：</p>*/}
                            {/*<p>负责项目框架选型并且搭建</p>*/}
                            {/*<p>负责打卡位置解析展示</p>*/}
                            {/*<p>负责表单信息录入功能的设计与开发</p>*/}
                            {/*<p>负责上传图片功能设计与开发</p>*/}
                            {/*<p>开发自定义组件，维护项目公共组件</p>*/}
                            {/*<p>技术栈： React/ Antd/ Scss</p>*/}

                            <p className={styles.companyName}>农安信用 2018/11 - 2019/09</p>
                            <p>项目介绍：维甄科技为农村县/市打造的企业信用评估后台管理系统；该系统通过导入相关企业的信用档案，从而算出对应企业的信用分，为政府提供信用一体化、信用可视化服务；并且生成对应县/市信用大屏数据动态图表展示</p>
                            <p>负责内容：</p>
                            <p>负责项目框架选型并且搭建</p>
                            <p>负责系统二期升级</p>
                            <p>负责Excel数据导入并在系统中展示对应数据</p>
                            <p>负责鉴权功能设计与开发</p>
                            <p>负责上传图片、图片裁剪功能设计与开发</p>
                            <p>负责动态图表功能的设计与开发</p>
                            <p>开发自定义组件，维护项目公共组件</p>
                            <p className={styles.highLight}>技术栈： React/ Antd/ ECharts/ Scss</p>

                            <p className={styles.companyName}>华晨宝马后台管理 2018/04 - 2019/11</p>
                            <p>项目介绍：魅客科技为华晨宝马打造的后台管理服务系统</p>
                            <p>负责内容：</p>
                            <p>负责项目框架选型并且搭建</p>
                            <p>负责Excel数据导入并在系统中展示对应数据</p>
                            <p>负责鉴权功能设计与开发</p>
                            <p>负责自定义表单功能的设计与开发</p>
                            <p>开发自定义组件，维护项目公共组件</p>
                            <p className={styles.highLight}>技术栈： React/ Antd/ ECharts/ Scss</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default IndexPage
