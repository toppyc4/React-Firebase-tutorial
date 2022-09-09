import { useEffect, useState } from "react"
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { auth, db } from "../firebaseConfig"

function Home({ isAuth }) {
  const [postList, setPostList] = useState([])
  const collectionRef = collection(db, "posts")

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }

  useEffect(() => {
    onSnapshot(collectionRef, (snapshot) => {
      setPostList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className='post'>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
              <div className='deletePost'>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id)
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
            <div className='postTextContiner'> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        )
      })}
    </div>
  )
}
export default Home
