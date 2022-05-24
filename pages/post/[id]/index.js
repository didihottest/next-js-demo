import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
function Post({ post }) {
  const router = useRouter()
  const { id } = router.query
  const [postCSR, setPostCSR] = useState({})
  // cara react bias (CSR)
  const getPostData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response)
        setPostCSR(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getPostData()
  }, [])


  // console.log(post)
  return (
    // cara csr
    // <div>
    //   <h1>{postCSR.title}</h1>
    //   <p>{postCSR.body}</p>
    // </div>
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post

// render halaman dari server SSR
export const getServerSideProps = async (context) => {
  // context didapat ketika memanggil function getServerSideProps
  // console.log(context)
  try {
    const response =
      await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    return {
      props: {
        post: response.data
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        post: {}
      }
    }
  }
}