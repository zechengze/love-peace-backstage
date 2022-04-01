import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../Main/main.scss';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Ticket Orders',
        icon: <i className='bx bx-credit-card-front'></i>,
        to: '/tickets',
        section: 'tickets'
    },
    {
        display: 'Shop Orders',
        icon: <i className='bx bx-shopping-bag'></i>,
        to: '/orders',
        section: 'orders'
    },
    {
        display: 'Charts',
        icon: <i className='bx bx-line-chart'></i>,
        to: '/charts',
        section: 'charts'
    },
    {
        display: 'Shop Stock',
        icon: <i className='bx bxs-cart'></i>,
        to: '/shop',
        section: 'shop'
    },
    {
        display: 'Logout',
        icon: <i className='bx bx-exit'></i>,
        to: '/',
        section: 'logout'
    },
]



const Menu = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            // indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            indicatorRef.current.style.height = `${sidebarItem.clientHeight-10}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);



    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="sidebar__logo">
                    {/* 後臺系統 */}
                    <div className="sidebar__logopic"></div>
                    <img src="https://media.discordapp.net/attachments/677538517949218820/950644247311294515/backlogo2.png" alt="" />
                </div>

                <div ref={sidebarRef} className="sidebar__menu">
                    <div
                        ref={indicatorRef}
                        className="sidebar__menu__indicator"
                        style={{
                            transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                        }}
                    ></div>
                    {
                        sidebarNavItems.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                    <div className="sidebar__menu__item__icon">
                                        {item.icon}
                                    </div>
                                    <div className="sidebar__menu__item__text">
                                        {item.display}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>

        </React.Fragment>
    );
}
export default Menu;