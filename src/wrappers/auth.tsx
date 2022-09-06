// import { IRouteComponentProps } from 'umi';
// import { useEffect, useState } from 'react';
// // import { getInfo } from '@/request/User';
// // import { getWxOauthUrl, wechatLogin } from '@/request/Login';
// import { historyPush, historyReplace } from '@/utils/GrayscaleUpgrade';
// import { isWeixin } from '@/utils/UserAgentUtils';
// import { Host } from '@/config/Host';

// export default (
//   props: IRouteComponentProps<{
//     code?: string;
//     status?: string;
//     forward?: string;
//   }>,
// ) => {
//   // const code = props.location.query.code;
//   const forward =
//     props.location.query.forward ||
//     props.location.pathname + props.location.search;

//   // const [isLogin, setIsLogin] = useState<boolean>();
//   // const fetch = async () => {
//   //   try {
//   //     const res = await getInfo();
//   //     if (res?.url || res?.bind_phone === 0) {
//   //       if (isWeixin(window.navigator.userAgent)) {
//   //         historyReplace(
//   //           `${Host}/wx/login?forward=${encodeURIComponent(
//   //             forward.toString(),
//   //           )}`,
//   //         );
//   //         return;
//   //       }
//   //       setIsLogin(false);
//   //       return;
//   //     }
//   //     if (res.passport_id) {
//   //       setIsLogin(true);
//   //     }
//   //   } catch (error) {
//   //     if (isWeixin(window.navigator.userAgent)) {
//   //       historyReplace(
//   //         `${Host}/wx/login?forward=${encodeURIComponent(forward.toString())}`,
//   //       );
//   //     } else {
//   //       setIsLogin(false);
//   //     }
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetch();
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);
//   // /**
//   //  * 登录后正常渲染
//   //  */
//   // if (isLogin === true) {
//   //   return <div>{props.children}</div>;
//   // }
//   // /**
//   //  * h5 非微信登录
//   //  */
//   // if (isLogin === false) {
//   //   historyPush(
//   //     `${Host}/login?forward=${encodeURIComponent(forward.toString())}`,
//   //   );
//   // }
//   /**
//    * 异步填充
//    */
//   return null;
// };
