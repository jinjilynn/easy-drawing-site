import React from 'react';
import { useModel } from 'dva-react-hook';
import EasyDrawing from 'easy-drawing';
import Highlight from 'react-highlight';
import Card from '../../components/card';
import example from '../../assets/imgs/example.png';
import style from './index.less';

function Preface() {
    const [{ value: lang }] = useModel('lang');
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
        {
            lang === 'en' &&
            <div className={style['container']}>
                In this component, all the points we use are longitude and latitude coordinates.
            <br />
                <br />
                Its format is like this
            <Highlight >
                    const point = [longitude,latitude]
            </Highlight>
                As you can see, each point is an array of two elements, and the first element of the array is longitude, and the second element of the array is latitude.
            <br />
                <br />
                So it may be like this
            <Highlight >
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
                </Highlight>
                <red>It's important to note</red> here that the coordinate format you pick up on google maps is [latitude,longitude],so before you pass this set of coordinates into the component, you need to call  <green>‘Array.prototype.reverse()’</green>  to format it
            <br />
                <br />
                Now let's do something
            <br />
                <br />
                <img src={example} />
                <br />
                <br />
                now that you have a set of outline coordinates of the U.S. Office of Personnel Management and a person's position, so you can simply draw them all out


            <Highlight >
                    {`
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
                        `}
                </Highlight>
                <Highlight >
                    {`
                        const person = {
                            point: [-77.044190, 38.894836],
                            path: {
                                draw: 'fill',
                                color: '#d95c4d',
                                scale: 0.05,
                                rotate: 0,
                                d: "M512 85.333333c-164.906667 0-298.666667 133.76-298.666667 298.666667 0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667c0-164.906667-133.76-298.666667-298.666667-298.666667z m0 85.333334c47.146667 0 85.333333 38.186667 85.333333 85.333333s-38.186667 85.333333-85.333333 85.333333-85.333333-38.186667-85.333333-85.333333 38.186667-85.333333 85.333333-85.333333z m0 426.666666c-71.253333 0-133.76-36.48-170.666667-91.52 0.64-56.533333 113.92-87.68 170.666667-87.68s169.813333 31.146667 170.666667 87.68C645.76 560.853333 583.253333 597.333333 512 597.333333z"
                            }
                        }
                    `}
                </Highlight>
                <Highlight >
                    {`
                        import ReactDOM from 'react-dom';
                        import EasyDrawing from 'easy-drawing';

                        ReactDOM.render(
                            <EasyDrawing  areas={[office]} scatters={[person]} />, 
                            document.getElementById("root")
                        );
                    `}
                </Highlight>
                Rendering results:
                <br/>
                <br />
            <div style={{ height: '20em', width: '20em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[person]} />,
            </div>
            </div>
        }
                {
            lang === 'zh' &&
            <div className={style['container']}>
                在这个组件中，我们使用的所有的点都是原始的经纬度
            <br />
                <br />
                一个点的格式是这样滋的
            <Highlight >
                    const point = [longitude,latitude]
            </Highlight>
               就像你看到的一样，一个点就是一个数组，数组的第一个元素是经度，数组的第二个元素是纬度
            <br />
                <br />
                所以一组轮廓顶点可能是酱婶儿的
            <Highlight >
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
                </Highlight>
                <red>这里需要强调的是</red> 如你使用的点不是在<a href="http://api.map.baidu.com/lbsapi/getpoint/index.html">百度拾取坐标系统 </a>中拾取，而是从谷歌、腾讯等其他系统中拾取的，那么它们默认情况下是[latitude,longitude]格式的，所以你在使用之前需要使用  <green>‘Array.prototype.reverse()’</green>  转换一下格式,变成经度在前纬度在后的格式。
            <br />
                <br />
                我们现简单试一下
            <br />
                <br />
                <img src={example} />
                <br />
                <br />
                下面是一个有关建筑物轮廓的经纬度坐标和建筑物内部某个位置的坐标


            <Highlight >
                    {`
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
                        `}
                </Highlight>
                <Highlight >
                    {`
                        const person = {
                            point: [-77.044190, 38.894836],
                            path: {
                                draw: 'fill',
                                color: '#d95c4d',
                                scale: 0.05,
                                rotate: 0,
                                d: "M512 85.333333c-164.906667 0-298.666667 133.76-298.666667 298.666667 0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667c0-164.906667-133.76-298.666667-298.666667-298.666667z m0 85.333334c47.146667 0 85.333333 38.186667 85.333333 85.333333s-38.186667 85.333333-85.333333 85.333333-85.333333-38.186667-85.333333-85.333333 38.186667-85.333333 85.333333-85.333333z m0 426.666666c-71.253333 0-133.76-36.48-170.666667-91.52 0.64-56.533333 113.92-87.68 170.666667-87.68s169.813333 31.146667 170.666667 87.68C645.76 560.853333 583.253333 597.333333 512 597.333333z"
                            }
                        }
                    `}
                </Highlight>
                <Highlight >
                    {`
                        import ReactDOM from 'react-dom';
                        import EasyDrawing from 'easy-drawing';

                        ReactDOM.render(
                            <EasyDrawing  areas={[office]} scatters={[person]} />, 
                            document.getElementById("root")
                        );
                    `}
                </Highlight>
                把上面的数据传入组件可以画出
                <br/>
                <br/>
            <div style={{ height: '20em', width: '20em', position: 'relative', background: '#f1f3f5' }}>
                    <EasyDrawing areas={[office]} scatters={[person]} />,
            </div>
            </div>
        }
    </Card>
}

export default Preface;