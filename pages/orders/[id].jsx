import styles  from "../../styles/Order.module.css";
import Image from "next/image";

const Orders = ({ main }) => {

    const status = 0;
    const statusClass = (index)=>{
        if(index-status < 1) return styles.done;
        if(index-status === 1) return styles.inProgress;
        if(index-status > 1) return styles.undone;

    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.trTitle} >
                        <th className={styles.th} >OrderID</th>
                        <th className={styles.th} >Customer</th>
                        <th className={styles.th} >Adress</th>
                        <th className={styles.th} >Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <span className={styles.id} >123214124</span>
                        </td>
                        <td>
                            <span className={styles.name} >Rocky Bhai</span>
                        </td>
                        <td>
                            <span className={styles.address} >KGF,Bangalore</span>
                        </td>
                        <td>
                            <span className={styles.total} >₹{main}</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" alt="" width={30} height={30} />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20}/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bake.png" alt="" width={30} height={30} />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20}/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/bike.png" alt="" width={30} height={30} />
                    <span>On The Way</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20}/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" alt="" width={30} height={30} />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20}/>
                    </div>
                </div>

            </div>

        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}  >
                <h2 className={styles.title}  >CART TOTAL</h2>
                <div className={styles.totalText} >
                    <b className={styles.totalTextTitle}>Subtotal:</b>₹{main}
                </div>
                <div className={styles.totalText} >
                    <b className={styles.totalTextTitle}>Discount:</b>₹0.00
                </div>
                <div className={styles.totalText} >
                    <b className={styles.totalTextTitle}>Total:</b>₹{main}
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>

        </div>

    </div>
  )
}
export const getServerSideProps = async pageContext  => {
    const idx = pageContext.query.id;

    return {
        props : {
            main : idx, 

        }
    }

}

export default Orders;