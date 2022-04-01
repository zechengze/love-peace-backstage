import React from 'react';
// import '../Main/main.scss';

import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <React.Fragment>
            <div className="menu-container">
                <div className="menu">
                    <div className="title d-flex flex-row media">
                        <div className="main-logo">
                            {/* <img src="https://fakeimg.pl/250x100/BAffA0/" alt="" />
                            <div class="media">
                                <div class="media-left">
                                    <img src="img_avatar1.png" class="media-object" style="width:60px" />
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">John Doe</h4>
                                    <p>Lorem ipsum...</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="title-name align-self-center font-weight-bold">
                            <NavLink to="/">後台系統</NavLink>
                        </div>
                    </div>
                    <div className="sidebar list-group mt-4">
                        <span className="sidebar-name list-group-item list-group-item-action mb-3">
                            <NavLink to="/tickets">票卷訂單</NavLink>
                        </span>
                        <span className="sidebar-name list-group-item list-group-item-action mb-3">
                            <NavLink to="/orders">商品訂單</NavLink>
                        </span>
                        <span className="sidebar-name list-group-item list-group-item-action mb-3">
                            <NavLink to="/charts">圖表統計</NavLink>
                        </span>
                        <span className="sidebar-name list-group-item list-group-item-action">
                            <NavLink to="/shop">商品庫存</NavLink>
                        </span>
                    </div>
                    <div className="log-out">
                        <span className="list-group-item list-group-item-action">
                            <NavLink to="/logout">登出</NavLink>
                        </span>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}
export default Menu;