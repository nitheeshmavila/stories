import React from "react";

export default class Post extends React.Component{
    render(){
        return(
            <div>
               <h1>Intro jsx</h1>
               <p>By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.</p> 
               <h2>nmn | 12 dec 2019</h2>
            </div>
        );
    }
}