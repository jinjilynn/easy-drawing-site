import React,{useRef,useEffect} from 'react';
import anime from 'animejs';
import {useModel} from 'dva-react-hook';
import Canvas from '../../components/canvas';
import registClick from './fun.js'
import style from './index.less';

function Welcome() {
        const canvas = useRef(null);
        const welcome = useRef(null);
        const [{value:hasIn},setHasIn] = useModel('isIn');
        useEffect(()=>{
            if (canvas.current.canvas) {
                registClick(canvas.current.canvas)
            }
        },[]);
        useEffect(() => {
            if (welcome.current) {
                    hasIn && anime({
                        targets: welcome.current,
                        translateY: '-100%',
                        duration: 2000,
                        easing: 'spring(1, 80, 10, 0)'
                    })
                    !hasIn && anime({
                        targets: welcome.current,
                        translateY: '0%',
                        duration: 2000,
                        easing: 'spring(1, 80, 10, 0)'
                    })
            }
        },[hasIn]);
        const goIn = () => {
            setHasIn(true);
        };
        return <div ref={welcome} className={style['welcome-container']} >
            <i className={`${style['welcome-logo']} ge-iconfont ge-diqiu`} />
            <span className={style['welcome-text']} >Easy Drawing</span>
            <span onClick={goIn} className={style['enter-text']}>PRESS ENTER</span>
            <div className={style['anime-click']}>
                <Canvas ref={canvas} />
            </div>
        </div>
}

export default Welcome;