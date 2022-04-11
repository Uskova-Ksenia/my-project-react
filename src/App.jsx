import React, { useEffect, useState, useCallback }from "react";
import { UserContext } from "./utils/context/UserContext";
import { Layout } from "antd";
import api from "./utils/Api";
import Header from "./components/Header";
import NotFoundPage from "./pages/404/404";
import FeedPage from "./pages/FeedPage/FeedPage";
import PostPage from "./pages/PostPage/PostPage";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const { Footer } = Layout;

const App = () => {

  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => { 
    Promise.all([api.getAllPosts(), 
                    api.getUserInfo()
    ]).then(
        ([posts, user]) => {
        console.log(user, posts)
        setPosts(posts);
        setCount(posts.length);
        setUser(user);
        }
    );
    }, []);

  const deletePostById = (postId) => {
    api.deletePostById(postId).then(() => {
      api.getAllPosts().then((posts) => {
        setPosts(posts);
      });
    });
  };

  const updateLikesOnPost = (isLiked, postId) => {
      api.updateLikesOnPost(isLiked, postId).then((newPost) => {
          const newPosts = posts.map((el) =>
          el._id === postId ? newPost : el
          );
          setPosts(newPosts);
      });
  };
  
  return (
  <UserContext.Provider value={user}>
    <Layout>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <FeedPage
              posts={posts}
              // user={user}
              updateLikesOnPost={updateLikesOnPost}
              deletePostById={deletePostById}
            />
          }
        />
        <Route 
          path="/post/:postID" 
          element={
            <PostPage  
              posts={posts}
              // user={user}
              updateLikesOnPost={updateLikesOnPost}
            />
          } 
        />
        <Route 
          path="*" 
          element={<NotFoundPage />} 
        />
      </Routes>
      <Footer></Footer>
    </Layout>
  </UserContext.Provider>
  )
};

export default App;