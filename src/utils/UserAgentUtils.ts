export function isMobile(ua: string) {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Windows Mobile/i.test(
    ua,
  );
}

export function isMac(ua: string) {
  return /macintosh|mac os x/i.test(ua);
}

export function isIos(ua: string) {
  return /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua);
}

export function isAndroid(ua: string) {
  return ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1;
}

export function isWeixin(ua: string) {
  return /MicroMessenger/i.test(ua);
}

// 判断是否是百度小程序
export function isBaiduSwan(ua: string) {
  return /\bswan\//i.test(ua);
}
// 判断是否是百度app
export function isBaiduApp(ua: string) {
  return /\bbaiduboxapp\//i.test(ua);
}

// 判断是否是招商银行APP
export function isMPBankApp(ua: string) {
  return /\bMPBank\//i.test(ua);
}

// 判断是否是微信 app
export function isWeChatApp(ua: string) {
  return /micromessenger\//i.test(ua);
}

export function isApp(ua: string) {
  return ua.indexOf('quqiapp') !== -1;
}

// quqiapp
