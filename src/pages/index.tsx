import { history } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <div onClick={()=>{
        history.push('/home');
      }}>
        home
      </div>
    </div>
  );
}
