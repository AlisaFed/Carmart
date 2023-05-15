import React from 'react';
import './cards.scss';
import CardSlider from './cardsslider';

const Articles = ({ result }) => {
  const images = result.photobank.imgs;

  return (
    <div className="cards" id="cardsApi" key={result._id}>
      <section className='card-container'>
      <div>
      <h1 className="card-name">
  {result.feedData.brandName + ' ' + result.feedData.modelByClassifierName + ' ' + result.feedData.equipmentName + ' ' + result.feedData.engine.engineCapacity + ' ' + result.feedData.engine.engineTransmission + ' '}
  <span className="year">{result.feedData.productionYear}</span>
</h1>
        <p className='vin'>{result.feedData.vin}</p>
      </div>
        <CardSlider images={images} />
      <div className='cards-info'>
        <div className='box-1'>
          <h6>Двигатель</h6>
          <p>{result.feedData.engine.engineName}</p>
        </div>
        <div className='box-2'>
          <h6>КПП</h6>
          <p>{result.feedData.equipmentVariantTransmissionType}</p>
        </div>
        <div className='box-3'>
          <h6>Пробег</h6>
          <p>160 500 км</p>
        </div>
        <div className='box-4'>
          <h6>Цвет</h6>
          <p>{result.feedData.colorByClassifierName}</p>
        </div>
        <div className='box-5'>
          <h6>Пакеты</h6>
          <p>Зеркала заднего вида</p>
        </div>
        <div className='box-6'>
          <p className='price'>{result.feedData.autoPriceRrc}</p>
          <p className='option'>Доп. опции на <span className="option-price">999 999</span></p>
        </div>
        <div className='box-7'>
          <button className='buy-button'>Купить</button>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Articles;