import { isBrowser } from 'umi';
const scrollDisableRequestKeys = new Set();
let documentScrollTop = 0;
let documentScrollElement: HTMLElement | null;
export const getPageScrollController = () => {
  const requestKey = Symbol();
  return {
    /**
     * 禁止页面滚动
     */
    disableScroll: () => {
      const keysCountBeforeDisabled = scrollDisableRequestKeys.size;
      scrollDisableRequestKeys.add(requestKey);

      // 如果之前没有处于禁止滚动状态，设置禁止滚动
      if (keysCountBeforeDisabled === 0) {
        // 方法1: QQ浏览器，Safari无底栏时，无法禁止滚动
        // const $body = document.body;
        // $body.style.height = '100%';
        // $body.style.overflow = 'hidden';

        // 方法2: iOS下，筛选项触发回弹时，回弹结束前无法滚动
        documentScrollElement = document.documentElement.scrollTop
          ? document.documentElement
          : document.body.scrollTop
          ? document.body
          : null;
        documentScrollTop = documentScrollElement?.scrollTop ?? 0;

        const $body = document.body;
        $body.style.position = 'fixed';
        $body.style.top = `${-documentScrollTop}px`;
      }
    },

    /**
     * 恢复页面滚动
     */
    enableScroll: () => {
      scrollDisableRequestKeys.delete(requestKey);
      const keysCountAfterEnabled = scrollDisableRequestKeys.size;

      // 如果此次恢复滚动后，没有其他禁止滚动请求，则设置页面恢复滚动
      if (keysCountAfterEnabled === 0) {
        // const $body = document.body;
        // $body.style.height = '';
        // $body.style.overflow = '';

        const $body = document.body;
        $body.style.position = '';
        $body.style.top = '';

        if (documentScrollElement) {
          documentScrollElement.scrollTop = documentScrollTop;
        }
      }
    },
  };
};

export const getURL = () => {
  if (!isBrowser()) {
    throw new Error('Calling browser utils from server side.');
  }
  return new URL(window.location.href);
};

export const getUserAgent = () => {
  if (!isBrowser()) {
    throw new Error('Calling browser utils from server side.');
  }
  return window.navigator.userAgent;
};
