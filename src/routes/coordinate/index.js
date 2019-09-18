import React from 'react';
import EasyDrawing from 'easy-drawing';
import Highlight from 'react-highlight';
import Card from '../../components/card';
import example from '../../assets/imgs/example.png';
import style from './index.less';

function Preface() {
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
        fillStyle: '#fcf7f2',
        strokeStyle: 'gray'
    }

    const person = {
        point: [-77.044190, 38.894836],
        path: {
            draw: 'fill',
            color: '#d95c4d',
            scale: 0.05,
            rotate: 0,
            d: "M512 85.333333c-164.906667 0-298.666667 133.76-298.666667 298.666667 0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667c0-164.906667-133.76-298.666667-298.666667-298.666667z m0 85.333334c47.146667 0 85.333333 38.186667 85.333333 85.333333s-38.186667 85.333333-85.333333 85.333333-85.333333-38.186667-85.333333-85.333333 38.186667-85.333333 85.333333-85.333333z m0 426.666666c-71.253333 0-133.76-36.48-170.666667-91.52 0.64-56.533333 113.92-87.68 170.666667-87.68s169.813333 31.146667 170.666667 87.68C645.76 560.853333 583.253333 597.333333 512 597.333333z"
        },
    }
    return <Card>
        <div className={style['container']}>
            In this component, all the points we use are longitude and latitude coordinates.
            <br />
            Its format is like this
            <Highlight className="tomorrow-night-blue">
                const point = [longitude,latitude]
            </Highlight>
            As you can see, each point is an array of two elements, and the first element of the array is longitude, and the second element of the array is latitude.
            <br />
            <br />
            So it may be like this
            <Highlight className="tomorrow-night-blue">
                <div style={{ whiteSpace: 'pre' }}>
                    {`
                        const us_office = [
                            [-77.044688,38.895265],
                            [-77.044399,38.895260],
                            [-77.044396,38.894997],
                            [-77.043975,38.894994],
                            [-77.043969,38.895129],
                            [-77.043683,38.895129],
                            [-77.043689,38.894038],
                            [-77.043969,38.894036],
                            [-77.043975,38.894595],
                            [-77.044393,38.894600],
                            [-77.044402,38.894451],
                            [-77.044682,38.894442]
                        ]
                        const person = [-77.044190,38.894836]
                    `}
                </div>
            </Highlight>
            It's important to note here that the coordinate format you pick up on google maps is [latitude,longitude],so before you pass this set of coordinates into the component, you need to call  ‘Array.prototype.reverse()’  to format it
            <br />
            <br />
            <img src={example} />
            <br />
            <br />
            Now you have a set of outline coordinates of the U.S. Office of Personnel Management and a person's position.You can simply draw them all out, let's have a try
            <Highlight className="tomorrow-night-blue">
                {`
                        import ReactDOM from 'react-dom';
                        import EasyDrawing from 'easy-drawing';
                        
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
                            fillStyle: '#fcf7f2',
                            strokeStyle: 'gray'
                        }
                    
                        const person = {
                            point: [-77.044190, 38.894836],
                            path: {
                                draw: 'fill',
                                color: '#d95c4d',
                                scale: 0.05,
                                rotate: 0,
                                d: "M512 85.333333c-164.906667 0-298.666667 133.76-298.666667 298.666667 0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667c0-164.906667-133.76-298.666667-298.666667-298.666667z m0 85.333334c47.146667 0 85.333333 38.186667 85.333333 85.333333s-38.186667 85.333333-85.333333 85.333333-85.333333-38.186667-85.333333-85.333333 38.186667-85.333333 85.333333-85.333333z m0 426.666666c-71.253333 0-133.76-36.48-170.666667-91.52 0.64-56.533333 113.92-87.68 170.666667-87.68s169.813333 31.146667 170.666667 87.68C645.76 560.853333 583.253333 597.333333 512 597.333333z"
                            },
                        }
                        ReactDOM.render(
                            <EasyDrawing
                                areas={[
                                    office
                                ]}
                                scatters={[
                                    person
                                ]}
                            />, 
                            document.getElementById("root")
                        )
                    `}
            </Highlight>
            Rendering results:
            <div style={{ height: '20em', width: '20em', position: 'relative', background: '#f1f3f5' }}>
                <EasyDrawing
                    areas={[
                        office
                    ]}
                    scatters={[
                        person
                    ]}
                />
            </div>
        </div>
    </Card>
}

export default Preface;