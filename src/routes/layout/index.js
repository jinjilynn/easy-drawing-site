import React, { useEffect } from 'react';
import { useModel } from 'dva-react-hook';
import Menu from './menu'
import Style from './index.less'

function Layout(props) {
    const [{ value: menuShink }, setMenuShink] = useModel('menuShink');
    const [{ value: lang }, setLang ] = useModel('lang');
    const [ { value: history } ] = useModel('history')
    useEffect(() => {
        const width = window.innerWidth;
        if (width < 1200) setMenuShink(true)
    }, [])
    const homePage = () => {
        window.location.href = ('https://github.com/jinjilynn/easy-drawing')
    }
    const switchLang = () => {
        const l = lang === 'en' ? 'zh' :'en'
        setLang(l);
    }
    return <div className={Style['layout-container']}>
        <div className={Style['header']}>
            <i onClick={homePage} className="ge-iconfont ge-diqiu" />
            <span>Easy Drawing</span>
            <span onClick={switchLang} className={Style['lang']}><i onClick={homePage} className="ge-iconfont ge-language" />{lang === 'en' ? '简体中文' : 'English'}</span>
        </div>
        <div className={Style['content-container']}>
            <div style={{ width: `${menuShink ? '6em' : '18%'}` }} className={Style['sider']}>
                <Menu itemList={props.menu} />
            </div>
            <div style={{ width: `${menuShink ? 'calc(100% - 6em)' : '82%'}` }} className={Style['content']}>
                {
                    props.children
                }
            </div>
        </div>
    </div>
}

export default Layout;