import Image from "./Image";
import monsterDrink from "../../assets/monster.jpg";
import cakeParfait from "../../assets/cakeParfait.jpg";
import fruitParfait from "../../assets/fruitParfait.jpg";
import popcorn from "../../assets/popcorn.jpg";

function HeroCard() {
  return (
    <section className="hero-card-overlay-section">
      <div className="hero-section__glass-card">
        <Image
          src={monsterDrink}
          alt="Gramercy Tavern"
          width={130}
          height={130}
          className="hero-glass-effect__img  max-w-[5rem] min-h-[9rem] "
        />

        <h3>Monster Drink</h3>
        <h3>
          <span>₦</span>300
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={cakeParfait}
          alt="Killer Brownie"
          width={130}
          height={130}
          className="hero-glass-effect__img min-h-[9rem]"
        />
        <h3>Cake Parfait</h3>
        <h3>
          <span>₦</span>1200
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={fruitParfait}
          alt="Jacques Torres Chocolate"
          width={130}
          height={130}
          className="hero-glass-effect__img min-h-[9rem]"
        />
        <h3>Fruit Parfait</h3>
        <h3>
          <span>₦</span>1200
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={popcorn}
          alt="Guy Fieri"
          width={130}
          height={130}
          className="hero-glass-effect__img max-w-[5rem] min-h-[9rem] "
        />
        <h3>Popcorn</h3>
        <h3>
          <span>₦</span>700
        </h3>
      </div>
    </section>
  );
}

export default HeroCard;