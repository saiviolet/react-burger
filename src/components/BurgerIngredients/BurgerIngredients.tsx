import React, { useState } from "react";
import { nanoid } from 'nanoid';
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
function BurgerIngredients () {
  const [current, setCurrent] = useState('one');
    return ( 
    <div className={styles.block}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Three
      </Tab>
    </div>
    </div>
    
    );
  }

export default BurgerIngredients 


  