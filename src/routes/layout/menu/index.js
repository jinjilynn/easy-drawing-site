import React,{ useEffect,useRef } from 'react';
import { useModel } from 'dva-react-hook';
import Style from './index.less';


function Menu(props) {
        const { itemList = [] } = props;
        const [ {value:history} ] = useModel('history');
        const [ {value:menuShink}, setMenuShink] = useModel('menuShink');
        const container = useRef(null);
        const setShink = () => {
            setMenuShink(!menuShink);
        }
        const itemClick = (path) => {
            return () => {
                history.push(path)
            }
        }
        return <div ref={container} className={Style['sider-container']}>
            <ul>
                {
                    itemList.map(it => {
                        return <li title={it.name || ''} key={it.name} onClick={itemClick(it.path)} style={{ color: history.location.pathname.indexOf(it.path) > -1 ? 'rgb(50,50,50)' : 'rgb(200,200,200)' }} >
                            {it.icon && <i className={`ge-iconfont ${it.icon}`} />}
                            {!menuShink && <span className={Style['menu-text']}>{it.name || ''}</span>}
                        </li>
                    })
                }
            </ul>
            <span onClick={setShink} className={Style['out-in-button']}>{menuShink ? '>>' : '<<'}</span>
        </div>
}

export default Menu;