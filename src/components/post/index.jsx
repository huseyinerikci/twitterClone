import React from "react";
import UserAvatar from "../feed-form/UserAvatar";
import UserInfo from "./UserInfo";
import Content from "./Content";
import DropDown from "./DropDown";
import Buttons from "./Buttons";

const Post = ({ tweet }) => {
  return (
    <div className="flex border-b border-tw-gray p-4 gap-2">
      <UserAvatar
        photo={tweet.user.photo}
        name={tweet.user.name}
        designs="!size-12"
      />
      <div className="w-full">
        <div className="flex justify-between">
          <UserInfo tweet={tweet} />
          <DropDown tweet={tweet} />
        </div>
        <Content data={tweet.content} />
        <Buttons tweet={tweet} />
      </div>
    </div>
  );
};

export default Post;
