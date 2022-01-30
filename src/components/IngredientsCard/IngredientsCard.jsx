import PropTypes from 'prop-types';
import styles from './IngredientsCard.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

  function IngredientsCard ({imglink, price, name}) {
    return (<>
    <img src={imglink} alt={name} className={styles.image + " pl-4"}/>
    <div className={styles.price + " mt-2 mb-2"}>
      <span className="pr-2 text text_type_digits-default">{price}</span>
      <CurrencyIcon type="primary"/>
    </div>
    <p className={styles.title}>{name}</p>
    <Counter count={1} size="default"/>
  </>
  )}

  IngredientsCard.propTypes = {
    name: PropTypes.string.isRequired,
    imglink: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }

export default IngredientsCard; 


  