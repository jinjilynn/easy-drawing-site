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
            [116.172003, 39.999001],
            [116.726761, 39.999001],
            [116.726761, 40.27970263227987],
            [116.172003, 40.27970263227987]
        ],
        fillStyle: '#fef7ef',
        strokeStyle: 'gray'
    }
    const scatter1 = {
        point: [116.172003, 39.999001],
        color: 'red',
        mode: 'static'
    }
    const scatter2 = {
        point: [116.726761, 39.999001],
        color: 'black',
        mode: 'static'
    }
    const scatter3 = {
        point: [116.726761, 40.27970263227987],
        color: 'blue',
        mode: 'static'
    }
    const scatter4 = {
        point: [116.172003, 40.27970263227987],
        color: 'yellow',
        mode: 'static'
    }
    return <Card>
        {
            lang === 'en' &&
            <div className={style['container']}>
                <h1>size</h1>
                This component receives six props: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>texts</em>、<em>zIndex</em>、<em>size</em>.
            <br />
                <br />
                <em>areas</em>、<em>scatters</em>、<em>texts</em> and <em>paths</em> are Array types, <em>zIndex</em> is Object type and <em>size</em> is String type.
            <br />
                <br />
                They are responsible for rendering graphics, discrete symbols, dynamic paths, texts, setting z-index of them and size model.
            <br />
                <br />
                The size is responsible for setting the size model, the only value of it is 'cover'. If you don't set it, it's not 'cover' by default.
            <br />
                <br />
                let's see below
            <br />
                <br />
                <red>covered:</red>
                <Highlight>
                    {`
<EasyDrawing size="cover" areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                `}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '50em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing size="cover" areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                </div>
                <br />
                <red>not covered:</red>
                <Highlight>
                    {`
<EasyDrawing areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                `}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '50em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                </div>
            </div>}
            {
            lang === 'zh' &&
            <div className={style['container']}>
                <h1>size</h1>
                这个组件一共接收6个props属性: <em>areas</em>、<em>scatters</em>、<em>paths</em>、<em>texts</em>、<em>zIndex</em>、<em>size</em>.
            <br />
                <br />
                <em>areas</em>、<em>scatters</em>、<em>texts</em> 和 <em>paths</em> 是Array类型, <em>zIndex</em> 是Object类型, <em>size</em> 是一个字符串.
            <br />
                <br />
                它们分别负责渲染图形、符号、路径、文本、设置层叠关系和地图的size模式
            <br />
                <br />
                size是负责设置画布大小模式的，唯一的一个值是cover
                <br />
                <br />
                <red>covered:</red>
                <Highlight>
                    {`
<EasyDrawing size="cover" areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                `}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '50em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing size="cover" areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                </div>
                <br />
                <red>not covered:</red>
                <Highlight>
                    {`
<EasyDrawing areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                `}
                </Highlight>
                <div style={{ marginTop: '1em', height: '30em', width: '50em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[scatter1, scatter2, scatter3, scatter4]} />
                </div>
            </div>}
    </Card>
}

export default ZIndex;