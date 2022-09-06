declare module 'pingpp-js' {
  interface Pingpp {
    createPayment: (charge: JSON, callback: (res: string) => void) => void;
  }
  const content: Pingpp;
  export = content;
}
