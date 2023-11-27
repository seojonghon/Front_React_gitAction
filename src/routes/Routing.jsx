import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import Home from "../pages/home/Home";
import PostList from "../pages/post/PostList";
import Post from "../pages/post/Post";
import PostForm from '../pages/postForm/PostForm';
import FormIngredients from '../pages/postForm/FormIngredients';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/posts/form" element={<PostForm />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/detail" element={<Post />} />
      <Route path='/posts/form/ingre' element={<FormIngredients />} />
    </Routes>
  );
}

export default Routing;
