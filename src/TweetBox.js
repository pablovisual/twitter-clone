import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");//with this hook, when an even when typing it sends what we wrote for the tweet

    const [tweetImage, setTweetImage] = useState("");//this hook is used when user wants to add an image

    const sendTweet = (e) => {
        e.preventDefault(); //so that when we click to send the tweet it doesnt refresh the page, we dont want that
        //then we want to send whatever we post to the database
        //const timeAgo = new TimeAgo("en-US");
        //const time = timeAgo.format(new Date() - 1 * 1000, "twitter-now");
        db.collection("posts").add({
            avatar: "https://images-na.ssl-images-amazon.com/images/I/71hkclW-bAL.png",
            displayName: "ITISWHATITIS",
            verified: true,
            username: "Pab_San_OG",
            text: tweetMessage,
            image: tweetImage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://images-na.ssl-images-amazon.com/images/I/71hkclW-bAL.png" style={{ height: '50px', width: '50px' }} />
                    <input onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's Happening?" 
                        type="text" 
                    />
                    {/**/}
                </div>

                <input 
                    value={tweetImage} 
                    onChange={(e) => setTweetImage(e.target.value)} 
                    className="tweetBox_imageInput" 
                    placeholder="Enter image URL" 
                    type="text" 
                    />
                <Button type="submit" onClick={sendTweet} className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
