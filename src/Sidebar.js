import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from "@material-ui/icons/Home";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from "@material-ui/core";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <div className="sidebar">
            {/**Twitter icon */}
            <TwitterIcon className="sidebar_twitterIcon" />

            {/**SidebarOption */}
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
            <SidebarOption Icon={SubjectOutlinedIcon} text="Lists" />
            <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

            {/**Button -> tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
            
            
        </div>
    )
}

export default Sidebar
