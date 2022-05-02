import Post from "./Post"

const Posts = () => {
    const posts = [
        {
            id: "123",
            username: "Smartmikey",
            userImg: "https://links.papareact.com/3ke",
            img: "https://links.papareact.com/3ke",
            caption: "this is Dope! just employ me ASAP"
        }
    ]
  return (
    <div>
        {posts.map(post => {

        <Post />
        })}
    </div>
  )
}

export default Posts