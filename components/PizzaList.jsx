import styles  from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  const arr = [{ id : 0 , maal: 1 }, { id : 1 , maal: 2 }, { id : 2 , maal: 3 }, { id : 3 , maal: 4 }, { id : 4 , maal: 5 }, { id : 5 , maal: 6 }, { id : 6 , maal: 7 }];
  return (
    <div className={styles.container}>

      <h1 className= {styles.title}>
          THE BEST PIZZA IN TOWN
      </h1>
      <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quod quam et tempore inventore fugiat voluptas vero alias, numquam consequatur sit eveniet maiores aliquam expedita ipsa perferendis ex ullam eos. Id adipisci deserunt in velit nihil dignissimos ea, mollitia minima. 
      </p>
      <div className = {styles.wrapper} >
        {arr.map(({ id,maal }) => (
          <PizzaCard key={id} idx ={maal}  />
        ))}
          
      </div>
    </div>
  )
}

export default PizzaList