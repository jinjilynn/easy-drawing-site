import React from 'react';
import Preface from '../routes/preface';
import Coordinate from '../routes/coordinate';
import Areas from '../routes/areas';
import Scatters from '../routes/scatters';
import Paths from '../routes/paths';

export default [
    {
        name:'Preface',
        icon:'ge-mr',
        path:'/preface',
        component:<Preface />,
        models:null
    },
    {
        name:'coordinate',
        icon:'ge-igs',
        path:'/coordinate',
        component:<Coordinate />,
        models:null
    },
    {
        name:'areas',
        icon:'ge-ct',
        path:'/areas',
        component: <Areas />,
        models:null
    },
    {
        name:'scatters',
        icon:'ge-ct',
        path:'/scatters',
        component: <Scatters />,
        models:null
    },
    {
        name:'paths',
        icon:'ge-ct',
        path:'/paths',
        component: <Paths />,
        models:null
    }
]