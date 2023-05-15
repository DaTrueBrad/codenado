import React, {useMemo, useEffect, useState} from "react";
import axios from "axios";

const Newsfeed = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    axios.get('/api/getPosts')
    .then((res) => {
      console.log(res)
      setPosts(res.data)
    })
    .catch((err) => {
      console.error(err)
    })
    
  }
  
  const postDisplay = useMemo(() => {
    return posts.map((p,i) => <p>{p.title}</p>)
  },[posts])

  useEffect(() => {
    getPosts()
  },[])
  console.log(posts)
  return (
    <section>
      <h1>Newsfeed</h1>
      {postDisplay}
    </section>
  );
};

export default Newsfeed;
