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

// app.get("/ticket/get", (req, res) => {

//     const sqlTicketSelect = "SELECT * FROM tickets";
//     db.query(sqlTicketSelect,
//         (err, result) => {
//             res.send(result);
//             // console.log(result);
//             // console.log(err == null ? "Ticket Get Cool" : err);
//             // res.send(err);
//         });
// })

// -----ticket end-----



// -----ticket api-----

app.post("/ticket/getall", (req, res) => {
    const { } = req.body;
    const getTicketOrderSQL = `SELECT * FROM ticket_order ORDER BY orderTime DESC`;
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

// ----- product order api-----

app.get("/productorder/get", (req, res) => {

    const sqlProductSelect = "SELECT * FROM product_order";
    db.query(sqlProductSelect,
        (err, result) => {
            res.send(result);
        });
})

// -----product order api end

// -----shop-----

app.get("/shop/get", (req, res) => {

    const sqlShopSelect = "SELECT * FROM shop_item";
    db.query(sqlShopSelect,
        (err, result) => {
            res.send(result);
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
            // console.log(err == null ? "Shop Insert cool" : err);
        });
})

app.delete("/shop/delete/:productId", (req, res) => {

    const productId = req.params.productId;

    const sqlShopDelete = "DELETE FROM shop_item WHERE pId = ?";
    db.query(sqlShopDelete, productId,
        (err, result) => {
            if (err) console.log(err);
        });
})

app.put("/shop/edit", (req, res) => {

    const productId = req.body.productId;
    const productName = req.body.productName;
    const productColor = req.body.productColor;
    const productSize = req.body.productSize;
    const productPrize = req.body.productPrize;
    const productAmount = req.body.productAmount;

    const sqlShopEdit = "UPDATE shop_item SET pName = ? pColor = ? pSize = ? pPrize = ? pAmount = ? WHERE pId = ?";

    db.query(sqlShopEdit, [productName, productColor, productSize, productPrize, productAmount, productId],
        (err, result) => {
            if (err) console.log(err);
        });
})


// -----shop end-----