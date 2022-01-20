import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor ({data} : any) {
  let total = 0;
  //для тестового заполнения (выбранные инг)
  const someIngr = data.slice(5,12).map((item: any) => {
    total += item.price;
    return (<li className={styles.item + " mr-2 mt-4 mb-4 " + styles.flex} key={item._id}>
      <div className=""><DragIcon type="primary" /></div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
      />
    </li>
    )
  });
  return ( <>
  <div className={styles.block}>
    <div className={styles.ingr + " pt-25 mr-4 "}>
      <div className={styles.item+ " mr-4 "}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={'https://code.s3.yandex.net/react/code/bun-01.png'}
      />
      </div>
      {/* дальше то, то можно изменить! и для этого блока скрол */}
      <ul className={styles.list}>
        {someIngr}
      </ul>
      <div className={styles.item +" mr-4 "}>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={'https://code.s3.yandex.net/react/code/bun-01.png'}
      />
      </div>
      {/* итого */}
      <div className={styles.total + " mt-10 mr-4"}>
        <div className="pr-10">
          <span className="text text_type_digits-medium pr-2">{total}</span>
          <div className={styles.icon}><CurrencyIcon type="primary" /></div>
        </div>
        <Button type="primary" size="large">
        Оформить заказ
        </Button>
      </div>
  </div>
</div>
</>
)}

  BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string,
      })
    )
  };

export default BurgerConstructor 