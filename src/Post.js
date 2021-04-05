import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import firebase from "firebase";
import db from "./firebase";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import "./Post.css";
TimeAgo.addDefaultLocale(en)

const Post = forwardRef(({ avatar, displayName, verified, username, text, image, timestamp}, ref) => {
    const timeAgo = new TimeAgo("en-US");

    var time = null;
    if(timestamp?.toDate() == null) {
      time =  timeAgo.format(Date.now(timestamp) - 1 * 1000, "twitter");
    }

    else {
      time = timeAgo.format(new Date(timestamp?.toDate().toUTCString()), "twitter");
    }

    return (
        <div className="post" ref={ref}>
            <div className="post_avatar">
                <Avatar src={avatar} style={{ height: '50px', width: '50px' }} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                      <h3>
                          {displayName}{" "}
                          <span className="post_headerSpecial">
                              { verified && <VerifiedUserIcon className="post_badge" /> } @{username}{" "}
                              &#8226; {time}
                          </span>
                      </h3>  
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post_footer">
                    <ModeCommentOutlinedIcon fontSize="small" />
                    <LoopIcon fontSize="small" />
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    <PublishOutlinedIcon fontSize="small" />
                </div>
            </div>
            
        </div>
    );
});

export default Post
