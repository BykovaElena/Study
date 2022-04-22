
import React, { useState, useEffect } from "react"
//import { postData } from "../../posts";
import {Post} from '../Post'
import "./style.css";

//import api from "../../utils/Api";



export const PostList = ({ userDelete, postData, currentUser, onPostLike }) => {
  
    return (
<>
<div className="card">
{
            postData.map(dataItem => <Post key={dataItem._id} {...dataItem} userDelete={userDelete} currentUser={currentUser} onPostLike={onPostLike} />) 
}
                         
        

        </div>         
            
        
      </>
    );
};

