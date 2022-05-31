import { useState, useEffect } from "react"
import { onSnapshot, collection, query, orderBy, doc } from "firebase/firestore";
import Post from "./Post"
import { db } from "../firebase";

const Posts = () => {

  const [posts, setPosts] = useState([])
    // const posts = [
    //     {
    //         id: "123",
    //         username: "Smartmikey",
    //         userImg: "https://links.papareact.com/3ke",
    //         img: "https://links.papareact.com/3ke",
    //         caption: "this is Dope! just employ me ASAP"
    //     }
    // ]

    useEffect(() => 
    
  //   onSnapshot(query(collection(db, "posts")), (doc) => {
  //     console.log("Current data: ", doc.docs);
  // })
     onSnapshot(query(collection(db, "posts"), orderBy("timeStamp", "desc")), snapshot => {
      console.log(snapshot.docs);
      setPosts(snapshot.docs);
    })
    , [db]);
    
  return (
    <div>
        {posts.map(post => (

        <Post 
        key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
        ))}
    </div>
  )
}

export default Posts