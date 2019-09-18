import React from 'react';
import Preface from '../routes/preface';
import Coordinate from '../routes/coordinate';

export default [
    {
        name:'Preface',
        icon:'ge-mr',
        path:'/preface',
        component:<Preface />,
        models:null
    },
    {
        name:'About Coordinate',
        icon:'ge-igs',
        path:'/about-coordinate',
        component:<Coordinate />,
        models:null
    },
    {
        name:'others',
        icon:'ge-ct',
        path:'/other',
        component:<div>To Be Continued...</div>,
        models:null
    }
]