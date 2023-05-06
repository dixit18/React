import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";
let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(
        "https://react-http-6112e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error...",
            message: "Errorrorrr",
          })
        );
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Send cart data successfully!",
        })
      );
      const responseData = await response.json();
    };
switch (isInitial) {
  case true:
    isInitial = false
    return ;
  
   case false:
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Errorrorrr",
        })
      );
    });

    break;

  default:
    break;
}
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }

   
  }, [cart,dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
