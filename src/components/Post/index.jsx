import React, { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { ReactComponent as LikeComponent } from "./img/like.svg";
import { Button, Space, Avatar, Timeline, Tag } from 'antd';
import classNames from "classnames";
import postStyle from "./index.modules.css";

const Post = ({
    post,
    updateLikesOnPost,
    deletePostById
}) => {
    const user = useContext(UserContext);  
    const isFavourite = post.likes.some((el) => el === useContext(UserContext)._id);
    // const isAllowedToDelete = user._id === post.author._id ? true : false;

    const isAllowedToDelete = (postLocal, userLocal) => {
        // console.log("user.id:", userLocal)
        // console.log("author.id:", postLocal.author._id)
        // console.log("------")
        if (userLocal._id === postLocal.author._id) {
            return true;
        }
        return false;
    }

    const handleClick = (e) => {
        e.preventDefault();
        updateLikesOnPost(!isFavourite, post._id);
    };
        
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex'}} >
            <Space>
                <div className="avatar"> 
                    <Avatar size="large" icon={<img src={post.author.avatar}/>}/>  
                </div>
                <h4 className="e_mail"> {post.author.email} </h4>
            </Space>
            <Space className="text"> {post.text} </Space>
            <Space>
                <div className="tags">
                    Tags: 
                    <Tag> {post.tags} </Tag>
                </div>
            </Space>
            <Space>
                <Timeline>
                    <Timeline.Item className="created_at"> {post.created_at} </Timeline.Item>
                    <Timeline.Item color="green" className="updated_at"> {post.updated_at} </Timeline.Item>
                </Timeline>
            </Space>
            <Space style={{width: '100%', justifyContent:'space-between'}}>
                <Button 
                    disabled={(!isAllowedToDelete(post, user)).toString()}
                    className="button" 
                    onClick={() => deletePostById(post._id)}>
                    Delete post
                </Button >
                <Space>
                    <LikeComponent
                        onClick={handleClick}
                        className={
                            classNames(
                                postStyle.favourite, 
                                {[postStyle.checked]: isFavourite, }
                            )
                        }
                    />
                    <div  className="like_counter">
                        {post.likes.length}
                    </div>
                </Space>
            </Space>
        </Space> 
    )
};

export default Post;


