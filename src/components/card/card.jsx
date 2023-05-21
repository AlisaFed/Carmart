import React from "react";
import styles from './card.module.scss';
import CardSlider from "../slider/slider";


const Card = ({ result }) => {
  const images = result.photobank.imgs;

  return (
    <div className={styles.cards} key={result._id}>
      <section className={styles.cardcontainer}>
        <div>
          <h1 className={styles.cardname}>
            {result.feedData.brandName +
              " " +
              result.feedData.modelByClassifierName +
              " " +
              result.feedData.equipmentName +
              " " +
              result.feedData.engine.engineCapacity +
              " " +
              result.feedData.engine.engineTransmission +
              " "}
            <span className={styles.year}>{result.feedData.productionYear}</span>
          </h1>
          <p className={styles.vin}>{result.feedData.vin}</p>
        </div>
        <CardSlider images={images} />
        <div className={styles.cardsinfo}>
          <div className={[styles.box, styles.box1].join(' ')}>
            <h6>Двигатель</h6>
            <p>{result.feedData.engine.engineName}</p>
          </div>
          <div className={[styles.box, styles.box2].join(' ')}>
            <h6>КПП</h6>
            <p>{result.feedData.equipmentVariantTransmissionType}</p>
          </div>
          <div className={[styles.box, styles.box3].join(' ')}>
            <h6>Пробег</h6>
            <p>160 500 км</p>
          </div>
          <div className={[styles.box, styles.box4].join(' ')}>
            <h6>Цвет</h6>
            <p>{result.feedData.colorByClassifierName}</p>
          </div>
          <div className={[styles.box, styles.box5].join(' ')}>
            <h6>Пакеты</h6>
            <p>Зеркала заднего вида</p>
          </div>
          <div className={[styles.box, styles.box6].join(' ')}>
            <p className={styles.price}>
              {result.feedData.autoPriceRrc.toLocaleString("ru-RU", {
                minimumFractionDigits: 0,
              })}
            </p>
            <p className={styles.option}>
              Доп. опции на <span className={styles.optionprice}>999 999</span>
            </p>
          </div>
          <div className={[styles.box, styles.box8].join(' ')}>
            <button className={styles.heart} />
          </div>
          <div className={[styles.box, styles.box7].join(' ')}>
            <button className={styles.buybutton}>Купить</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
