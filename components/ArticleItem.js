import React from 'react'
import Link from 'next/link'
import styles from './ArticleList.module.css'

function ArticleItem({ item }) {
  return (
    <Link href={`/post/${item.id}`}>
      <a className={styles.card}>
        <h3>{item.title} &rarr;</h3>
        <p>{item.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem