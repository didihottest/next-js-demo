import Header from './Header'
import styles from './Layout.module.css'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>

  )
}

export default Layout