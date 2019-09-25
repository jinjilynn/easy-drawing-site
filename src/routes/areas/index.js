import React, { useRef } from 'react';
import Highlight from 'react-highlight';
import EasyDrawing from 'easy-drawing';
import Card from '../../components/card';
import style from './index.less';

function Areas(props) {
    const tip = useRef(null);
    const office = {
        mouseOver: {
            fillStyle: '#f1a271',
            strokeStyle: 'blue',
            moveIn: (e) => {
                tip.current.style.cssText = 'position:absolute;top:' + e.y + 'px;left:' + e.x + 'px;z-index:9999;display:block;';
            },
            moveOut: () => {
                tip.current.style.cssText = 'display:none';
            }
        },
        name: { text: 'office', color: '#4a8af7', fontSize: '2em' },
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

    const person = {
        point: [-77.044190, 38.894836],
        path: {
            draw: 'fill',
            color: '#d95c4d',
            scale: 0.05,
            rotate: 0,
            d: "M512 85.333333c-164.906667 0-298.666667 133.76-298.666667 298.666667 0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667c0-164.906667-133.76-298.666667-298.666667-298.666667z m0 85.333334c47.146667 0 85.333333 38.186667 85.333333 85.333333s-38.186667 85.333333-85.333333 85.333333-85.333333-38.186667-85.333333-85.333333 38.186667-85.333333 85.333333-85.333333z m0 426.666666c-71.253333 0-133.76-36.48-170.666667-91.52 0.64-56.533333 113.92-87.68 170.666667-87.68s169.813333 31.146667 170.666667 87.68C645.76 560.853333 583.253333 597.333333 512 597.333333z"
        },
    }
    return <Card>
        <div className={style['container']}>
            <h1>areas</h1>
            This component receives six props: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>texts</em>、<em>zIndex</em>、<em>size</em>.
            <br />
            <br />
            <em>areas</em>、<em>scatters</em>、<em>texts</em> and <em>paths</em> are Array types, <em>zIndex</em> is Object type and <em>size</em> is String type.
            <br />
            <br />
            They are responsible for rendering graphics, discrete symbols, dynamic paths, texts, setting z-index of them and size model.
            <br />
            <br />
            The areas prop is responsible for the rendering of various graphics. <red>It determines the coordinate system used by the other two props, so you can just render the areas, but can not just render the sactters or paths.</red>
            <br />
            <br />
            Let's take a look at the complete areas element format
            <Highlight>
{`{
    mouseClick: (e) => {
        // e is like this: { x, y, screenX, screenY }  x or y represents the offset from the parent element, and screenX or screenY represents the offset from the screen
    }, //triggered when the mouse clicks
    mouseOver: {
        fillStyle: 'color', //color filled when the mouse is hovering over it 
        moveIn: (e) => {
            // e is the same as mouseClick's
        }, //triggered when the mouse enters
        moveOut: () => {

        } //Triggered when the mouse leaves
    },
    name: { text: 'string',// displayed in the center of the graph  fontSize:'[string || 12px]', show: [boolean || true] },
    polygon: [
        [-77.044688,38.895265],
        [-77.044399,38.895260],
        [-77.044396,38.894997],
        [-77.043975,38.894994],
        [-77.043969,38.895129],
        [-77.043683,38.895129],
        [-77.043689,38.894038],
        [-77.043969,38.894036],
        [-77.043975,38.894595],
        [-77.044393,38.894600],
        [-77.044402,38.894451],
        [-77.044682,38.894442]
    ],// graphic outline, connecting these points in sequence to form a closed loop
    fillStyle: 'color',  // color filled
    strokeStyle: 'color' // color stroked,
    shadowColor: 'color' // shadow color     
}`}</Highlight>
            All the attributes in the above are optional
            <br />
            <br />
            Now,let's do something interesting: the popup layer will be displayed when the mouse  moves in.
            <div style={{ marginTop: '1em', height: '20em', width: '20em', position: 'relative', background: '#f1f3f5' }}>
                <div ref={tip} className={style['tip']}>
                    <span></span>
                    <span><em>U.S. Office</em></span>
                </div>
                <EasyDrawing areas={[office]} scatters={[person]} />
            </div>
            Code may like this
            <Highlight>
{`const office = {
    mouseOver: {
        fillStyle: '#f1a271',
        moveIn: (e) => {
            tip.current.style.cssText = 'position:absolute;top:' + e.y + 'px;left:' + e.x + 'px;z-index:9999;display:block;'
        },
        moveOut: () => {
            tip.current.style.cssText = 'display:none'
        }
    },
    name: { text: 'office', color: '#4a8af7', fontSize: '2em' },
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
`}</Highlight>
        </div>
    </Card>
}

export default Areas;