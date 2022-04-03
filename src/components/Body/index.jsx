import React from "react";
import Button from "../Button";
//import Post from "../Post";

import "./index.css";


const posts =[
  {
      title:"Batman Beyond: Return of the Joker",
      avatar:"https://react-learning.ru/image-compressed/default-image.jpg", 
      e_mail:"maxim_91@inbox.ru", 
      text:"Change Other Device on Right Upper Arm",
      tags:"legendary", 
      created_at:"2022-03-11T23:23:20.891Z", 
      updated_at:"2022-03-11T23:23:20.891Z",
  },
  {
      title:"Batman Beyond: Return of the Joker",
      avatar:"https://react-learning.ru/image-compressed/default-image.jpg", 
      e_mail:"maxim_91@inbox.ru", 
      text:"Change Other Device on Right Upper Arm",
      tags:"legendary", 
      created_at:"2022-03-11T23:23:20.891Z", 
      updated_at:"2022-03-11T23:23:20.891Z",  
  },
  {
    title:"Batman Beyond: Return of the Joker",
    avatar:"https://react-learning.ru/image-compressed/default-image.jpg", 
    e_mail:"maxim_91@inbox.ru", 
    text:"Change Other Device on Right Upper Arm",
    tags:"legendary", 
    created_at:"2022-03-11T23:23:20.891Z", 
    updated_at:"2022-03-11T23:23:20.891Z",
  }
]

const Body = () => {
  return (

  <main className="main"> 
    <div className="main_content">
      <div className="posts">
        <div className="ant_space_item"> Home/ All posts</div>
        <div className="ant_space_item">
          <div className="posts_container">
            <div> Welcome 
            <Button text={"Create post"} onClick={() => console.log("Есть контакт!")}/>
            </div>
            <div className="all_posts"> {posts.map(post => (
            <Post
              title={post.title} 
              avatar={post.avatar} 
              e_mail={post.e_mail} 
              text={post.text}
              tags={post.tags} 
              created_at={post.created_at} 
              updated_at={post.updated_at}
            /> ))} </div>
            <div> Pages </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  );
};

export default Body;
