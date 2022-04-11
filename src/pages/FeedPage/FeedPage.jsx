import React, { useEffect, useState, useCallback } from "react";
import { Layout, Pagination, Breadcrumb, Button } from 'antd';
import Cards from "../../components/Cards";
import "./FeedPage.css";

const { Content } = Layout;


const FeedPage = ({
    posts,
    updateLikesOnPost, 
    deletePostById
}) => {
    return (
        <Content className="container">
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">All posts</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Button 
                style={{ marginBottom: 16 , marginTop: 16}} 
                className="button" 
                onClick={() => console.log("Есть контакт!")}
            >
                Create post
            </Button>
            <Cards 
                className="cards" 
                posts={posts}
                updateLikesOnPost={updateLikesOnPost}
                deletePostById={deletePostById}/>
            <Pagination className="pages" defaultCurrent={1} total={50}/>
        </Content>    
    );
};

export default FeedPage;