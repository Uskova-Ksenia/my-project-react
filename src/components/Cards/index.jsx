import React from "react";
import { Card, Col, Row } from 'antd';
import Post from "../Post";


const Cards = ({
    posts, 
    user,
    updateLikesOnPost,
    deletePostById
}) => {
    return (
        <Row gutter={[16, 16]}>
            {posts.map(post => (
              <Col span={8} key={post._id}>  
                  <Card 
                      title={post.title} 
                      bordered={false}
                  >  
                    <Post 
                        postId={post._id}
                        avatar={post.author.avatar}
                        email={post.author.email}
                        text={post.text}
                        tags={post.tags}
                        created_at={post.created_at} 
                        updated_at={post.updated_at}
                        user={user}
                        likes={post.likes}
                        updateLikesOnPost={updateLikesOnPost}
                        deletePostById={deletePostById}
                    />
                  </Card>
              </Col> 
            ))}
        </Row>
    );
  };

export default Cards;
