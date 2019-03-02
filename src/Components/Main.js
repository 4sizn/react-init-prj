import React from 'react';
import styles from './Main.scss';
import BattleGround from './BattleGround';

const Main = () => {
  return (
    <div className={styles['main']}>
      <BattleGround></BattleGround>
    </div>
  );
};

export default Main;