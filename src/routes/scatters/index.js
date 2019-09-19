import React, { useRef } from 'react';
import Highlight from 'react-highlight';
import EasyDrawing from 'easy-drawing';
import Card from '../../components/card';
import style from './index.less';

function Scatters(props) {
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
            rotate: 0,
            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
        },
    }
    return <Card>
        <div className={style['container']}>
            <h1>scatters</h1>
            This component receives three props: <em>areas</em>、<em>scatters</em>、<em>paths</em>, and each props is an Array type.
            They are responsible for rendering graphics, discrete symbols, and dynamic paths.
            <br />
            <br />
            The scatters is responsible for rendering discrete symbols in the canvas, you can't just render scatters without rendering areas
            <br />
            <br />
            Let's take a look at the complete scatters data format
            <Highlight>
                {`{
    point:[longitude,latitude],
    color: 'color',
    size: number || 10,
    hidden: boolean || false,
    path: {
        draw: 'stroke | fill',
        color: 'color',
        scale: number,
        rotate: number,
        d: svg-path
    },
    mouseOver: {
        color: 'color',
        moveIn: (e) => {
            // e is like this: { x, y, screenX, screenY }  x y represents the offset from the parent element, screenX, screenY represents the offset from the screen
        },
        moveOut: () => {
            
        }
    },
    pointAtCanvas: (e) => {
        // this is a callback function, it will be triggered when the scatter is rendered in canvas
        // e is like this: { x, y }  x y represents the offset from the parent element
    }
}`}</Highlight>
            If you don't set the path property, the rendered scatter will be a dynamic circle.
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

            <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                <EasyDrawing areas={[office]} scatters={[scatter1, scatter2]} />
            </div>
            If you set the path property, then scatter will render a static path.
<Highlight>
{`const scatter3 = {
        point: [-77.044523,38.894895],
        path:{
            draw:'fill',
            color:'#75147c',
            scale:.05,
            rotate: 0,
            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
        },
}`}
            </Highlight>
            <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                <EasyDrawing areas={[office]} scatters={[scatter3]} />
            </div>
            <red>warning:</red><em>The d attribute of path must be legal</em>
        </div>
    </Card>
}

export default Scatters;