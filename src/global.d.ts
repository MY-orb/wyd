/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-var */

import React from 'react';
import { RouteConfig } from 'react-router-config';

export {};
declare global {
  const MEIQIA_ENT_ID: string;
  const UNIVERSAL_LINK: string;
  const WX_OPEN_APPID: string;
  const WX_MP_APPID: string;
  const BOC_MERCHANT_ID: string;
  const BOC_MRECHANT_NO: string;
  var __ROUTES__: RouteConfig[];

  interface Window {
    _MEIQIA: ((...args: string[]) => void) & { a?: string[][] };
    invokeWebFunction?: (payload: any) => void;
    app?: {
      appFuncCall: (str: string) => void;
    };
    webkit?: {
      messageHandlers: {
        appFuncCall: { postMessage: (payload: any) => void };
      };
    };
    VConsole?: typeof VConsole.VConsole;
    vConsole?: VConsole.VConsole;
  }

  namespace JSX {
    interface IntrinsicElements {
      'wx-open-launch-app': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          appid: string;
          extinfo?: string;
        },
        HTMLElement
      >;
    }
  }
}

declare namespace VConsole {
  class VConsole {
    constructor(options?: VConsoleOptions);

    public version: string;
    public isInited: string;
    public option: VConsoleOptions;
    public setSwitchPosition(x: number, y: number): void;
    public triggerEvent(eventName: string, param?: unknown): void;
    public show(): void;
    public hide(): void;
    public showSwitch(): void;
    public hideSwitch(): void;
    public setOption(obj: VConsoleOptions): void;
    public setOption(key: string, value: unknown): void;
    public destroy(): void;
  }
  interface VConsoleOptions {
    target?: string | HTMLElement;
    defaultPlugins?: ('system' | 'network' | 'element' | 'storage')[];
    maxLogNumber?: number;
    maxNetworkNumber?: number;
    theme?: '' | 'dark' | 'light';
    disableLogScrolling?: boolean;
    onReady?: () => void;
    onClearLog?: () => void;
  }
}
