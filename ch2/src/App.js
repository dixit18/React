import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Aboute from "./component/Aboute";
import Content from "./component/Content";
import Layout from "./component/Layout";

import Post from "./component/Post";
import PostLayout from "./component/PostLayout";
import PostDetail from "./component/PostDetail";
function App() {
  let isLoggedIn = true;
  let data = {
    st: "user not logged in",
  };
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="about" element={<Aboute/>}/>
            <Route path="contact" element={<Content/>}/>
            <Route path="post" element={<PostLayout/>}>
              <Route path=":category" element={<PostDetail/>}/>
              <Route index element={<Post/>}/>
              </Route>
              <Route path="*"/>
             </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
