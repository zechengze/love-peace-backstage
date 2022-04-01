import React, { useEffect, useState } from 'react';
import './Orders.scss';

import axios from 'axios';
import moment from 'moment';
import { Button, Modal } from 'react-bootstrap';

const Orders = () => {

    const [orderDisplay, setOrderDisplay] = useState([]);

    const [orderSearchbar, setOrderSearchbar] = useState("");
    const [orderSearchbarCat, setOrderSearchbarCat] = useState("");


    // -----Table Display-----

    useEffect(() => {
        axios.get("http://localhost:8088/productorder/get").then((response) => {
            console.log(response.data);
            setOrderDisplay(response.data);
        });
    }, [])

    // -----Table Display-----

    // ------Modal-----


    const handleDetailConfirm = (orderNo) => {
        setWantDetailOrder("");
        // detailOrder(orderNo);
    }


    // -----Modal end-----

    // -----Detail-----

    const [wantDetailOrder, setWantDetailOrder] = useState("");


    // const detailOrder = (orderId) => {

    // }



    // -----Detail end-----

    return (
        <div className="content">
            <div className="order-content">
                <h2 className="font-weight-bold mb-4">商品訂單查詢</h2>

                <div className="order-search mb-4">
                    <div className="input-group">
                        <select className="custom-select" id="orderSearchSelect"
                            value={orderSearchbarCat}
                            onChange={(e) => {
                                const orderSearchSelect = e.target.value;
                                setOrderSearchbarCat(orderSearchSelect);
                            }}>
                            <option value="orderNumber">訂單編號</option>
                            <option value="orderMemberName">會員姓名</option>
                            <option value="orderMemberPhone">手機</option>
                            {/* <option value="orderPaymentStatus">付款狀態</option> */}
                        </select>
                        <input type="text" className="form-control" onChange={(e) => {
                            setOrderSearchbar(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="order-display mr-4">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>訂單編號</th>
                                <th>信箱</th>
                                <th>姓名</th>
                                <th>會員編號</th>
                                <th>手機</th>
                                <th>訂單金額</th>
                                <th>訂單日期</th>
                                <th>付款方式</th>
                                <th>付款狀態</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDisplay.filter((val) => {
                                if (orderSearchbar == "") {
                                    return val;
                                } else if (orderSearchbarCat == "orderNumber" && val.orderNo.includes(orderSearchbar)) {
                                    return val;
                                } else if (orderSearchbarCat == "orderMemberName" && val.mName.includes(orderSearchbar)) {
                                    return val;
                                } else if (orderSearchbarCat == "orderMemberPhone" && val.mPhone.includes(orderSearchbar)) {
                                    return val;
                                }
                                // else if (orderSearchbarCat == "orderPaymentStatus" && val.paymentStatus.includes(orderSearchbar)) {
                                //     return val;
                                // }
                            }).map((val, key) => {
                                return <tr key={key}>
                                    <td>
                                        <span>{val.orderNo}</span>
                                        <span>
                                            <Button className="btn btn-info btn-sm float-right" onClick={() => setWantDetailOrder(val.orderNo)}>
                                                <i className='bx bx-search-alt' ></i>
                                            </Button>
                                        </span>

                                        <Modal className="productdetail-modal" size="" show={val.orderNo === wantDetailOrder} onHide={() => setWantDetailOrder("")} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-sm">訂單明細：{val.orderNo}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>商品名稱</th>
                                                            <th>顏色</th>
                                                            <th>尺寸</th>
                                                            <th>單價</th>
                                                            <th>數量</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>T-shirt</td>
                                                            <td>Red</td>
                                                            <td>M</td>
                                                            <td>550</td>
                                                            <td>*1</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cap</td>
                                                            <td>Black</td>
                                                            <td>F</td>
                                                            <td>650</td>
                                                            <td>*1</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <span className="">總金額：＄1200</span>
                                                <Button variant="primary" onClick={() => handleDetailConfirm(val.orderNo)}>確定</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                    <td><span>{val.mMail}</span></td>
                                    <td><span>{val.mName}</span></td>
                                    <td><span>{val.mNo}</span></td>
                                    <td><span>{val.mPhone}</span></td>
                                    <td><span>{val.orderPrice}</span></td>
                                    <td><span>{moment(val.orderTime).locale("zh-tw").format("YYYY-MM-DD HH:mm")}</span></td>
                                    <td><span>{val.paymentMethod}</span></td>
                                    <td><span>{val.paymentStatus == 1 ? "已付款" : "未付款"}</span></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Orders;