import React, { useState } from "react";
import "./staff.scss";

const Staff = () => {
    const [staffAccount, setStaffAccount] = useState('');
    const [staffPassword, setStaffPassword] = useState('');

    const staffSignIn = (e) => {
        e.preventDefault();
        if (staffAccount !== "" && staffPassword !== "") {
            if (staffAccount === "musicfestivalstaff") {
                console.log(staffAccount);
                if (staffPassword === "musicpassword") {
                    window.location = "/tickets";//你看你要導回哪裡
                } else {
                    alert("密碼錯誤");
                }
            } else {
                alert("帳號錯誤");
            }
        }else if(staffAccount === ""){
            alert("請輸入帳號");
        }else{
            alert("請輸入密碼");
        }

    }



    return (
        <div className={`Staff_container`}>
            <div id={`sign_info`}>
                <div>
                    <h2>管理員登入</h2>
                </div>
                <div>
                    <div>

                        <label htmlFor="staff_account" className={'signin_label'}>帳號</label>
                        <input type="text"
                            name="staff_account"
                            id="staff_account"
                            required
                            onChange={(e) => { setStaffAccount(e.target.value) }} />


                        <label htmlFor="staff_password" className={'signin_label'}>密碼</label>
                        <input
                            type="password"
                            name="staff_password"
                            id="staff_password"
                            required
                            onChange={(e) => { setStaffPassword(e.target.value) }} />


                        <input
                            type="submit"
                            name="submit_info"
                            id="submit_info"
                            value="登入"
                            onClick={staffSignIn} />
                    </div>
                </div>

            </div>


        </div>
    );
};
export default Staff;
