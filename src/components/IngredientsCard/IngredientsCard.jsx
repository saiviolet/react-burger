import PropTypes from 'prop-types';
import styles from './IngredientsCard.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from "react-dnd";
import { useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DROP_INGREDIENT } from '../../services/types'

  function IngredientsCard ({imglink, price, name, item}) {

    const { main, bun } = useSelector(store => ({
    bun: store.constructorIngredients.bun,
    main: store.constructorIngredients.main,
  }));

    const count = useMemo(() => {
      if (item.type === 'bun' && item._id === bun._id) return 2
      else {
        let countIng = 0;
        main.map(ing => {
          if(ing._id === item._id) countIng +=1
        });
        return countIng;
      }
    }, [main, bun, item]);

    const [, drag] = useDrag(() => ({
      type: DROP_INGREDIENT,
      item: item,
    }));

    return (<>
    <img src={imglink} alt={name} className={styles.image + " pl-4"} ref={drag}/>
    <div className={styles.price + " mt-2 mb-2"}>
      <span className="pr-2 text text_type_digits-default">{price}</span>
      <CurrencyIcon type="primary"/>
    </div>
    <p className={styles.title}>{name}</p>
    {count > 0 && <Counter count={count} size="default"/>}
  </>
  )}

  IngredientsCard.propTypes = {
    name: PropTypes.string.isRequired,
    imglink: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
  }

export default IngredientsCard; 


  