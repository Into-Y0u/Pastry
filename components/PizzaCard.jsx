import React from 'react';
import styles  from "../styles/PizzaCard.module.css";
import Image from 'next/image';
import Link from "next/link";


const PizzaCard = ({ idx }) => {
  const titles = ["Black Cake" , "White Cake" , 'Brown Cake' , 'Dark Chocolate' , "Colorful Cake" , "Oreo Cake" , "Hijiibiji Cake"]
  const prices = [900,1200,600,300,300,600,900];

  return (
 
    <div className ={styles.container} >
        <Link href={`/product/${ idx }`} passHref>
          <Image src={`/img/cake-${idx}.png`} alt='' width="500" height="500"/>
        </Link>
        <h1 className={styles.title}>{titles[idx-1]}</h1>
        <span className={styles.price}>₹{prices[idx-1]}</span>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis amet maiores dolores, minus ullam a dolorem repellendus recusandae reprehenderit at!
        </p>
    </div>
  );
};

export default PizzaCard;