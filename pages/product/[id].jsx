import styles  from "../../styles/Product.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";



const Product = ({ idx }) => {
    const router = useRouter();
    const [size , setSize] = useState(1);

    const titles = ["Black Cake" , "White Cake" , 'Brown Cake' , 'Dark Chocolate' , "Colorful Cake" , "Oreo Cake" , "Hijiibiji Cake"]
    const prices = [900,1200,600,300,300,600,900];
    const [ext,setExt] = useState(0);
    
    const handleSubmit = ((e) => {
        e.preventDefault();

        const total = ((prices[idx-1] + ((prices[idx-1] / 3) * size) ) * 10 + ext ) *10 + idx;
   
        router.push(`/cart/${(total)}`);
        
    })
 


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className = {styles.imgContainer}>
                    <Image src={`/img/cake-${idx}.png`} objectFit="contain" layout = "fill" alt = "" />
                </div>

            </div>
            <div className={styles.right}>
                <h1 className={styles.title} >{titles[idx-1]} </h1>
                <span className= {styles.price} >₹{prices[idx-1]}</span>
                <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas voluptas, ab error vitae saepe neque earum quia omnis ipsum expedita natus cupiditate doloremque autem cumque! Minima animi soluta, similique numquam maxime quis magni iure totam reiciendis odio doloremque sapiente nihil cum voluptatum qui corrupti porro possimus consequatur sint impedit molestias.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem excepturi officia tempora odio architecto odit dignissimos veniam et fugit doloribus perferendis, aliquid amet dolores!</p>

                <h3 className={styles.choose} >Choose The Size</h3>

                <div className={styles.sizes}   >
                    <div className={styles.size} >
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick = {()=> setSize(2) }  >
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick = {()=> setSize(3) }  >
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose} > Choose additional Ingredients </h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" id="double" name="double" className={styles.checkbox} onClick = {()=> setExt(ext+1) }  />
                        <label htmlFor="double">Candels</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="cheeze" name="cheeze" className={styles.checkbox} onClick = {()=> setExt(ext+1) }   />
                        <label htmlFor="cheeze">Chulbuli</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} onClick = {()=> setExt(ext+1) }   />
                        <label htmlFor="spicy">Gift Packaging</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} onClick = {()=> setExt(ext+1) }   />
                        <label htmlFor="garlic">Burimar Chocolate Bom</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className = {styles.quantity} />
                    <button className={styles.button} onClick = {handleSubmit}  >Add to Cart </button>

                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = async pageContext  => {
    const idx = pageContext.query.id;
    return {
        props : {
            idx : idx,
        }
    }

}
export default Product;