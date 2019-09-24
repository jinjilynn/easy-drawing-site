import React from 'react';
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
            rotate: 45,
            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
        },
    }
    const scatter4 = {
        point: [-77.04437, 38.894796],
        color: '#d24b5c',
        size: 30,
        mode:'static',
        mouseOver: {
            color: 'black'
        }
    }
    return <Card>
        <div className={style['container']}>
            <h1>scatters</h1>
            This component receives five props: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>zIndex</em>、<em>size</em>.
            <br />
            <br />
            <em>areas</em>、<em>scatters</em> and <em>paths</em> are Array types, <em>zIndex</em> is Object type and <em>size</em> is String type.
            <br />
            <br />
            They are responsible for rendering graphics, discrete symbols, dynamic paths, setting z-index of them and size model.
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
            <br/>
            <red>warning:</red><em>The d attribute of path must be legal</em>
        </div>
    </Card>
}

export default Scatters;