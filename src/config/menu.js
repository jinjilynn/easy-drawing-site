import React from 'react';
import Preface from '../routes/preface';
import Coordinate from '../routes/coordinate';
import Areas from '../routes/areas';
import Scatters from '../routes/scatters';
import Paths from '../routes/paths';
import ZIndex from '../routes/zindex';
import Size from '../routes/size';
import Texts from '../routes/texts';

export default [
    {
        name:'Preface',
        icon:'ge-qianyan',
        path:'/preface',
        component:<Preface />,
        models:null
    },
    {
        name:'coordinate',
        icon:'ge-zuobiao',
        path:'/coordinate',
        component:<Coordinate />,
        models:null
    },
    {
        name:'areas',
        icon:'ge-area',
        path:'/areas',
        component: <Areas />,
        models:null
    },
    {
        name:'scatters',
        icon:'ge-scatter',
        path:'/scatters',
        component: <Scatters />,
        models:null
    },
    {
        name:'paths',
        icon:'ge-migong',
        path:'/paths',
        component: <Paths />,
        models:null
    },
    {
        name:'texts',
        icon:'ge-pen',
        path:'/texts',
        component: <Texts />,
        models:null
    },
    {
        name:'zIndex',
        icon:'ge-zindex',
        path:'/z-index',
        component: <ZIndex />,
        models:null
    },
    {
        name:'size',
        icon:'ge-quanping',
        path:'/size',
        component: <Size />,
        models:null
    }
]