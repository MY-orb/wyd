import { observer, useLocalObservable } from 'mobx-react'

const storeInitial = {
  context: 'test',
  setContext(str: string){
    this.context = str
  }
}

const Index = observer(() => {
  const { context, setContext } = useLocalObservable(() => storeInitial)
  return (
    <div onClick={()=>{setContext('click')}}>{context}</div>
  );
})
export default Index
