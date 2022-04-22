
import React, { useState, useEffect } from "react"
import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;
import { PostList } from "../components/PostList";
import { Info } from "../components/Content";
//import { postData } from "../posts";



import api from "../utils/Api.js";






export const App = () => {
    const [posts, setPosts] = useState([]) 
    const [currentUser, setCurrentUser] = useState({})
    

useEffect (() => {
    

    Promise.all([api.getPostList(), api.getUserInfo() ])
    .then(([firstPost, userData]) =>{
        setPosts(firstPost)
        
        setCurrentUser(userData)

    } )
},[])

function handleDeleteUsere ({_id}) {
    

    api.deleteUser(_id)
    .then((newPost) => {
        const newPostsState = posts.map(c => {

           return   newPost 
        })
        setPosts(newPostsState) 
    })
}

function handlePostLike ({_id, likes}) {
    const isLiked = likes.some(id => id === currentUser._id);

    api.changeLikeStatust(_id, isLiked)
    .then((newPost) => {
        const newPostsState = posts.map(c => {

           return  c._id === newPost._id ? newPost : c 
        })
        setPosts(newPostsState) 
    })
}
    
    return (
        <>
            <Layout>
                <Header >Header</Header>
                <Content>
                    <PostList userDelete = {handleDeleteUsere} postData={posts} currentUser={currentUser} onPostLike={handlePostLike}/>
                    
                    <Info/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};