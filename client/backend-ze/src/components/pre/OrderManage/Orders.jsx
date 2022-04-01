import React from 'react';
import './Orders.scss';

const Orders = () => {
    return (
        <div className="content">
            <div className="order-content">
                <h1 className="text-primary font-weight-bold">Orders</h1>

                <div className="order-search mr-4 mb-4">
                    <div className="input-group">
                        <select className="custom-select" id="orderSearchSelect">
                            <option value="">以類別查詢</option>
                            <option value="ordernumber">訂單編號</option>
                            <option value="orderid">ID</option>
                            <option value="ordername">姓名</option>
                            <option value="ordertotal">應付金額</option>
                            <option value="orderphone">手機</option>
                            <option value="orderstatus">訂單狀態</option>
                        </select>
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">搜尋</button>
                        </div>
                    </div>
                </div>
                
                <div className="order-display mr-4">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>訂單編號</th>
                                <th>ID</th>
                                <th>姓名</th>
                                <th>應付金額</th>
                                <th>手機</th>
                                <th>訂單狀態</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>000001</span>
                                </td>
                                <td>
                                    <span>jin0513</span>
                                </td>
                                <td>
                                    <span>琴酒</span>
                                </td>
                                <td>
                                    <span>$ 2199</span>
                                </td>
                                <td>
                                    <span>0987209687</span>
                                </td>
                                <td>
                                    <span>已付款</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>000002</span>
                                </td>
                                <td>
                                    <span>vodka0406</span>
                                </td>
                                <td>
                                    <span>伏特加</span>
                                </td>
                                <td>
                                    <span>$ 633</span>
                                </td>
                                <td>
                                    <span>0933205641</span>
                                </td>
                                <td>
                                    <span>未付款</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>000003</span>
                                </td>
                                <td>
                                    <span>beer0921</span>
                                </td>
                                <td>
                                    <span>啤酒</span>
                                </td>
                                <td>
                                    <span>$ 3360</span>
                                </td>
                                <td>
                                    <span>0935461732</span>
                                </td>
                                <td>
                                    <span>已付款</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>000004</span>
                                </td>
                                <td>
                                    <span>whisky0627</span>
                                </td>
                                <td>
                                    <span>威士忌</span>
                                </td>
                                <td>
                                    <span>$ 1135</span>
                                </td>
                                <td>
                                    <span>0982663772</span>
                                </td>
                                <td>
                                    <span>已付款</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>000005</span>
                                </td>
                                <td>
                                    <span>sake0324</span>
                                </td>
                                <td>
                                    <span>清酒</span>
                                </td>
                                <td>
                                    <span>$ 488</span>
                                </td>
                                <td>
                                    <span>0988213075</span>
                                </td>
                                <td>
                                    <span>未付款</span>
                                </td>
                            </tr>

                            {/* --------------------------- */}

                            
                        </tbody>
                    </table>
                </div>

                <div className="order-pagination mt-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
}

export default Orders;