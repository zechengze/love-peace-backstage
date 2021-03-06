import React, { useState, useEffect, useRef } from 'react';
import './Shop.scss';

import Axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

function Shop() {

    const [show, setShow] = useState(false);

    const [wantEditProduct, setWantEditProduct] = useState("");
    const [wantDeleteProduct, setWantDeleteProduct] = useState("");

    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productColor, setProductColor] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productPrize, setProductPrize] = useState(0);
    const [productAmount, setProductAmount] = useState(0);

    const [shopTableDisplay, setShopTableDisplay] = useState([]);

    const [editData, setEditData] = useState();

    const [shopSearchbar, setShopSearchbar] = useState("");

    // -----Modal-----

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditModalShow = (editOriginalValue) => {
        setWantEditProduct(editOriginalValue.pId)
        setEditData(
            {
                pName: editOriginalValue.pName,
                pColor: editOriginalValue.pColor,
                pSize: editOriginalValue.pSize,
                pPrice: editOriginalValue.pPrize,
                pAmount: editOriginalValue.pAmount
            }
        )
    }

    const handleEditModalHide = () => {
        setWantEditProduct("");
        setEditData();
    }

    const handleDeleteConfirm = (pId) => {
        setWantDeleteProduct("");
        deleteProduct(pId)
    }


    // -----Modal end-----

    // -----Table Display-----

    useEffect(() => {
        handleGetProductList();
    }, [])

    // -----Table Display end-----

    // -----New Product-----

    const handleGetProductList = () => {
        Axios.get("http://localhost:8088/shop/get").then((response) => {
            console.log('response', response)
            // console.log(response.data);
            setShopTableDisplay(response.data);
        });
    }

    const submitNewProduct = () => {
        Axios.post("http://localhost:8088/shop/newitem", {
            productId: productId,
            productName: productName,
            productColor: productColor,
            productSize: productSize,
            productPrize: productPrize,
            productAmount: productAmount
        }).then((response) => {
            console.log('submitNewProduct_response', response)
            if (response.data.statusCode === 200) {
                handleGetProductList();
            }

        });
    }

    // ---New Product end---

    // -----Delete Item-----

    const deleteProduct = (deleteId) => {
        // console.log(deleteId);
        Axios.delete(`http://localhost:8088/shop/delete/${deleteId}`).then((response) => {
            console.log('deleteProduct_response', response)

            if (response.data.statusCode === 200) {
                handleGetProductList();
            }
        });
    };

    // -----Delete Item end-----

    // -----Edit Item-----
    const handleEditConfirm = (editId) => {
        editProduct(editId);
    }

    const editProduct = (editId) => {
        // console.log(editId);
        console.log('editData', editData)

        Axios.put("http://localhost:8088/shop/edit", {
            pId: editId,
            editData: editData
        }).then((response) => {
            console.log('editProduct_response', response)
            if (response.data.statusCode === 200) {
                handleGetProductList();
                handleEditModalHide();
            }
        });

    };

    const handlePrepareEditData = (inputItem, targetValue) => {
        console.log('inputItem', inputItem)
        console.log('targetValue', targetValue)

        let tempEditData = {
            pName: editData.pName,
            pColor: editData.pColor,
            pSize: editData.pSize,
            pPrice: editData.pPrice,
            pAmount: editData.pAmount
        }
        switch (inputItem) {
            case "pName":
                tempEditData.pName = targetValue;
                break;
            case "pColor":
                tempEditData.pColor = targetValue;
                break;
            case "pSize":
                tempEditData.pSize = targetValue;
                break;
            case "pPrice":
                tempEditData.pPrice = targetValue;
                break;
            case "pAmount":
                tempEditData.pAmount = targetValue;
                break;
            default:
                break;
        }
        console.log('tempEditData', tempEditData)
        console.log('tempEditData.pPrice', tempEditData.pPrice)
        setEditData(tempEditData);
    }

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
                        <input type="text" placeholder="????????????" onChange={(e) => {
                            setShopSearchbar(e.target.value);
                        }} />

                    </div>

                    <Button className="btn btn-success shop-new" onClick={handleShow}>
                        ??????
                    </Button>

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
                                        placeholder="?????????T-shirt"
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
                            <th>??????ID</th>
                            <th>????????????</th>
                            <th>??????</th>
                            <th>??????</th>
                            <th>??????</th>
                            <th>??????</th>
                            <th>????????????</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shopTableDisplay.filter((val) => {
                            if (shopSearchbar == "") {
                                return val;
                            } else if (val.pName.toLowerCase().includes(shopSearchbar.toLocaleLowerCase())) {
                                return val;
                            }
                        }).map((val, key) => {
                            console.log('val', val)
                            return <tr key={key}>
                                <td><span>{val.pId}</span></td>
                                <td><span>{val.pName}</span></td>
                                <td><span>{val.pColor}</span></td>
                                <td><span>{val.pSize == null ? "F" : val.pSize == "" ? "F" : val.pSize}</span></td>
                                <td><span>{val.pPrize}</span></td>
                                <td><span className={val.pAmount === 0 ? "text-danger font-weight-bold" : ""}>{val.pAmount}</span></td>
                                <td>
                                    <div className="shop-tablebutton">

                                        <span className="">
                                            <Button className="btn btn-info btn-sm" onClick={() => handleEditModalShow(val)}>
                                                <i className='bx bxs-edit'></i>
                                            </Button>
                                        </span>

                                        <span className="float-right ml-4">
                                            <Button className="btn btn-danger btn-sm" onClick={() => setWantDeleteProduct(val.pId)}>
                                                <i className='bx bx-trash'></i>
                                            </Button>
                                        </span>
                                        {wantEditProduct ? (

                                            <Modal show={val.pId === wantEditProduct} onHide={handleEditModalHide} centered>
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
                                                                value={val.pId}
                                                                disabled
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="titleTextBox">
                                                                <span className="glyphicon glyphicon-bullhorn"></span>????????????
                                                            </label>
                                                            <input type="text"
                                                                id="titleTextBox"
                                                                className="form-control"
                                                                onChange={(e) => handlePrepareEditData("pName", e.target.value)}
                                                                value={editData.pName}
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="titleTextBox">
                                                                <span className="glyphicon glyphicon-bullhorn"></span>??????
                                                            </label>
                                                            <input type="text"
                                                                id="titleTextBox"
                                                                className="form-control"
                                                                placeholder="?????????Black"
                                                                onChange={(e) => handlePrepareEditData("pColor", e.target.value)}
                                                                value={editData.pColor}
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="titleTextBox">
                                                                <span className="glyphicon glyphicon-bullhorn"></span>??????
                                                            </label>
                                                            <input type="text"
                                                                id="titleTextBox"
                                                                className="form-control"
                                                                placeholder="?????????S"
                                                                onChange={(e) => handlePrepareEditData("pSize", e.target.value)}
                                                                value={editData.pSize}
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="titleTextBox">
                                                                <span className="glyphicon glyphicon-bullhorn"></span>??????
                                                            </label>
                                                            <input type="text"
                                                                id="titleTextBox"
                                                                className="form-control"
                                                                placeholder="?????????550"
                                                                onChange={(e) => handlePrepareEditData("pPrice", e.target.value)}
                                                                value={editData.pPrice}
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="ymdTextBox">
                                                                <span className="glyphicon glyphicon-time"></span>??????
                                                            </label>
                                                            <input type="text"
                                                                id="ymdTextBox"
                                                                className="form-control"
                                                                placeholder="?????????25"
                                                                onChange={(e) => handlePrepareEditData("pAmount", e.target.value)}
                                                                value={editData.pAmount}
                                                            />
                                                        </div>

                                                    </form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleEditModalHide}>??????</Button>
                                                    <Button variant="primary" onClick={() => handleEditConfirm(val.pId)}>??????</Button>
                                                </Modal.Footer>
                                            </Modal>
                                        ) : null}

                                        <Modal className="delete-modal" size="sm" show={val.pId === wantDeleteProduct} onHide={() => setWantDeleteProduct("")} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-sm">???????????????</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={() => setWantDeleteProduct("")}>??????</Button>
                                                <Button variant="danger" onClick={() => handleDeleteConfirm(val.pId)}>??????</Button>
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