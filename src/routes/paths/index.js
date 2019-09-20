import React, { useRef } from 'react';
import Highlight from 'react-highlight';
import EasyDrawing from 'easy-drawing';
import Card from '../../components/card';
import style from './index.less';

function Paths(props) {
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
    const linep = {
        points:[
            [-77.044584, 38.895135],
            [-77.044589, 38.894792],
            [-77.043832, 38.894792],
            [-77.043826, 38.894155]
        ],
        color:'#b8e9a4',
    }
    const linep2 = {
        symbol:{
            draw:'fill',
            color:'#75147c',
            scale:.05,
            rotate: 90,
            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
        },
        points:[
            [-77.044584, 38.895135],
            [-77.044589, 38.894792],
            [-77.043832, 38.894792],
            [-77.043826, 38.894155]
        ],
        color:'#b8e9a4',
        animation:'normal'
    }
    return <Card>
        <div className={style['container']}>
            <h1>paths</h1>
            This component receives three props: <em>areas</em>、<em>scatters</em>、<em>paths</em>, and each props is an Array type.
            They are responsible for rendering graphics, discrete symbols, and dynamic paths.
            <br />
            <br />
            The paths prop is responsible for the rendering of dynamic paths, <red>you can't just render paths without rendering areas</red>
            <br />
            <br />
            Dynamic lines and symbols can be defined simultaneously in one path
            <br />
            <br />
            Let's take a look at the complete paths element format
            <Highlight>
{`{
    symbol: { // optional   define dynamic symbol
        delay: number || 0,     // symbol animation delay
        draw: 'stroke | fill', // fill or stroke path
        color: 'color',  // symbol color 
        scale: number || 1, // scale of path
        rotate: number || 0, // rotate of path
        speed: number || 100, ||  // moving speed
        d: svg-path // path string
    },
    points: [],// points through the path
    width: number || 2, // width of line
    color: 'color', // line color
    speed: number || 100, // line speed
    animation: 'alternate | normal', // line is dynamic or static; default is alternate
    delay: number // line animation delay
}`}
        </Highlight>
        now let's add a simple path
        <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                <EasyDrawing areas={[office]} paths={[linep]}  />
        </div>
        <br />
        code:
        <Highlight>
{`
const linep = {
    points:[
        [-77.044584, 38.895135],
        [-77.044589, 38.894792],
        [-77.043832, 38.894792],
        [-77.043826, 38.894155]
    ],
    color:'#b8e9a4'
}
`}
        </Highlight>
        We can also let the plane fly
        <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                <EasyDrawing areas={[office]} paths={[linep2]}  />
        </div>
        code:
        <Highlight>
{`const linep2 = {
    symbol:{
        draw:'fill',
        color:'#75147c',
        scale:.05,
        rotate: 90,
        d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
    },
    points:[
        [-77.044584, 38.895135],
        [-77.044589, 38.894792],
        [-77.043832, 38.894792],
        [-77.043826, 38.894155]
    ],
    color:'#b8e9a4',
    animation:'normal'
}`}
        </Highlight>
        <Highlight>
            {`<EasyDrawing areas={[office]} paths={[linep2]}  />`}
        </Highlight>
        </div>
    </Card>
}

export default Paths;