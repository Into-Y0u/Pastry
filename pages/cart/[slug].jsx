import styles from '../../styles/Cart.module.css';
import Image from "next/image";
import { useRouter } from "next/router";

const Cart = ({ main }) => {
    const router = useRouter();
    const actual = main/1000 ;
    const idx = main%10 ;
    const ext = main%100 ;
    const prices = [900,1200,600,300,300,600,900];
    const titles = ["Black Cake" , "White Cake" , 'Brown Cake' , 'Dark Chocolate' , "Colorful Cake" , "Oreo Cake" , "Hijiibiji Cake"];
    const handleSub = ((e) => {
        e.preventDefault();
        const seting = actual + ext*50
        router.push(`/orders/${seting}`);
        
    })
    
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle} >
                        <th className={styles.th}>Product</th>
                        <th className={styles.th}>Cake Name</th>
                        <th className={styles.th}>Price</th>
                        <th className={styles.th}>Extras</th>
                        <th className={styles.th}>Quantity</th>
                        <th className={styles.th}>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}  >
                                <Image src={`/img/cake-${idx}.png`} layout="fill" objectFit="cover" alt=""/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{titles[idx-1]}</span>
                        </td>
                        <td>
                            <span className={styles.extras}>₹{actual}</span>
                        </td>
                        <td>
                            <span className={styles.price}>₹{ext*50}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>1</span>
                        </td>
                        <td>
                            <span className={styles.total} >₹{actual + ext*50}</span>
                        </td>
                    </tr>
                </table>
            </div>

            <div className={styles.right} >
                <div className={styles.wrapper}  >
                    <h2 className={styles.title} >CART TOTAL</h2>
                    <div className={styles.totalText} >
                        <b className={styles.totalTextTitle}>Subtotal:</b>₹{actual + ext*50}
                    </div>
                    <div className={styles.totalText} >
                        <b className={styles.totalTextTitle}>Discount:</b>₹0.00
                    </div>
                    <div className={styles.totalText} >
                        <b className={styles.totalTextTitle}>Total:</b>₹{actual + ext*50}
                    </div>
                    <button className={styles.button} onClick = {handleSub}>CHECK OUT NOW</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext  => {
    const idx = pageContext.query.slug;
    return {
        props : {
            main : idx, 

        }
    }

}

export default Cart;