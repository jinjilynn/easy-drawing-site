import React, { useRef, useEffect, useState } from 'react';
import EasyDrawing from 'easy-drawing';
import { convertToNum, convertToTime, colors } from './tool';


function ShutdownTime(props) {
    const container = useRef(null);
    const [size, setSize] = useState('cover')
    const [option, setOption] = useState({});
    const lon1 = 116.172003;
    const lon2 = 116.726761;
    const lat1 = 39.999001;

    useEffect(() => {
        const styleDom = window.getComputedStyle(container.current);
        const width = (window.parseFloat(styleDom.getPropertyValue('width')));
        const height = (window.parseFloat(styleDom.getPropertyValue('height')));
        const ratio = height / width;
        const span = (lon2 - lon1) * ratio;
        const lat2 = lat1 - span;
        const polygon = [
            [lon1, lat1],
            [lon2, lat1],
            [lon2, lat2],
            [lon1, lat2]
        ]

        const texts = [];
        const scatters = [];
        const paths = [];


        const axisb = 1.001;
        const axist = 0.9996;
        const originPoint = [lon1, lat2 * axisb];
        const xTop = [lon2, lat2 * axisb];
        const yTop = [lon1, lat1 * axist];

        //xarrow
        scatters.push({
            point: xTop,
            path: {
                scale: 0.03,
                color: 'rgb(180,180,180)',
                d: "M786.0224 469.4016a49.7664 49.7664 0 0 1 0 85.1968L289.1776 852.5824a49.5616 49.5616 0 0 1-75.1616-42.5984v-595.968a49.5616 49.5616 0 0 1 75.1616-42.5984l496.8448 297.984z"
            }
        })

        //yarrow
        scatters.push({
            point: yTop,
            path: {
                scale: 0.03,
                rotate: -90,
                color: 'rgb(180,180,180)',
                d: "M786.0224 469.4016a49.7664 49.7664 0 0 1 0 85.1968L289.1776 852.5824a49.5616 49.5616 0 0 1-75.1616-42.5984v-595.968a49.5616 49.5616 0 0 1 75.1616-42.5984l496.8448 297.984z"
            }
        })

        //xaxis
        paths.push({
            points: [
                originPoint,
                xTop
            ],
            width: 2.5,
            color: 'rgb(180,180,180)',
            animation: 'normal',
        })

        //yaxis
        paths.push({
            points: [
                originPoint,
                yTop
            ],
            width: 2.5,
            color: 'rgb(180,180,180)',
            animation: 'normal',
        })

        //init 
        const areas = [{
            polygon,
            fillStyle: 'transparent',
            strokeStyle: 'transparent'
        }]

        const xAxis = {
            type: 'grouping',
            data: [
                'CT1',
                'CT2',
                'CT3',
                'CT4',
                'CT5'
            ]
        };

        const yAxis = {
            type: 'time' //or catagory
        }

        const data = [
            ['18:21:12', '18:33:12', '18:23:12', '16:11:20', '19:13:13', '18:23:12', '17:35:45'],
            ['18:33:12', '18:43:12', '18:23:12', '16:01:10', '19:13:13', '18:23:12', '17:35:45'],
            ['18:43:12', '18:53:12', '18:23:12', '16:31:20', '19:13:13', '18:23:12', '17:35:45'],
            ['18:53:12', '18:13:12', '18:23:12', '16:21:20', '21:13:13', '18:23:12', '17:35:45'],
            ['18:03:12', '18:03:12', '18:23:12', '16:41:05', '20:13:13', '18:23:12', '17:35:45']
        ]

        let xspan = 0;

        //render legend and xAxis
        if (xAxis.type === 'grouping') {
            const xdata = xAxis.data;
            if (!Array.isArray(xdata)) return;
            xspan = (lon2 - lon1) / xdata.length;
            xdata.forEach((it, index) => {
                const x = (lon1 + index * xspan + lon1 + (index + 1) * xspan) / 2;
                const y = lat1 * axist;
                const y2 = lat2 * 1.0004
                texts.push({
                    point: [x * 1.0003, y],
                    size: '.5em',
                    text: it,
                    color: '#fff'
                });
                texts.push({
                    point: [x, y2],
                    size: '.5em',
                    text: it,
                    color: '#fff'
                });
                scatters.push({
                    point: [x, y],
                    color: colors[index],
                    size: props.fontSize * 0.4,
                    mode: 'static'
                })
            })
        }

        let maxValue = null;
        let minValue = null;
        const vbottom = 1.002 * lat2;
        const vtop = 0.9985 * lat1;
        if (yAxis.type === 'time' && xAxis.type === 'grouping') {
            data.forEach(it => {
                it.forEach(item => {
                    const time = convertToNum(item);
                    maxValue === null ? (maxValue = time) : (maxValue = Math.max(maxValue, time));
                    minValue === null ? (minValue = time) : (minValue = Math.min(minValue, time));
                })
            });
            data.forEach((it, index) => {
                const lonspan = xspan / it.length;
                it.forEach((item, itemIndex) => {
                    const time = convertToNum(item);
                    const span = time - minValue;
                    const percent = span / (maxValue - minValue);
                    const lat = (vtop - vbottom) * percent + vbottom;
                    const lon = lonspan * (itemIndex + 1) + lon1 + xspan * index;
                    scatters.push({
                        point: [lon, lat],
                        color: colors[index],
                        size: props.fontSize * 0.25,
                        mode: 'static'
                    })
                })
            });
        }

        //add value to yAxis
        texts.push({
            point: [lon1 * 0.9999, vbottom],
            size: '.5em',
            text: convertToTime(minValue),
            color: '#fff',
            align: 'right'
        })
        texts.push({
            point: [lon1 * 0.9999, vtop],
            size: '.5em',
            text: convertToTime(maxValue),
            color: '#fff',
            align: 'right'
        })
        texts.push({
            point: [lon1 * 0.9999, (vtop + vbottom) / 2],
            size: '.5em',
            text: convertToTime((maxValue + minValue) / 2),
            color: '#fff',
            align: 'right'
        })
        paths.push({
            points: [
                [lon1, (vtop + vbottom) / 2],
                [lon2, (vtop + vbottom) / 2]
            ],
            width: 1,
            color: 'rgb(210,210,210)',
            animation: 'normal',
        })


        setOption({ areas, texts, scatters, paths })
        setSize(width >= height * 1.3 ? 'cover' : 'none')

    }, [props.fontSize])
    return <div ref={container} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <EasyDrawing size={size} areas={option.areas} texts={option.texts} scatters={option.scatters} paths={option.paths} />
    </div>

}

export default ShutdownTime;