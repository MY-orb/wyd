const API_ENV = process.env.UMI_ENV;

const APP_ID = {
  beta: 1000,
  pro: 1003,
};

export const WechatAppId = APP_ID[API_ENV as keyof typeof APP_ID] || 1000;
