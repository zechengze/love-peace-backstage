import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tickets.scss';


const Tickets = () => {
    return (
        <div className="content">
            <div className="ticket-content">
                <h1 className="text-primary font-weight-bold">Tickets</h1>

                <div className="ticket-search mr-4 pb-4">
                    <div className="input-group">
                        <select className="custom-select" id="ticketSearchSelect">
                            <option value="">以類別查詢</option>
                            <option value="ticketid">ID</option>
                            <option value="ticketname">姓名</option>
                            <option value="tickettype">票種</option>
                            <option value="ticketphone">手機</option>
                            <option value="ticketmail">信箱</option>
                        </select>
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">搜尋</button>
                        </div>
                    </div>

                </div>

                <div className="ticket-display mr-4">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>姓名</th>
                                <th>票種</th>
                                <th>手機</th>
                                <th>信箱</th>
                                <th>營位</th>
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
                                    <span>雙日票</span>
                                </td>
                                <td>
                                    <span>0987209687</span>
                                </td>
                                <td>
                                    <span>gin0513@gmail.com</span>
                                </td>
                                <td>
                                    <span>A03</span>
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
                                    <span>雙日票</span>
                                </td>
                                <td>
                                    <span>0933205641</span>
                                </td>
                                <td>
                                    <span>vodka0406@gmail.com</span>
                                </td>
                                <td>
                                    <span>B01</span>
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
                                    <span>雙日票</span>
                                </td>
                                <td>
                                    <span>0935461732</span>
                                </td>
                                <td>
                                    <span>beer0921@gmail.com</span>
                                </td>
                                <td>
                                    <span>B03</span>
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
                                    <span>單日票</span>
                                </td>
                                <td>
                                    <span>0982663772</span>
                                </td>
                                <td>
                                    <span>whisky0627@gmail.com</span>
                                </td>
                                <td>
                                    <span>&nbsp;</span>
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
                                    <span>單日票</span>
                                </td>
                                <td>
                                    <span>0988213075</span>
                                </td>
                                <td>
                                    <span>sake0324@gmail.com</span>
                                </td>
                                <td>
                                    <span>&nbsp;</span>
                                </td>
                            </tr>

                            {/* ------------------------------------------ */}
                            
                        </tbody>
                    </table>
                </div>

                <div className="ticket-pagination mt-5">
                    <nav>
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

export default Tickets;