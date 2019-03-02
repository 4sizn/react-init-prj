import React, { Component } from 'react';
import styles from './BattleGround.scss';
import PropTypes from 'prop-types';

const Selector = ({item, onClick}) =>(
    <div className={styles['selector']} onClick={onClick}>
    <div className={styles['selector__title']}>
        {item.title}
        </div>
    <img src='/public/img/404.png'></img>
    </div>
)

const Versus = () =>(
    <div className={styles['versus']}><img src="/public/img/vs.png"></img></div>
)

const Title = ({init, current}) => {
    const title = `${init.title}    ${current}/${init.round}`;
    return(
        <div className={styles['title']}>
        {title}
        </div>
    )
}

export default class BattleGround extends Component {
    state = {
        init : {
            mode : 'single', // signle || tournament
            title : '좋아하는 BJ 뽑기',
            round : 1
        },
        current : 1,
        list :[
            {
                title : "제 1 선택지",
                img : ""
            },
            {
                title : "제 2 선택지",
                img : ""
            }
            // origin
        ],
        newlist:{
            // workedlist
        }
    }
    
    selectorclickhandler = (e) =>{
        console.log(e.currentTarget);
    }

  render() {
      const selectors = this.state.list.map((item, idx)=>
          <Selector key={idx} item = {item} onClick={(e)=>this.selectorclickhandler(e)}></Selector>
      )
    return (
      <div className={styles['battleground']}>
        <Title init={this.state.init} current={this.state.current}></Title>
        <Versus></Versus>
          <div className={styles['battleground__selectors']}>
          {selectors}
        </div>
      </div>
    )
  }
}
