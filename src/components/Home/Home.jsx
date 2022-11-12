import React from "react";
import styles from "./Home.module.css";
import Delivery from "../../assets/images/delivery.png";
import heroBg from "../../assets/images/heroBg.png";
import { heroData } from "../../utils/data.js";

const Home = () => {
  return (
    <div className={styles.Home} id="home">
      <section className={styles.Left}>
        <div className={styles.delivery}>
          <p>Bike Delivery</p>
          <figure>
            <img src={Delivery} alt="delivery" />
          </figure>
        </div>

        <p>
          The Best Fancy Food in <span>Your City</span>
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis
          veritatis dolor et quaerat illo voluptatum magnam ratione unde
          voluptates officia excepturi, rem tempora commodi a dignissimos
          reiciendis in. Sed!
        </p>

        <button type="button">Order Now</button>
      </section>

      <section className={styles.etc}>
        <img src={heroBg} alt="bg" />

        <div className={styles.etc_menu}>
          {heroData && heroData.map((dish) => (
            <div key={dish.id}>
              <img src={dish.imageSrc} alt={dish.name} />
              <p>{dish.name}</p>
              <p>{dish.description}</p>
              <p>
                <span>$</span> {dish.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Home };
