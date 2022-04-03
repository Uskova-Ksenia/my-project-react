import React from "react";
import { ReactComponent as LikeComponent } from "./img/like.svg";
import postStyle from "./index.modules.css";
import classNames from "classnames";
import { Button } from 'antd';
import { Timeline } from 'antd';
import { Avatar } from 'antd';
import { Tag } from 'antd';
import { Space } from 'antd';

const Post = ({
    postId,
    title, 
    avatar, 
    email, 
    text,
    tags, 
    created_at, 
    updated_at,
    user,
    likes,
    updateLikesOnPost,
    deletePostById
}) => {

    const isFavourite = likes.some((el) => el === user._id);
    const handleClick = (e) => {
      e.preventDefault();
      updateLikesOnPost(!isFavourite, postId);
    };
    
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex'}} >
            <div className="title" style={{color: "#1890ff"}} > {title} </div>
            <Space>
                <div className="avatar"> 
                    <Avatar size="large" icon={<img src={avatar}/>}/>  
                </div>
                <h4 className="e_mail"> {email} </h4>
            </Space>
            <Space className="text"> {text} </Space>
            <Space>
                <div className="tags">
                    Tags: 
                    <Tag> {tags} </Tag>
                </div>
            </Space>
            <Space>
                <Timeline>
                    <Timeline.Item className="created_at"> {created_at} </Timeline.Item>
                    <Timeline.Item color="green" className="updated_at"> {updated_at} </Timeline.Item>
                </Timeline>
            </Space>
            <Space style={{width: '100%', justifyContent:'space-between'}}>
                <Button 
                    className="button" 
                    onClick={() => deletePostById(postId)}>
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
                        {likes.length}
                    </div>
                </Space>
            </Space>
        </Space> 
    )
};

export default Post;


