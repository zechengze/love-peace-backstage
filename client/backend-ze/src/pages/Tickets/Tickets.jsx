import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Tickets.scss';

import axios from 'axios';
import moment from "moment";


function Tickets() {
    const [ticketSearchbar, setTicketSearchbar] = useState("");
    const [ticketSearchbarCat, setTicketSearchbarCat] = useState("");

    // ---Table Display

    // const [ticketTableDisplay, setTicketTableDisplay] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:8088/ticket/get").then((response) => {
    //         console.log(response.data);
    //         setTicketTableDisplay(response.data);
    //     });
    // }, [])

    // --- Table Display end

    // -----ticket api-----

    const [allTicketOrderList, setAllTicketOrderList] = useState([]);
    console.log(allTicketOrderList);

    useEffect(() => {
        handleGetAllTicketOrderList();
    }, []);

    const handleGetAllTicketOrderList = async (e) => {
        // console.log("post 取得所有票券訂單");
        let results;
        await axios({
            method: "post",
            url: `http://localhost:8088/ticket/getall`,
            data: {},
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(function (response) {
                // console.log("responsewhat", response.data);
                // console.log("ticket_order_response", response.data.data);
                results = response.data.data;
                setAllTicketOrderList(results);
            })
            .catch((error) => {
                console.log("ticket_order_error", error);
            });
    };

    // -----ticket api end-----



    return (
        <div className="content">
            <div className="ticket-content">
                <h2 className="font-weight-bold mb-4">票券訂單查詢</h2>

                <div className="ticket-search pb-4">
                    <div className="input-group">
                        <select className="custom-select" id="ticketSearchSelect"
                            onChange={(e) => {
                                const ticketSearchSelect = e.target.value;
                                setTicketSearchbarCat(ticketSearchSelect);
                            }}>
                            <option value="ticketOrderId">訂單編號</option>
                            <option value="ticketMemberName">會員姓名</option>
                            <option value="ticketMemberPhone">手機</option>
                            {/* <option value="ticketmail">付款狀態</option> */}
                        </select>
                        <input type="text" className="form-control"
                            onChange={(e) => { setTicketSearchbar(e.target.value); }}
                        />
                    </div>
                </div>

                <div className="ticket-display mr-4">
                    <table className="table table-striped table-hover table-bordered col-12">
                        <thead>
                            <tr>
                                {/* <th>訂單編號</th> */}
                                <th>訂單編號</th>
                                <th>票卷編號</th>
                                <th>會員姓名</th>
                                <th>手機</th>
                                <th>票種</th>
                                <th>營位</th>
                                <th>金額</th>
                                <th>成立時間</th>
                                <th>付款狀態</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {ticketTableDisplay.map((val) => {
                                return <tr>
                                    <td><span>{val.orderNo}</span></td>
                                    <td></td>
                                </tr>

                            })} */}

                            {allTicketOrderList.filter((val) => {
                                if (ticketSearchbar == "") {
                                    return val;
                                } else if (ticketSearchbarCat == "ticketOrderId" && val.orderNo.includes(ticketSearchbar)) {
                                    return val;
                                } else if (ticketSearchbarCat == "ticketMemberName" && val.mName.includes(ticketSearchbar)) {
                                    return val;
                                } else if (ticketSearchbarCat == "ticketMemberPhone" && val.mPhone.includes(ticketSearchbar)) {
                                    return val;
                                }
                            }).map((val, key) => {
                                return <tr key={key}>
                                    <td className="align-middle"><span>{val.orderNo}</span></td>
                                    {/* {val.tickets.map((val) => {
                                        return <tr><td><span>{val.ticketNo}</span></td></tr>
                                    })} */}
                                    <td key={key} className="my-table-flex">
                                        {val.tickets.map((val) => {
                                            return <td>{val.ticketNo}</td>
                                        })}
                                    </td>

                                    <td className="align-middle"><span>{val.mName}</span></td>
                                    <td className="align-middle"><span>{val.mPhone}</span></td>

                                    <td className="my-table-flex">
                                        {val.tickets.map((val) => {
                                            return <td>{val.ticketName}</td>
                                        })}
                                    </td>

                                    <td className="">
                                        {val.tickets.map((val) => {
                                            return <td className="my-table-flex">{val.campId == null ? "無" : val.campId}</td>
                                        })}
                                    </td>

                                    <td className="align-middle"><span>{val.orderPrice}</span></td>
                                    <td className="align-middle"><span>{moment(val.orderTime).locale("zh-tw").format("YYYY-MM-DD HH:mm")}</span></td>
                                    <td className="align-middle"><span>{val.paymentStatus === 1 ? "已付款" : "未付款"}</span></td>

                                </tr>
                            })}

                            {/* {allTicketOrderList.map((val, orderIndex) => {
                                return (
                                    <div
                                        className={`each_order ${val.tickets.length === 4
                                            ? "four"
                                            : val.tickets.length === 3
                                                ? "three"
                                                : val.tickets.length === 2
                                                    ? "two"
                                                    : "one"
                                            }`}
                                        key={orderIndex}
                                    >
                                        <div className="order_div order_no">{val.orderNo}</div>
                                        <div className="order_div m_no">{val.mNo}</div>
                                        <div className="order_div m_name">{val.mName}</div>
                                        <div className="order_div m_phone">{val.mPhone}</div>
                                        <div className="order_div ticket_wrap">
                                            {val.tickets.map((ticketItem, ticketIndex) => {
                                                return (
                                                    <div className="each_ticket" key={ticketIndex}>
                                                        <div className="ticket_div ticket_no">
                                                            {ticketItem.ticketNo}
                                                        </div>
                                                        <div className="ticket_div ticket_name">
                                                            {ticketItem.ticketName}
                                                            {ticketItem.ticketType === "camp" ? (
                                                                <div className="camp_id">{ticketItem.campId}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="ticket_div ticket_price">
                                                            {ticketItem.ticketPrice}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="order_div price">{val.orderPrice}</div>
                                        <div className="order_div order_time">
                                            {" "}
                                            {moment(val.orderTime)
                                                .locale("zh-tw")
                                                .format("YYYY-MM-DD HH:mm:ss")}
                                        </div>
                                        <div className="order_div payment">
                                            {val.paymentMethod}
                                        </div>
                                        <div className="order_div payment_status">
                                            {val.paymentStatus ? "付款完成" : "未付款"}
                                        </div>
                                        <div className="order_div order_status">
                                            {val.orderStatus ? "訂單成立" : "未完成"}
                                        </div>
                                    </div>
                                );
                            })} */}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tickets;