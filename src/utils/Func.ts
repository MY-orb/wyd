import moment from 'moment';
// import appStore from '@/store/appStore';

/**
 * 多行文本框正则，首尾空格去除
 * @param str
 */
export const regSpaceWrap = (str: string) =>
  str ? str.replace(/(^\s*)|(\s*$)/g, '') : '';

export function passThrough<T>(value: T): T {
  return value;
}

export function getEmptyObject() {
  return {} as const;
}

/**
 * 获取文件大小保留2位小数
 * @param size
 * @returns
 */
export function getFileSize(size?: number) {
  if (!size) {
    return '0B';
  }
  const num = 1024;
  const power = (area: number) => Math.pow(num, area);
  const kb = +((size / num) * 100).toFixed(0) / 100;
  const mb = +((size / power(2)) * 100).toFixed(0) / 100;
  const gb = +((size / power(3)) * 100).toFixed(0) / 100;
  const tb = +((size / power(4)) * 100).toFixed(0) / 100;
  if (size < num) return `${size}B`;
  if (size < power(2)) return `${kb}K`; //kb
  if (size < power(3)) return `${mb}M`; //M
  if (size < power(4)) return `${gb}G`; //G
  return `${tb}T`; //T
}

export function getTimes(time: number, format?: string) {
  const formats = format || 'YYYY-MM-DD';
  if (time === -1) {
    return '永久有效';
  }
  return moment(time * 1000).format(formats);
}
/**
 * document.cookie 支持度不是100%
 * 具体使用请提前沟通
 */
export function getCookie(key: string) {
  const cookies = document.cookie;
  const arry = cookies.split('; ');
  for (const item of arry) {
    const new_arry = item.split('=');
    if (new_arry[0] == key) {
      return new_arry[1];
    }
  }
}

export function trackSendPv() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { aplus_queue } = window;

  // aplus_queue.push({
  //   action: 'aplus.setMetaInfo',
  //   arguments: ['_user_id', appStore.userId],
  // });

  aplus_queue.push({
    action: 'aplus.sendPV',
    arguments: [{ is_auto: false }],
  });
}

export function trackClk(id: string, params?: any) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { aplus_queue } = window;
  aplus_queue.push({
    action: 'aplus.record',
    arguments: [id, 'CLK', params],
  });
}

const ClientTypeStrng = {
  DING_APP_CLIENT: 'DingTalk',
  WECHAT_APP_CLIENT: 'MicroMessenger',
  QUQI_DISK_APP_CLIENT: 'quqiapp',
  QUQI_OFFICE_APP_CLIENT: 'quqibg',
  WECHAT_MINI_PROGRAM: 'miniprogram',
  SDK_PROXY_SERVER: 'SdkProxyServer',
  SDK_PROXY_CLIENT: 'SdkProxyClient',
  IPHONE_BROWSER_CLIENT: 'iPhone',
  ANDROID_BROWSER_CLIENT: 'Android',
  QUQI_TASK_MOBILE_CLIENT: 'quqitaskmobile',
  QUQI_TASK_APP_CLIENT: 'quqitaskapp',
  PC_CLIENT: 'Pc',
};

export function getClientType() {
  const userAgent = window.navigator.userAgent;
  const CLIENT_TYPE_STRING = ClientTypeStrng;
  if (userAgent.indexOf('DingTalk') >= 0) {
    return CLIENT_TYPE_STRING.DING_APP_CLIENT;
  }
  if (userAgent.indexOf('MicroMessenger') >= 0) {
    return CLIENT_TYPE_STRING.WECHAT_APP_CLIENT;
  }
  if (userAgent.indexOf('quqiapp') >= 0) {
    return CLIENT_TYPE_STRING.QUQI_DISK_APP_CLIENT;
  }
  if (userAgent.indexOf('quqibg') >= 0) {
    return CLIENT_TYPE_STRING.QUQI_OFFICE_APP_CLIENT;
  }
  if (userAgent.indexOf('miniprogram') >= 0) {
    return CLIENT_TYPE_STRING.WECHAT_MINI_PROGRAM;
  }
  if (userAgent.indexOf('SdkProxyServer') >= 0) {
    return CLIENT_TYPE_STRING.SDK_PROXY_SERVER;
  }
  if (userAgent.indexOf('SdkProxyClient') >= 0) {
    return CLIENT_TYPE_STRING.SDK_PROXY_CLIENT;
  }
  if (userAgent.indexOf('iPhone') >= 0) {
    return CLIENT_TYPE_STRING.IPHONE_BROWSER_CLIENT;
  }
  if (userAgent.indexOf('Android') >= 0) {
    return CLIENT_TYPE_STRING.ANDROID_BROWSER_CLIENT;
  }
  if (userAgent.indexOf('quqitaskmobile') >= 0) {
    return CLIENT_TYPE_STRING.QUQI_TASK_MOBILE_CLIENT;
  }
  if (userAgent.indexOf('quqitaskapp') >= 0) {
    return CLIENT_TYPE_STRING.QUQI_TASK_APP_CLIENT;
  }
  return CLIENT_TYPE_STRING.PC_CLIENT;
}
