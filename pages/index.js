import Head from 'next/head'
import axios from 'axios'
import ArticleList from '../components/ArticleList'

export default function Home({ posts }) {
  return (

    <div>
      <Head>
        <title>Home</title>
        <meta name='keywords' content='next js, react, javascript' />
      </Head>
      <ArticleList posts={posts} />
    </div>
  )
}
// gunakan ini kalau pengen halamannya jadi statis SSG(static site generation)
export const getStaticProps = async () => {
  try {
    const response =
      await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')

    return {
      props: {
        posts: response.data
      }
    }

  } catch (error) {
    return {
      props: {
        posts: []
      }
    }
  }
}
