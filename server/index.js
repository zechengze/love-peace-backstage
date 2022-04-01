const express = require('express');
const app = express();
const cors = require("cors");
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    port: 3306,
    database: "music_fest"
    // database: "LoveNPeace"
});


app.listen(8088, () => {
    console.log("running on port 8088.");
});

// -----ticket-----

app.get("/ticket/get", (req, res) => {

    const sqlTicketSelect = "SELECT ticket_order.orderNo, ticket_order.mNo, ticket_order.mName, ticket_order.mPhone, ticket_order.mMail, ticket_order.orderTime, ticket_order.orderPrice, ticket_order.paymentStatus, ticket_order.paymentMethod, tickets.ticketNo, tickets.ticketName, tickets.campId, tickets.ticketPrice FROM ticket_order LEFT OUTER JOIN tickets ON ticket_order.orderNo=tickets.orderNo;";
    db.query(sqlTicketSelect,
        (err, result) => {
            res.send(result);
            // console.log(result);
            // console.log(err == null ? "Ticket Get Cool" : err);
            // res.send(err);
        });
})

// -----ticket end-----



// -----ticket api-----

app.post("/ticket/getall", (req, res) => {
    const { } = req.body;
    const getTicketOrderSQL = `SELECT * FROM ticket_order ORDER BY orderNo ASC`;
    db.query(getTicketOrderSQL, (error, ticketOrderListResult) => {
        //   console.log("error", error);
        if (error) {
            // res.send(error);
        } else {
            // console.log("ticketOrderListResult", ticketOrderListResult);
            let getTicketOrderResultList = [];
            return new Promise((resolve, reject) => {
                ticketOrderListResult.forEach((item, key) => {
                    const getTicketsSQL = `SELECT * FROM tickets WHERE orderNo = ${item.orderNo}`;
                    db.query(getTicketsSQL, (ticketsError, ticketsResults) => {
                        if (ticketsError) {
                            // console.log("ticketsError", ticketsError);
                            reject(ticketsError);
                        } else {
                            // console.log("ticketsResults", ticketsResults);
                            getTicketOrderResultList.push({
                                ...item,
                                tickets: ticketsResults,
                            });
                            // console.log("getTicketOrderResultList", getTicketOrderResultList);
                            if (key === ticketOrderListResult.length - 1) {
                                resolve(getTicketOrderResultList);
                            }
                        }
                    });
                });
            })
                .then((ticketsResponse) => {
                    // console.log("ticketsResponse", ticketsResponse);
                    res.send({
                        data: ticketsResponse,
                        statusMsg: "票券訂單查詢成功",
                    });
                })
                .catch((err) => {
                    // console.log("err", err);
                });
        }
    });
});

// -----ticket api end-----

// ----- product order-----

app.get("/productorder/get", (req, res) => {

    const sqlProductSelect = "SELECT * FROM product_order";
    db.query(sqlProductSelect,
        (err, result) => {
            res.send(result);
        });
})
// app.get("/productorder/get", (req, res) => {

//     const sqlProductSelect = "SELECT product_order.orderNo, product_order.mNo, product_order.mMail, product_order.mName, product_order.mPhone, product_order.orderTime, product_order.orderPrice, product_order.paymentStatus, product_order.paymentMethod, product_order_details.productName, product_order_details.pColor, product_order_details.pSize, product_order_details.orderQuantity, product_order_details.orderPrice FROM product_order LEFT OUTER JOIN product_order_details ON product_order.orderNo=product_order_details.orderNo";
//     db.query(sqlProductSelect,
//         (err, result) => {
//             res.send(result);
//             // res.send(err);
//         });
// })

// -----product order end-----


// -----shop-----

app.get("/shop/get", (req, res) => {

    const sqlShopSelect = "SELECT * FROM shop_item";
    db.query(sqlShopSelect,
        (err, result) => {
            res.send(result);
            // console.log('shop/get_result', result)
            // console.log(err == null ? "Shop Get Cool" : err);
        });
})

app.post("/shop/newitem", (req, res) => {

    const productId = req.body.productId;
    const productName = req.body.productName;
    const productColor = req.body.productColor;
    const productSize = req.body.productSize;
    const productPrize = req.body.productPrize;
    const productAmount = req.body.productAmount;

    const sqlShopInsert = "INSERT INTO shop_item (pId, pName, pColor, pSize, pPrize, pAmount) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlShopInsert, [productId, productName, productColor, productSize, productPrize, productAmount],
        (err, result) => {
            console.log('/shop/newitem_result', result)
            if (result) {
                res.send({ statusCode: 200, msg: "新增成功" })
            }
        });
})

app.delete("/shop/delete/:productId", (req, res) => {

    const productId = req.params.productId;
    console.log('productId', productId)

    const sqlShopDelete = "DELETE FROM shop_item WHERE pId = ?";
    db.query(sqlShopDelete, productId,
        (err, result) => {
            if (err) console.log(err);
            if (result) {
                res.send({ statusCode: 200, msg: "刪除成功" })
            }
        });
})

app.put("/shop/edit", (req, res) => {
    const { pId, editData } = req.body;
    const { pName, pColor, pSize, pPrice, pAmount } = editData;

    const sqlShopEdit = `UPDATE shop_item SET pName="${pName}", pColor="${pColor}", pSize="${pSize}", pPrize=${pPrice}, pAmount=${pAmount} WHERE pId ="${pId}"`;

    db.query(sqlShopEdit,
        (err, result) => {
            if (err) {
                console.log("err", err)
                res.send({ statusCode: 400, msg: "編輯失敗", error: err })
            } else {
                res.send({ statusCode: 200, msg: "編輯成功" })
            }
        });
})


// -----shop end-----