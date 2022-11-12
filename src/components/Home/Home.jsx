import React from "react";
import styles from "./Home.module.css";
import Delivery from "../../assets/images/delivery.png";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.content}>
        <section>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            officiis veritatis dolor et quaerat illo voluptatum magnam ratione
            unde voluptates officia excepturi, rem tempora commodi a dignissimos
            reiciendis in. Sed!
          </p>

          <button type="button">Order Now</button>
        </section>

        <section className={styles.etc}>another section</section>
      </div>
    </div>
  );
};

export { Home };
