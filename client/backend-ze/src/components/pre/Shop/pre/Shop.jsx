import React, { useState, useEffect } from 'react';
import './Shop.scss';

import Axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

function Shop() {

    const [show, setShow] = useState(false);
    const [showDelete, setDeleteShow] = useState(false);
    const [showEdit, setEditShow] = useState(false);
    const [modalId, setModalId] = useState(null);


    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [productColor, setProductColor] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productPrize, setProductPrize] = useState(0);
    const [productAmount, setProductAmount] = useState(0);

    const [shopTableDisplay, setShopTableDisplay] = useState([]);

    const [shopEditName, setEditName] = useState('');
    const [shopEditColor, setEditColor] = useState('');
    const [shopEditSize, setEditSize] = useState('');
    const [shopEditPrize, setEditPrize] = useState(0);
    const [shopEditAmount, setEditAmount] = useState(0);

    const [shopEditItem, setShopEdit] = useState([]);

    // ---Modal---

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteClose = () => setDeleteShow(false);
    const handleDeleteShow = () => setDeleteShow(true);

    // const handleEditClose = () => setEditShow(false);
    // const handleEditShow = () => setEditShow(true);

    const modalEditShowInMap = (e, index) => {
        setEditShow(true);
        setModalId(index);
        console.log(e);
        console.log(index);
    }
    const modalEditHideInMap = (e, index) => {
        setEditShow(false);
        setModalId(index);
        console.log(e);
        console.log(index);
    }


    // ---Modal end---

    // ---Table Display

    useEffect(() => {
        Axios.get("http://localhost:8088/shop/get").then((response) => {
            // console.log(response.data);
            setShopTableDisplay(response.data);
        });
    }, [])

    // --- Table Display end

    // ---New Product---

    const submitNewProduct = () => {
        Axios.post("http://localhost:8088/shop/newitem", {
            productId: productId,
            productName: productName,
            productColor: productColor,
            productSize: productSize,
            productPrize: productPrize,
            productAmount: productAmount
        });

        setShopTableDisplay([
            ...shopTableDisplay,
            {
                productId: productId,
                productName: productName,
                productColor: productColor,
                productSize: productSize,
                productPrize: productPrize,
                productAmount: productAmount
            },
        ]);
    }

    // ---New Product end---

    // -----Delete Item-----

    const deleteProduct = (deleteId) => {
        // console.log(deleteId);
        Axios.delete(`http://localhost:8088/shop/delete/${deleteId}`);
    };

    // -----Delete Item end-----

    // -----Edit Item-----

    const editProduct = (editId) => {
        // console.log(editId);
        Axios.put("http://localhost:8088/shop/edit", {
            productId: editId,
            productName: shopEditName,
            productColor: shopEditColor,
            productSize: shopEditSize,
            productPrize: shopEditPrize,
            productAmount: shopEditAmount
        });
        setShopEdit([
            ...shopEditItem,
            {
                productName: "",
                productColor: "",
                productPrize: 0,
                productAmount: 0
            },
        ])
    };

    // -----Edit Item end-----


    return (
        <div className="content">
            <div className="shop-content">
                <h2 className="font-weight-bold mb-4">??????????????????</h2>

                <div className="shop-search mb-4 mr-4 row justify-content-between">
                    <div className="shop-select col-2">
                        <select className="custom-select" id="shopSearchSelect">
                            <option value="">???????????????</option>
                            <option value="shopclothe">??????</option>
                            <option value="shopmask">??????</option>
                            <option value="shopsmall">??????</option>
                            <option value="shopdrink">??????</option>
                            <option value="shopnone">??????</option>
                        </select>
                    </div>
                    <div className="shop-searchbar input-group col-4">
                        <input type="text" placeholder="????????????" />
                        <button className="btn btn-primary" type="submit"><i className='bx bx-search' ></i></button>

                    </div>

                    <Button className="btn btn-success shop-new" onClick={handleShow}>
                        ??????
                    </Button>

                    {/* <!-- ????????? --> */}

                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>????????????</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="titleTextBox">
                                        <span className="glyphicon glyphicon-bullhorn"></span>
                                        ????????????
                                    </label>
                                    <input type="text"
                                        id="titleTextBox"
                                        className="form-control"
                                        placeholder="?????????LotBk01"
                                        onChange={(e) => {
                                            setProductId(e.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="titleTextBox">
                                        <span className="glyphicon glyphicon-bullhorn"></span>
                                        ????????????
                                    </label>
                                    <input type="text"
                                        id="titleTextBox"
                                        className="form-control"
                                        placeholder="?????????Logo???"
                                        onChange={(e) => {
                                            setProductName(e.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="titleTextBox">
                                        <span className="glyphicon glyphicon-bullhorn"></span>
                                        ??????
                                    </label>
                                    <input type="text"
                                        id="titleTextBox"
                                        className="form-control"
                                        placeholder="?????????Black"
                                        onChange={(e) => {
                                            setProductColor(e.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="titleTextBox">
                                        <span className="glyphicon glyphicon-bullhorn"></span>
                                        ??????
                                    </label>
                                    <input type="text"
                                        id="titleTextBox"
                                        className="form-control"
                                        placeholder="?????????S"
                                        onChange={(e) => {
                                            setProductSize(e.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="titleTextBox">
                                        <span className="glyphicon glyphicon-bullhorn"></span>
                                        ??????
                                    </label>
                                    <input type="text"
                                        id="titleTextBox"
                                        className="form-control"
                                        placeholder="?????????550"
                                        onChange={(e) => {
                                            setProductPrize(e.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="ymdTextBox">
                                        <span className="glyphicon glyphicon-time"></span>
                                        ??????
                                    </label>
                                    <input type="text"
                                        id="ymdTextBox"
                                        className="form-control"
                                        placeholder="?????????25"
                                        onChange={(e) => {
                                            setProductAmount(e.target.value);
                                        }} />
                                </div>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                ??????
                            </Button>
                            <Button variant="primary" onClick={() => {
                                handleClose(); submitNewProduct();
                            }}>
                                ??????
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>

            <div className="shop-display mr-4">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>??????</th>
                            <th>??????</th>
                            <th>??????</th>
                            <th>??????</th>
                            <th>??????</th>
                            <th>????????????</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shopTableDisplay.map((val) => {
                            return <tr key={val.pId}>
                                <td><span>{val.pId}</span></td>
                                <td><span>{val.pName}</span></td>
                                <td><span>{val.pColor}</span></td>
                                <td><span>{val.pSize}</span></td>
                                <td><span>{val.pPrize}</span></td>
                                <td><span className={val.pAmount === 0 ? "text-danger" : ""}>{val.pAmount}</span></td>
                                <td>
                                    <div className="shop-tablebutton">

                                        <span className="">
                                            <Button className="btn btn-info btn-sm" onClick={() => { modalEditShowInMap(); }}>
                                                <i className='bx bxs-edit'></i>
                                            </Button>
                                        </span>

                                        <span className="float-right ml-4">
                                            <Button className="btn btn-danger btn-sm" onClick={handleDeleteShow}>
                                                <i className='bx bx-trash'></i>
                                            </Button>
                                        </span>

                                        <Modal show={showEdit} onHide={() => { modalEditHideInMap(); }} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>????????????</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="titleTextBox">
                                                            <span className="glyphicon glyphicon-bullhorn"></span>????????????
                                                        </label>
                                                        <input type="text"
                                                            id="titleTextBox"
                                                            className="form-control"
                                                            placeholder={val.pId}
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="titleTextBox">
                                                            <span className="glyphicon glyphicon-bullhorn"></span>????????????
                                                        </label>
                                                        <input type="text"
                                                            id="titleTextBox"
                                                            className="form-control"
                                                            placeholder="?????????Logo???"
                                                            onChange={(e) => { setEditName(e.target.value); }} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="titleTextBox">
                                                            <span className="glyphicon glyphicon-bullhorn"></span>??????
                                                        </label>
                                                        <input type="text"
                                                            id="titleTextBox"
                                                            className="form-control"
                                                            placeholder="?????????Black"
                                                            onChange={(e) => { setEditColor(e.target.value); }} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="titleTextBox">
                                                            <span className="glyphicon glyphicon-bullhorn"></span>??????
                                                        </label>
                                                        <input type="text"
                                                            id="titleTextBox"
                                                            className="form-control"
                                                            placeholder="?????????S"
                                                            onChange={(e) => { setEditSize(e.target.value); }} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="titleTextBox">
                                                            <span className="glyphicon glyphicon-bullhorn"></span>??????
                                                        </label>
                                                        <input type="text"
                                                            id="titleTextBox"
                                                            className="form-control"
                                                            placeholder="?????????550"
                                                            onChange={(e) => { setEditPrize(e.target.value); }} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="ymdTextBox">
                                                            <span className="glyphicon glyphicon-time"></span>??????
                                                        </label>
                                                        <input type="text"
                                                            id="ymdTextBox"
                                                            className="form-control"
                                                            placeholder="?????????25"
                                                            onChange={(e) => { setEditAmount(e.target.value); }} />
                                                    </div>

                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={modalEditHideInMap}>??????</Button>
                                                <Button variant="primary" onClick={() => { modalEditHideInMap(); editProduct(val.pId); }}>??????</Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <Modal className="delete-modal" size="sm" show={showDelete} onHide={handleDeleteClose} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-sm">???????????????</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleDeleteClose}>??????</Button>
                                                <Button variant="danger" onClick={() => { handleDeleteClose(); deleteProduct(val.pId); }}>??????</Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                </td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default Shop;