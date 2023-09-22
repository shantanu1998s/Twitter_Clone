import React,{useEffect} from 'react'
import './sideBar.css'
import { NavLink } from "react-router-dom";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SideBarRow from "./SideBarRow";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


const Message = () => {
  const navigate = useNavigate();
      const { logOut, user } = UserAuth();
    
      const handleLogin = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        if (!user) {
          navigate("/");
        }
      }, [user]);
  return (
    <div className='message'>
      <div>
        <div className="col-span-2 flex flex-col items-center px-4 md:items-start overflow-hidden">
        <NavLink to="/">
        <img
          className="m-3 h-10 w-12"
          src="http://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s1600/Twitter+logo+2012.png"
          alt="twitter logo"
        />
        </NavLink>
          
        <NavLink to="/">
          <SideBarRow Icon={HomeIcon} title="Home" />
          </NavLink>
          
    
          <NavLink to="/explore">
          <SideBarRow Icon={HashtagIcon} title="Explore" />
          </NavLink>
          
          <NavLink to="/notifications">
          <SideBarRow Icon={BellIcon} title="Notifications" />
          </NavLink>
          
    
          <NavLink to="/message">
          <SideBarRow Icon={MailIcon} title="Messages" />
          </NavLink>
          
          <NavLink to="/bookmarks">
          <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
          </NavLink>
          
          <NavLink to="/lists">
          <SideBarRow Icon={CollectionIcon} title="Lists" />
          </NavLink>
    
          
          <button onClick={handleLogin}>
            <SideBarRow Icon={UserIcon} title={"Sign Out"} />
          </button>
          <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
        </div>
      </div>
            <div className='common'>
                <div>
                    <p>Empty</p>
               </div>
           </div>
    </div>
  )
}

export default Message
