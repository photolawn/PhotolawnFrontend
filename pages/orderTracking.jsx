import React from "react";
import OrderDetail from "../components/orderTracking/orderDetail";

let ORDERDETAIL ={
    theAddress: "Devin Ma 3801 something, SK, CA",
    theMethod: "VISA: xxx0131",
    theDetail: "SF: 290 FAU: 10 TAX:18.9 TOTAL:310.00"
};

const OrderTracking = () => {
    return (
        <React.Fragment>
        <section>
        <h1>OrderTracking</h1>
        <div>
            <OrderDetail theAddress={ORDERDETAIL.theAddress}
                        theMethod={ORDERDETAIL.theMethod}
                        theDetail={ORDERDETAIL.theDetail}/>
        </div>
        </section>
        </React.Fragment>
    );
};

export default OrderTracking;

