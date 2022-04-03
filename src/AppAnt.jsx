import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Cards from "./components/Cards";
import { Pagination } from 'antd';
import "./index.css";
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import api from "./utils/Api";



const { Header, Footer, Content } = Layout;

const AppAnt = () => {

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
   
    useEffect(() => {
        Promise.all([api.getAllPosts(), 
                     api.getUserInfo()
        ]).then(
          ([posts, user]) => {
            setPosts(posts);
            setCount(posts.length);
            setUser(user);
          }
        );
      }, []);

    const updateLikesOnPost = (isLiked, postId) => {
        api.updateLikesOnPost(isLiked, postId).then((newPost) => {
            const newPosts = posts.map((el) =>
            el._id === postId ? newPost : el
            );
            setPosts(newPosts);
        });
    };
    
    const deletePostById = (postId) => {
      api.deletePostById(postId).then(() => {
        api.getAllPosts().then((posts) => {
          setPosts(posts);
        });
      });
    };

    return <Layout>
              <Header>
                <div className="header_container"> 
                  <a title="Remix" className="header_home_link" href="">
                      Remix Logo
                  </a>
                  <nav className="header_navigation">
                    <ul className="navigation">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Remix Docs</a>
                      </li>
                      <li>
                        <a href="">GitHub</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Header>
              <Content className="container">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <a href="">All posts</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Button style={{ marginBottom: 16 , marginTop: 16}} className="button" onClick={() => console.log("Есть контакт!")}>Create post</Button>
                <Cards 
                    className="cards" 
                    posts={posts}
                    user={user}
                    updateLikesOnPost={updateLikesOnPost}
                    deletePostById={deletePostById}/>
                <Pagination className="pages" defaultCurrent={1} total={50}/>
              </Content>
              <Footer></Footer>
            </Layout>
};


export default AppAnt;