import React from 'react';
import mainStyles from'./main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/card';
import { searchChange } from '../../redux/searchSlice';

const Main = () => {
  const dispatch = useDispatch();
  let setname = useSelector((state) => state.searchData.name);
  let setcards = useSelector((state) => state.searchData.cards);

  const handleChange = async (e) => {
    e.preventDefault();
    setname = e.target.value;
    dispatch(searchChange({ name: setname, cards: setcards }));

    try {
      const response = await fetch(`https://maximum.expert/api/stock-test?brand=${setname}`);
      if (response.ok) {
        const data = await response.json();
        dispatch(searchChange({
          cards: data.list,
        }));
      } else {
        dispatch(searchChange({
          cards: [],
          id: 0,
        }));
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      dispatch(searchChange({
        cards: [],
        id: 0,
      }));
      console.log('Error:', error);
    }
  };

  return (
    <>
      <header className={mainStyles.header}>
        <select className={mainStyles.select} onChange={handleChange}>
          <option value="">Марка</option>
          <option value="Audi">Audi</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Kia">Kia</option>
          <option value="Honda">Honda</option>
          <option value="Hyundai">Hyundai</option>
        </select>
      </header>
      <div className={mainStyles.main}>
        {setcards.map((result) => {
          return (
            <Card result={result} key={result._id} />
          );
        })}
      </div>
    </>
  );
};

export default Main;
