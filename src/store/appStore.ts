import { makeAutoObservable } from 'mobx';
import SessionStorage from '@/utils/SessionStorage';
import LocalStorage from '@/utils/Storage';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }
  /**
   * 用户id == passport_id
   */
  userId = LocalStorage.get('userId', '');
  setUserId(str: string) {
    this.userId = str;
    LocalStorage.set('userId', str);
  }
  /**
   * 登录token == session_key
   */
  token = LocalStorage.get('token', '');
  setToken(str: string) {
    this.token = str;
    LocalStorage.set('token', str);
  }
  /**
   * 下载引导页控制
   */
  appGuide = SessionStorage.get('app_guide', true);
  setAppGuide(bol: boolean) {
    this.appGuide = bol;
    SessionStorage.set('app_guide', bol);
  }
  /**
   * 列表排列模式
   */
  listMode = LocalStorage.get('list_mode', true);
  setListMode(bol: boolean) {
    this.listMode = bol;
    LocalStorage.set('list_mode', bol);
  }
  /**
   * 列表排列模式
   */
  orderType = LocalStorage.get('order_type', 0);
  setOrderType(num: number) {
    this.orderType = num;
    LocalStorage.set('order_type', num);
  }
}

const appStore = new AppStore();

export default appStore;
