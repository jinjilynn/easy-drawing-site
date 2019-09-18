import React from 'react';
import { useModel } from 'dva-react-hook';
import Menu from './menu'
import Style from './index.less'

function Layout(props) {
    const [{ value: menuShink }, setMenuShink] = useModel('menuShink');
    return <div className={Style['layout-container']}>
        <div className={Style['header']}>
            <i className="ge-iconfont ge-diqiu" />
            <span>Easy Drawing</span>
        </div>
        <div className={Style['content-container']}>
            <div style={{ width: `${menuShink ? '5em' : '30%'}` }} className={Style['sider']}>
                <Menu itemList={props.menu} />
            </div>
            <div style={{ width: `${menuShink ? 'calc(100% - 5em)' : '70%'}` }} className={Style['content']}>
                {
                    props.children
                }
            </div>
        </div>
    </div>
}

export default Layout;