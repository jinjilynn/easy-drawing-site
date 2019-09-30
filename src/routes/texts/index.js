import React from 'react';
import { useModel } from 'dva-react-hook';
import Highlight from 'react-highlight';
import EasyDrawing from 'easy-drawing';
import Card from '../../components/card';
import style from './index.less';

function ZIndex(props) {
    const [{ value: lang }] = useModel('lang');
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
        mode: 'static',
    }
    const text = {
        text: 'easy-drawing',
        point: [-77.04437, 38.894796],
        color: 'black',
        size: '1em'
    }
    return <Card>
        {
            lang === 'en' &&
            <div className={style['container']}>
                <h1>texts</h1>
                This component receives six props: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>texts</em>、<em>zIndex</em>、<em>size</em>.
            <br />
                <br />
                <em>areas</em>、<em>scatters</em>、<em>texts</em> and <em>paths</em> are Array types, <em>zIndex</em> is Object type and <em>size</em> is String type.
            <br />
                <br />
                They are responsible for rendering graphics, discrete symbols, dynamic paths, texts, setting z-index of them and size model.
            <br />
                <br />
                The texts is responsible for rendering texts in the canvas, <red>you can't just render texts without rendering areas</red>
                <br />
                <br />
                Let's take a look at the complete scatters element format
            <Highlight>
                    {`{
    text: string, /* The string rendered in canvas */
    point:[longitude,latitude], /* The position where the text is rendered in canvas */
    color: 'color', /* color of text */
    size: string || '12px', /* font-size */
    align:'', /* start | center | end */
    vertical:'' /* top | middle | bottom */
    
}`}         </Highlight>
                example
            <Highlight>
                    {`
const text = {
    text: 'easy-drawing',
    point: [-77.04437, 38.894796],
    color: 'black',
    size:'.5em'
}
                `}
                </Highlight>
                <Highlight>
                    {` <EasyDrawing areas={[office]} scatters={[scatter1]} texts={[text]} />`}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter1]} texts={[text]} />
                </div>
            </div>}
            {
            lang === 'zh' &&
            <div className={style['container']}>
                <h1>texts</h1>
                这个组件一共接收6个props属性: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>texts</em>、<em>zIndex</em>、<em>size</em>.
            <br />
                <br />
                <em>areas</em>、<em>scatters</em>、<em>texts</em> 和 <em>paths</em> 是Array类型, <em>zIndex</em> 是Object类型, <em>size</em> 是一个字符串.
            <br />
                <br />
                它们分别负责渲染图形、符号、路径、文本、设置层叠关系和地图的size模式
            <br />
                <br />
                texts是负责渲染文本的 <red>你不能只渲染texts属性而不渲染areas属性</red>
                <br />
                <br />
                下面是texts的完整数据格式
            <Highlight>
                    {`{
    text: string, /* 需要渲染的文本 */
    point:[longitude,latitude], /* 文本位置 */
    color: 'color', /* 文本颜色 */
    size: string || '12px', /* 文本大小 */
    align:'', /*文本水平对齐 start | center | end */
    vertical:'' /*文本垂直对齐偏移 top | middle | bottom */
    
}`}         </Highlight>
                例子
            <Highlight>
                    {`
const text = {
    text: 'easy-drawing',
    point: [-77.04437, 38.894796],
    color: 'black',
    size:'1em'
}
                `}
                </Highlight>
                <Highlight>
                    {` <EasyDrawing areas={[office]} scatters={[scatter1]} texts={[text]} />`}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '30em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter1]} texts={[text]} />
                </div>
            </div>}
    </Card>
}

export default ZIndex;