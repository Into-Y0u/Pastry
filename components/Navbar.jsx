import styles from "../styles/Navbar.module.css"
import Image from 'next/image';
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <div className={styles.logo}>Pastry</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.list}>
          <li className={styles.listItem} onClick={() => router.push('/')} >Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contacts</li>

        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src = "/img/cart.png" alt ="hurr miya" width="30px" height="30px"/>
          <div className={styles.counter}>2</div>
        </div>

        
      </div>

    </div>
  )
}

export default Navbar