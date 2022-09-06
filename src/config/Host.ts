const API_ENV = process.env.UMI_ENV;

const url = {
  beta: 'https://demo.quqi.com',
  pro: 'https://quqi.com',
};

export const Host = url[API_ENV as keyof typeof url] || window.location.origin;
