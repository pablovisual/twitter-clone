import React, { useEffect, useState } from 'react';
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]); //hook
    
    useEffect(() => {
        //code...
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => ( //set this variable to the value
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()}))) //this will give an array of all the posts inside of the database, which is avatar, username, displayname, etc
        ))
    }, []);

    return (
        <div className="feed">
            {/**Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            

            {/**TweetBox */}
            <TweetBox />

            {/**Post */}
            <FlipMove>
                {posts.map(({ id, data: { avatar, displayName, username, text, image, timestamp } }) => (
                    <Post
                    key={id}
                    avatar={avatar}
                    displayName={displayName}
                    verified={true}
                    username={username} 
                    text={text}
                    image={image}
                    timestamp={timestamp}
                    />
                ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
