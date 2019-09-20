import React from 'react'
import EasyDrawing from 'easy-drawing';
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
    bld26,
    scatterBld1,
    scatterBld2,
    scatterBld3,
    scatterBld4,
    scatterBld5
} from './ruijin.js'
import style from './index.less'
function NotFound() {
    const outline = {
        polygon: [
            [121.521203, 31.234039],
            [121.536655, 31.234039],
            [121.536655, 31.249491],
            [121.521203, 31.249491],
        ],
        fillStyle: ''
    }
    return <div className={style['not-found']}>
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
                            [121.472774,31.218324],
                            [121.472769, 31.216793],
                            [121.474858, 31.218287],
                        ].reverse(),
                        width: 2,
                        color: '#00add7',
                        speed: 70,
                        animation: 'alternate',
                        delay: 'drfghjk'
                    },
                    {
                        symbol: {
                            draw: 'fill',
                            color:'#DD4B39',
                            scale: 0.05,
                            rotate:-15,
                            speed:50,
                            d: "M960 384H731.42L521.22 16.12A32.028 32.028 0 0 0 493.42 0h-131c-21.26 0-36.6 20.34-30.76 40.78L429.72 384H224l-86.4-115.2c-6.04-8.06-15.54-12.8-25.6-12.8H32.02C11.2 256-4.08 275.56 0.98 295.76L64 512 0.98 728.24C-4.08 748.44 11.2 768 32.02 768H112c10.08 0 19.56-4.74 25.6-12.8L224 640h205.72l-98.06 343.2c-5.84 20.44 9.5 40.8 30.76 40.8h131c11.48 0 22.08-6.16 27.78-16.12L731.42 640H960c70.7 0 192-57.3 192-128s-121.3-128-192-128z"
                        },
                        color:'transparent',
                        points: [
                            [121.473066, 31.216197],
                            [121.475213,31.217646]
                        ]
                    }
                ]
            }

        />
    </div>
}

export default NotFound;