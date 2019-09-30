import React from 'react';
import { useModel } from 'dva-react-hook';
import Card from '../../components/card';
import style from './index.less';

function Preface() {
    const [{ value: lang }] = useModel('lang');
    return <Card>
        {
            lang === 'en' &&
            <div className={style['container']}>
                This is a react component that can draw arbitrary graphics and motion path in canvas by using latitude and longitude easily just like copying.
            <br />
                <br />
                In general, even if you master the canvas and svg well, you will still face many challenges in the drawing process. The biggest challenge is how to get the coordinates easily, which including the vertex coordinates of various shapes, and any coordinates you want to know relative to a reference. So how relaxed it will be if you can draw a graph in canvas as easily as copy a graph.
            <br />
                <br />
                In view of this, I chose to draw using latitude and longitude. Here,the longitude is the X coordinate, and the latitude is the y coordinate.
            <br />
                <br />
                So you can pick up a set of coordinate points of a graph that you see or in your mind on
             <a href="https://www.google.com/maps">Google maps </a>
                With these points, you can draw the corresponding graphics.
             <br />
                <br />
                <red>The first thing that should be emphasized is:</red>
                <em>This component is positioned relative to the parent element and is full of parent elements,so the parent element is best or should be set the position property to non-static and provide values for width and height</em>
            </div>
        }
        {
            lang === 'zh' &&
            <div className={style['container']}>
                这是一个react组件，通过它你可以在画布中使用经纬度绘制任意图形和动态路径，就像小时候临摹图画一样容易。
            <br />
                <br />
                通常情况下，就算你对canvas和svg掌握的已经很好了，但是在绘制图形过程中仍然会面临各种挑战，其中最大的挑战就是坐标，比如说各种形状的轮廓坐标或者图形内部某个点的位置坐标，一般来说这种类型的坐标要经过或复杂或简单的数学算法得到，所以有时候我就寻思着要是可以像临摹图画一样，不用经过计算就能画出来岂不是美滋滋。
            <br />
                <br />
                基于这种想法，我选择了使用经纬度绘图的思路，这里经度就是x坐标，纬度就是y坐标
            <br />
                <br />
                这样你就可以借助<a href="http://api.map.baidu.com/lbsapi/getpoint/index.html">百度拾取坐标系统 </a>画出任何在地图上出现的图形，或者在你想象的图形。
             <br />
                <br />
                <red>这里先要强调一点的是:</red>
                <em>这个react组件渲染时是相对于它的父元素来的，它会撑满父元素，所以你最好显示的声明父元素的定位属性为relative或者absolute，反正不是static就行，然后为父元素赋值width和height属性</em>
            </div>
        }
    </Card>
}

export default Preface;