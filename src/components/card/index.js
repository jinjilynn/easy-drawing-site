import React from 'react';
import style from './index.less';

function Card(props){
    return <div className={style['card-container']}>
        {props.children}
    </div>
}

export default Card;