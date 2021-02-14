import React, {useState, useEffect} from 'react'
import axios from 'axios';

import './Body.css';

function Body() {
    const [posts, setPosts] = useState([]);

    useEffect(async () =>{
        const base_url="http://localhost:8081/memes";
       
        axios.get("http://localhost:8081/memes").then((response) =>{
            const data =response.data;   
        setPosts(data.reverse());
        }).catch((err) => console.log('err'));
    },[posts]);

    // console.log(posts[0]?.url);



    return (
        <div className="body">
            {posts.map((post) =>
                <div key={post._id} className="bodyContent">
                    <p className="name">{post.name}</p>
                    <p className="caption">{post.caption}</p>
                    <img alt="img" src={post?.url} className="image" />
                </div>
            )}
        </div>
    )
}

export default Body
