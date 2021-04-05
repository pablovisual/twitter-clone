import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchOutlinedIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>what's happening</h2>

                <TwitterTweetEmbed tweetId={"1359484511843540992"} />

                <TwitterTimelineEmbed sourceType={"profile"} screenName={"Pab_San_OG"} options={{ height: 400 }}/>

                <TwitterShareButton 
                  url={"https://github.com/pablovisual"}
                  options={{ text: "#reactjs is awesome", via: "Pab_San_OG"}}
                />
            </div>
        </div>
    )
}

export default Widgets
