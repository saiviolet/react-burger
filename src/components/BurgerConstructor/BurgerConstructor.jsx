import {useState, useContext, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';

import styles from './BurgerConstructor.module.css';
import {BASEURL, propTypesForIngridients}  from '../../utils/constants';
import {IngredientsContext} from '../../utils/context';

function BurgerConstructor () {

  const [order, setOrder] = useState(false);
  const {data, setData} = useContext(IngredientsContext);
  const [orderNumber, setOrderNumber] = useState('');


  function showOrderDetails (indredients) {
    const postIngredients = indredients.map (item => {
      return item._id;
    });

    const aaaa = useCallback(
      () => {
        async function getOrderNumber (url) {
          const res = await fetch(`${url}/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'ingredients': postIngredients,
            })
          });
        if (res.ok) return res.json();
        return Promise.reject(res.status);
      }
      getOrderNumber(BASEURL)
          .then( number  => setOrderNumber(number.order.number))
          .then (number => {
            // setOrderNumber(number)
            // console.log(orderNumber);
          })
          .catch((err) => console.log(err))
      },
      [indredients],
    )
    
  // Подключитесь к API =============>
  return order && (
      <Modal onClose = {() => setOrder(false)}>
        <OrderDetails orderNumber={orderNumber}/>
      </Modal>
    )}

  let bunPrice = 0, mainPrice = 0;

  //рандомные ингредиенты
  const someIngredients = useMemo( () => data.slice(0,14), [data]);

  //выбранная булка
  const bun = useMemo( () => {
    return someIngredients.map(item => {
      let activeBun;
      if (item.type === 'bun') {
        activeBun = {...item};
        bunPrice = item.price * 2;
      }
      return activeBun;
    }).filter((element) => element !== undefined)[0]
  }, [someIngredients]);

  //булка верх для вставки

  const bunTop = bun !== undefined ? (
    <div className={styles.item+ " mr-4 "}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={bun.name + ' (верх)'}
        price={bun.price}
        thumbnail={bun.image_mobile}
      />
    </div> 
    ) : '';

  //булка низ для вставки
  const bunBottom = bun !== undefined ? (
    <div className={styles.item +" mr-4 "}>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={bun.name + ' (низ)'}
        price={bun.price}
        thumbnail={bun.image_mobile}
      />
    </div> 
    ) : '';

  //остальные ингредиенты для вставки

  const mainIngredients = useMemo( () => {
    return someIngredients.map(item => {
      let main;
      if (item.type !== 'bun') {
        main = item;
        mainPrice += item.price;
      }
      if (main !== undefined) return (
        <li className={styles.item + " mr-2 mt-4 mb-4 " + styles.flex} key={item._id}>
          <div className=""><DragIcon type="primary" /></div>
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image_mobile}
          />
        </li> 
      )
    }).filter((element) => element !== undefined)
  }, [someIngredients])

  const totalPrice = mainPrice + bunPrice;

  return ( <>
  <div className={styles.block}>
    <div className={styles.ingr + " pt-25 mr-4 "}>
      {bunTop}
      <ul className={styles.list}>
        {mainIngredients}
      </ul>
      {bunTop && bunBottom} 
      <div className={styles.total + " mt-10 mr-4"}>
        <div className="pr-10">
          <span className="text text_type_digits-medium pr-2">{totalPrice}</span>
          <div className={styles.icon}><CurrencyIcon type="primary" /></div>
        </div>
        <Button type="primary" size="large" onClick={aaaa}>
        Оформить заказ
        </Button>
        {showOrderDetails(someIngredients)}
      </div>
  </div>
</div>
</>
)}

  BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(propTypesForIngridients)
  };

export default BurgerConstructor 