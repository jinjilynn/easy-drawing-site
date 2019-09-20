import React from 'react';
import Card from '../../components/card';
import style from './index.less';

function Preface() {
    return <Card>
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
    </Card>
}

export default Preface;