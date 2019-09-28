import React from 'react';
import { useModel } from 'dva-react-hook';
import Highlight from 'react-highlight';
import EasyDrawing from 'easy-drawing';
import Card from '../../components/card';
import style from './index.less';

function Scatters(props) {
    const [{ value: lang }, setLang] = useModel('lang');
    const office = {
        polygon: [
            [-77.044688, 38.895265],
            [-77.044399, 38.895260],
            [-77.044396, 38.894997],
            [-77.043975, 38.894994],
            [-77.043969, 38.895129],
            [-77.043683, 38.895129],
            [-77.043689, 38.894038],
            [-77.043969, 38.894036],
            [-77.043975, 38.894595],
            [-77.044393, 38.894600],
            [-77.044402, 38.894451],
            [-77.044682, 38.894442]
        ],
        fillStyle: '#fef7ef',
        strokeStyle: 'gray'
    }
    const scatter1 = {
        point: [-77.043837, 38.895011],
        color: '#759cf0',
    }
    const scatter2 = {
        point: [-77.04437, 38.894796],
        color: '#d24b5c',
        size: 20
    }
    const scatter3 = {
        point: [-77.044523, 38.894895],
        path: {
            draw: 'fill',
            color: '#75147c',
            scale: 0.05,
            rotate: 45,
            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
        },
    }
    const scatter4 = {
        point: [-77.04437, 38.894796],
        color: '#d24b5c',
        size: 30,
        mode: 'static',
        mouseOver: {
            color: 'black'
        }
    }
    return <Card>
        {
            lang === 'en' &&
            <div className={style['container']}>
                <h1>scatters</h1>
                This component receives six props: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>texts</em>、<em>zIndex</em>、<em>size</em>.
            <br />
                <br />
                <em>areas</em>、<em>scatters</em>、<em>texts</em> and <em>paths</em> are Array types, <em>zIndex</em> is Object type and <em>size</em> is String type.
            <br />
                <br />
                They are responsible for rendering graphics, discrete symbols, dynamic paths, texts, setting z-index of them and size model.
            <br />
                <br />
                The scatters is responsible for rendering discrete symbols in the canvas, <red>you can't just render scatters without rendering areas</red>
                <br />
                <br />
                Let's take a look at the complete scatters element format
            <Highlight>
                    {`{
    point:[longitude,latitude], /* The position where the symbol is rendered in areas */
    color: 'color', /* color of symbol */
    size: number || 10, /* symbol size */
    mode: 'static | dynamic' // if the value is 'static',it is static
    hidden: boolean || false, /* symbol visibility */
    path: {
        draw: 'stroke | fill',  /* stroke or fill path */
        color: 'color', /* color of path */
        scale: number || 1, /* scale of path */
        rotate: number || 0 /* rotate of path */
        d: svg-path  /* path string */
    }, /* By default, symbol is a circle. Here you can customize the shape of the symbol through path */
    mouseOver: {
        color: 'color', /* color when the mouse is hovering over it */
        moveIn: (e) => {
            /* e is like this: { x, y, screenX, screenY }  x or y represents the offset from the parent element, screenX or screenY represents the offset from the screen */
        },
        moveOut: () => {
            
        }
    },

    mouseClick: (e) => {
        // e is like this: { x, y, screenX, screenY }  x or y represents the offset from the parent element, and screenX or screenY represents the offset from the screen
    }, //triggered when the mouse clicks
    pointAtCanvas: (e) => {
        /* this is a callback function, it will be triggered when the scatter is rendered in canvas */
        /* e is like this: { x, y }  x y represents the offset from the parent element */
    }
}`}         </Highlight>
                1. If you don't set the path property, the rendered scatter will be a dynamic circle by default
            <Highlight>
                    {`const scatter1 = {
    point: [-77.043837,38.895011],
    color: '#759cf0'
}
const scatter2 = {
    point: [-77.04437,38.894796],
    color: '#d24b5c',
    size: 20
}`}
                </Highlight>
                <Highlight>
                    {` <EasyDrawing areas={[office]} scatters={[scatter1,scatter2]} />`}
                </Highlight>
                Symbols of different sizes and colors
            <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter1, scatter2]} />
                </div>
                <br />
                2. If you set the mode is 'static'
            <Highlight>
                    {`
const scatter4 = {
    point: [-77.04437, 38.894796],
    color: '#d24b5c',
    size: 30,
    mode:'static',
    mouseOver: {
        color: 'black', /* color when the mouse is hovering over it */
    }
}
                `}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter4]} />
                </div>
                <br />
                3. If you set the path property, then scatter will render a static path.
           <br />
                <Highlight>
                    {`const scatter3 = {
        point: [-77.044523,38.894895],
        path:{
            draw:'fill',
            color:'#75147c',
            scale:.05,
            rotate: 45,
            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
        }
    }
`}         </Highlight>
                plane rotating 45 degrees
            <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter3]} />
                </div>
                <br />
                <red>warning:</red><em>The d attribute of path must be legal</em>
            </div>
        }
        {
            lang === 'zh' &&
            <div className={style['container']}>
                <h1>scatters</h1>
                这个组件一共接收6个props属性: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>texts</em>、<em>zIndex</em>、<em>size</em>.
            <br />
                <br />
                <em>areas</em>、<em>scatters</em>、<em>texts</em> and <em>paths</em> 是Array类型, <em>zIndex</em> 是Object类型, <em>size</em> 是一个字符串.
            <br />
                <br />
                它们分别负责渲染图形、符号、路径、文本、设置层叠关系和地图的size模式
            <br />
                <br />
                scatters 是负责渲染各种符号的 <red>你不能只渲染scatters属性而不渲染areas属性</red>
                <br />
                <br />
                下面是scatters的完整数据格式
            <Highlight>
                    {`{
    point:[longitude,latitude], /* 符号渲染的位置 */
    color: 'color', /* 符号颜色 */
    size: number || 10, /* 符号大小 */
    mode: 'static | dynamic' // 非自定义的默认符号是否有动画效果
    hidden: boolean || false, /* 可见性 */
    path: {
        draw: 'stroke | fill',  /* 描边还是填充 */
        color: 'color', /* 符号颜色 */
        scale: number || 1, /* 符号缩放大小h */
        rotate: number || 0 /* 符号旋转角度 */
        d: svg-path  /* path路径 */
    }, /* 默认情况下，符号是一个圆，这里可以自定义符号的path路径 */
    mouseOver: {
        color: 'color', /* 鼠标划过时的颜色 */
        moveIn: (e) => {
            /* e 的格式: { x, y, screenX, screenY }  x or y 相对于父元素的定位, screenX or screenY 相对于屏幕定位 */
        },//鼠标经过
        moveOut: () => {
            
        }//鼠标离开
    },//鼠标划过事件

    mouseClick: (e) => {
        // e 的格式: { x, y, screenX, screenY }  x or y 相对于父元素的定位, screenX or screenY 相对于屏幕定位
    }, //鼠标点击事件
    pointAtCanvas: (e) => {
        /* 回调函数，当符号在画布中渲染是调用 */
        /* e { x, y }  x y 表示相对于父元素定位 */
    }
}`}         </Highlight>
                1. 如果没有设置path属性，默认情况下渲染一个动效圆圈
            <Highlight>
                    {`const scatter1 = {
    point: [-77.043837,38.895011],
    color: '#759cf0'
}
const scatter2 = {
    point: [-77.04437,38.894796],
    color: '#d24b5c',
    size: 20
}`}
                </Highlight>
                <Highlight>
                    {` <EasyDrawing areas={[office]} scatters={[scatter1,scatter2]} />`}
                </Highlight>
                不同大小和颜色的符号
            <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter1, scatter2]} />
                </div>
                <br />
                2. 如果mode属性是static
            <Highlight>
                    {`
const scatter4 = {
    point: [-77.04437, 38.894796],
    color: '#d24b5c',
    size: 30,
    mode:'static',
    mouseOver: {
        color: 'black', /* color when the mouse is hovering over it */
    }
}
                `}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter4]} />
                </div>
                <br />
                3. 如果设置了path属性将会渲染path路径
           <br />
                <Highlight>
                    {`const scatter3 = {
        point: [-77.044523,38.894895],
        path:{
            draw:'fill',
            color:'#75147c',
            scale:.05,
            rotate: 45,
            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
        }
    }
`}         </Highlight>
                一个45度角旋转的飞机
            <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter3]} />
                </div>
                <br />
                <red>警告⚠️:</red><em>path的d属性必须是合法的</em>
            </div>
        }
    </Card>
}

export default Scatters;