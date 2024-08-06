import React,{useState} from 'react';

const Likes = () => {
     const[likes,setLikes]=useState(0);
     const fivetimeslike=()=>{
        for(let i=1;i<+5;i++)
        {
            setLikes(prevLikes=>prevLikes+1);
        }
     }
    return (
        <div>
            <h1>Likes:{likes}</h1>
            <button onClick={()=>setLikes(prevLikes=>prevLikes)}>like</button>

            {/* <button onClick={() =>setLikes(likes+1)}>Like</button>
            <button onClick={() =>setLikes(likes-1)}>DisLike</button> */}
            <button onClick={fivetimeslike}>fivetimeslike</button>

        </div>
    );
};

export default Likes;