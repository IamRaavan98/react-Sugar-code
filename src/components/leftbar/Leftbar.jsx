import React from "react";
import "./leftbar.css";
import MenuLink from "../menuLink/MenuLink";


export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink text="Homepage" />
        <MenuLink  text="Lists" />
        <MenuLink  text="Products" />
        <MenuLink  text="Groups" />
        <MenuLink  text="Pages" />
        <MenuLink  text="Photos" />
        <MenuLink  text="Videos" />
        <MenuLink  text="Schedule" />
        <MenuLink  text="Wishlist" />
        <MenuLink  text="Settings" />
        <MenuLink  text="Logout" />
      </div>
    </div>
  );
}
