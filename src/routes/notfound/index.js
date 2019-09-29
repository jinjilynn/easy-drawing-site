import React from 'react'
import EasyDrawing from 'easy-drawing';
import Chart from './shutdowntime';
import { colors } from './shutdowntime/tool';
import {
    bld1,
    bld2,
    bld3,
    bld4,
    bld5,
    bld6,
    bld7,
    bld8,
    bld9,
    bld10,
    bld11,
    bld12,
    bld13,
    bld14,
    bld15,
    bld16,
    bld17,
    bld18,
    bld19,
    bld20,
    bld21,
    bld22,
    bld23,
    bld24,
    bld25,
    scatterBld1,
    scatterBld2,
    scatterBld3,
    scatterBld4,
    scatterBld5
} from './ruijin.js';
import world from './world';
import style from './index.less'
function NotFound() {
    const dom = React.useRef(null)
    const [size, setSize] = React.useState(0);
    const worldAreas = [];
    world.features.forEach(it => {
        if(it.geometry.type === 'Polygon'){
            worldAreas.push({
                polygon:it.geometry.coordinates[0],
                fillStyle:colors[Math.floor(Math.random() * 25)]
            })
    
        }else if(it.geometry.type === 'MultiPolygon'){
            it.geometry.coordinates.forEach(item => {
                worldAreas.push({
                    polygon:item[0],
                    fillStyle:colors[Math.floor(Math.random() * 25)]
                })
            })
        }
    });
    React.useEffect(() => {
        const w = dom.current.clientWidth;
        const h = dom.current.clientHeight;
        const m = (w + h) / 30;
        setSize(m);
    })
    return <div className={style['not-found']}>
        <div className={style['world-map']}>
            <div className={style['map-title']}>you can use 'easy-drawing' to draw a world map</div>
            <div className={style['map-content']}>
                <EasyDrawing 
                    size="cover" 
                    areas={worldAreas}
                    paths={
                        [
                            {
                                points: [
                                   [40.280455, 116.163251].reverse(),
                                   [82.062459, -77.056620].reverse()
                                ],
                                color: 'transparent',
                                speed: 70,
                                animation: 'normal',
                                symbol:{
                                    draw: 'fill',
                                    color: '#fff',
                                    scale: 0.02,
                                    rotate: -135,
                                    speed: 170,
                                    d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
                                }
                            }
                        ]
                    }
                    scatters={[
                        {
                            point: [60.093812, 106.937426].reverse(),
                            color: '#fff',
                        }
                    ]}
                />
            </div>
        </div>
        <div className={style['map']}>
            <span className={style['map-title']}>you can use 'easy-drawing' to draw a local map</span>
            <div className={style['map-content']}>
                <EasyDrawing
                    areas={
                        [
                            bld1,
                            bld2,
                            bld3,
                            bld4,
                            bld5,
                            bld6,
                            bld7,
                            bld8,
                            bld9,
                            bld10,
                            bld11,
                            bld12,
                            bld13,
                            bld14,
                            bld15,
                            bld16,
                            bld17,
                            bld18,
                            bld19,
                            bld20,
                            bld21,
                            bld22,
                            bld23,
                            bld24,
                            bld25,
                        ]
                    }
                    scatters={
                        [
                            scatterBld1,
                            scatterBld2,
                            scatterBld3,
                            scatterBld4,
                            scatterBld5
                        ]
                    }
                    paths={
                        [
                            {
                                points: [
                                    [121.473102, 31.218975],
                                    [121.472774, 31.218324],
                                    [121.472769, 31.216793],
                                    [121.474422, 31.218451],
                                    [121.474858, 31.218287],
                                ].reverse(),
                                width: 2,
                                color: '#00add7',
                                speed: 70,
                                animation: 'alternate',
                                delay: 'drfghjk'
                            }
                        ]
                    }
                />
            </div>
        </div>
        <div ref={dom} className={style['chart']}>
            <span className={style['map-title']}>you can use 'easy-drawing' to draw a chart</span>
            <div className={style['map-content']}>
                <Chart fontSize={size} />
            </div>
        </div>
    </div>
}

export default NotFound;