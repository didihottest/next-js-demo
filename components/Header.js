import styles from './Header.module.css'

function Header() {
  const x = 5
  return (
    <div>
      <h1 className={styles.title}>
        <span>Blog</span> Post
      </h1>
      <p className={styles.description}></p>
      {/* <h1 className='title'>
        <span>Blog</span> Post
      </h1>
      <p className={styles.description}></p>

      <style jsx>
        {
          `
          .title {
            color: ${x > 1 ? "green" : "red"};
          }
          `
        }
      </style> */}
    </div>
  )
}

export default Header