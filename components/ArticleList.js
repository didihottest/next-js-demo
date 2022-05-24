import ArticleItem from './ArticleItem'
import styles from './ArticleList.module.css'
function ArticleList({ posts }) {
  return (
    <div className={styles.grid}>
      {
        posts.map((item) => {
          return (
            <ArticleItem key={item.id} item={item} />
          )
        })
      }
    </div>
  )
}

export default ArticleList