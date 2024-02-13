import { useState } from 'react'
import styles from "./App.module.scss"
import { Link, Outlet } from 'react-router-dom'
import pngIcon from '../../assets/icon.jpg'
import SvgIcon from '../../assets/icon.svg'

export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    // if (__PLATFORM__ === 'desktop') {
    //     return <div>Your platform: Desktop</div>
    // }
    // if (__PLATFORM__ === 'mobile') {
    //     return <div>Your platform: Mobile</div>
    // }
    return (
        <>
            <div className={styles.increase_block}>
                <ul>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                </ul>
                <div>
                    <img src={pngIcon} width={200} style={{ color: 'fff' }} height={200} alt="" />
                    <SvgIcon style={{ width: "200px", height: '200px' }} />
                </div>
                <div>
                    Count: {count}
                </div>
                <button className={styles.btn} onClick={increment}>Increment</button>
                <input type="text" />
                <input type="text" />
                <Outlet />
            </div>
        </>
    )
}

