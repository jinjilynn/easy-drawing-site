import React from 'react';
import { useModel } from 'dva-react-hook';
import Highlight from 'react-highlight';
import EasyDrawing from 'easy-drawing';
import Card from '../../components/card';
import style from './index.less';

function ZIndex(props) {
    const [{ value: lang }] = useModel('lang');
    const office = {
        polygon: [
            [116.172003, 39.999001],
            [116.726761, 39.999001],
            [116.726761, 40.27970263227987],
            [116.172003, 40.27970263227987]
        ],
        fillStyle: '#fef7ef',
        strokeStyle: 'gray'
    }
    const scatter1 = {
        point: [116.172003, 39.999001],
        color: 'red',
        mode: 'static'
    }
    const scatter2 = {
        point: [116.726761, 39.999001],
        color: 'black',
        mode: 'static'
    }
    const scatter3 = {
        point: [116.726761, 40.27970263227987],
        color: 'blue',
        mode: 'static'
    }
    const scatter4 = {
        point: [116.172003, 40.27970263227987],
        color: 'yellow',
        mode: 'static'
    }
    return <Card>
        {
            lang === 'en' &&
            <div className={style['container']}>
                <h1>geoType</h1>
                Determines whether the Mercator  or Gaussian  is based on when longitude and latitude are converted to flat coordinates
                <br />
                The default is ’mercator‘
                <br />
                <Highlight>
                    {`
<EasyDrawing size="gauss"  />
                `}
                </Highlight>
               
            </div>}
            {
            lang === 'zh' &&
            <div className={style['container']}>
                <h1>geoType</h1>
                决定了在当经纬度转换为平面坐标时，是按照墨卡托模型还是高斯模型
                <br />
                默认为墨卡托转换
                <br />
                <Highlight>
                    {`
<EasyDrawing size="gauss"  />
                `}
                </Highlight>
            </div>}
    </Card>
}

export default ZIndex;