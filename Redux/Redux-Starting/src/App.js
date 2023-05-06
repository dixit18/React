import { isJSDocOverloadTag } from 'typescript';
import Counter from './components/Counter';
import { Fragment,useEffect } from 'react';
import Header from './components/Header';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';



function App() {
const isAuth = useSelector(state => state.auth.isAuthenticated )
const cart = useSelector(state =>state.cart)

// useEffect(()=>{
//   try{
// console.log("before")
//     fetch('https://react-http-6112e-default-rtdb.firebaseio.com/cart.json',{
//       method:'put',
//       body:JSON.stringify(cart)
//     })
//     console.log("after")
//   }catch(err){
//     console.log(err,"error")
//   }
// },[cart])

  return (
    <Fragment>
      <Header />
     {!isAuth && <Auth/>}
     {isAuth && <UserProfile/>}
    <Counter />
    </Fragment>
  );
}

export default App;
