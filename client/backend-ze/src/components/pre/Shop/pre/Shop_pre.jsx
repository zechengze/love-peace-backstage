import React, { useState } from 'react';
import './Shop.scss';

// import { Button, Modal, Glyphicon} from 'bootstrap';

function Shop() {

    const [count, setCount] = useState(25);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function decrementCount() {
        setCount(preCount => preCount - 1);
    }

    function incrementCount() {
        setCount(preCount => preCount + 1);
    }


    return (
        <div className="content">
            <div className="shop-content">
                <h1 className="text-primary font-weight-bold">Shop</h1>

                <div className="shop-search mb-4 mr-4 row justify-content-between">
                    <div className="shop-select col-2">
                        <select className="custom-select" id="shopSearchSelect">
                            <option value="">以類別查詢</option>
                            <option value="shopclothe">服飾</option>
                            <option value="shopmask">口罩</option>
                            <option value="shopsmall">小物</option>
                            <option value="shopdrink">飲用</option>
                            <option value="shopnone">售罄</option>
                        </select>
                    </div>
                    <div className="shop-searchbar input-group col-3">
                        <input type="text" placeholder="商品名稱" />
                        <button className="btn btn-primary" type="submit">搜尋</button>
                        {/* <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                        </Button> */}
                    </div>

                    <button type="button" className="btn btn-success shop-new" data-toggle="modal" data-target="#exampleModal">
                        上架
                        {/* <span className="glyphicon glyphicon-remove-sign"></span> */}
                    </button>
                    {/* <!-- 對話盒 --> */}

                    {/* <!-- /對話盒 --> */}
                </div>
            </div>

            <div className="shop-display mr-4">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>編號</th>
                            <th>名稱</th>
                            <th>顏色</th>
                            <th>尺寸</th>
                            <th>售價</th>
                            <th>數量</th>
                            <th>增減</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span>LotBk01</span>
                            </td>
                            <td>
                                <span>LoTshirt</span>
                            </td>
                            <td>
                                <span>Black</span>
                            </td>
                            <td>
                                <span>S</span>
                            </td>
                            <td>
                                <span>550</span>
                            </td>
                            <td>
                                {/* <span className="">25</span> */}
                                <span className="">
                                    <span className="">
                                        {/* <input type="text" className="form-control" value={count} min="1" max="100" /> */}
                                        {count}
                                    </span>
                                </span>
                            </td>
                            <td>
                                <div className="row p-3 justify-content-between">
                                    <div className="plus-minus row">

                                        <div className="">
                                            <button type="button" className="btn btn-danger btn-number"
                                                onClick={decrementCount}>
                                                -
                                            </button>
                                        </div>

                                        <div className="">
                                            <button type="button" className="btn btn-success btn-number"
                                                onClick={incrementCount}>
                                                +
                                            </button>
                                        </div>

                                    </div>

                                    <div className="">
                                        <button type="button" className="btn btn-danger btn-number"
                                        // onClick={incrementCount}
                                        >
                                            下架
                                            {/* <span className="glyphicon glyphicon-remove-sign">下架</span> */}
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>LotBk02</span>
                            </td>
                            <td>
                                <span>LoTshirt</span>
                            </td>
                            <td>
                                <span>Black</span>
                            </td>
                            <td>
                                <span>M</span>
                            </td>
                            <td>
                                <span>550</span>
                            </td>
                            <td>
                                <span>21</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LotBk03</span>
                            </td>
                            <td>
                                <span>LoTshirt</span>
                            </td>
                            <td>
                                <span>Black</span>
                            </td>
                            <td>
                                <span>L</span>
                            </td>
                            <td>
                                <span>550</span>
                            </td>
                            <td>
                                <span>18</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LotWt01</span>
                            </td>
                            <td>
                                <span>LoTshirt</span>
                            </td>
                            <td>
                                <span>White</span>
                            </td>
                            <td>
                                <span>S</span>
                            </td>
                            <td>
                                <span>550</span>
                            </td>
                            <td>
                                <span>22</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LotWt02</span>
                            </td>
                            <td>
                                <span>LoTshirt</span>
                            </td>
                            <td>
                                <span>White</span>
                            </td>
                            <td>
                                <span>M</span>
                            </td>
                            <td>
                                <span>550</span>
                            </td>
                            <td>
                                <span>20</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LotWt03</span>
                            </td>
                            <td>
                                <span>LoTshirt</span>
                            </td>
                            <td>
                                <span>White</span>
                            </td>
                            <td>
                                <span>L</span>
                            </td>
                            <td>
                                <span>550</span>
                            </td>
                            <td>
                                <span>14</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LoHat01</span>
                            </td>
                            <td>
                                <span>LoCap</span>
                            </td>
                            <td>
                                <span>Black</span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span>650</span>
                            </td>
                            <td>
                                <span>4</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LoHat02</span>
                            </td>
                            <td>
                                <span>LoCap</span>
                            </td>
                            <td>
                                <span>White</span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span>650</span>
                            </td>
                            <td>
                                <span className="text-danger">0</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LoMask01</span>
                            </td>
                            <td>
                                <span>LoMask</span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span>150</span>
                            </td>
                            <td>
                                <span className="">43</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LoTowel01</span>
                            </td>
                            <td>
                                <span>LoTowel</span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span>250</span>
                            </td>
                            <td>
                                <span className="text-danger">0</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span>LoCup01</span>
                            </td>
                            <td>
                                <span>LoCup</span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span></span>
                            </td>
                            <td>
                                <span>300</span>
                            </td>
                            <td>
                                <span className="">13</span>
                            </td>
                            <td>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default Shop;