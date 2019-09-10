import BillingAddress from './BillingAddress';
import PaymentMethod from './PaymentMethods';
import OrderDetails from './OrderDetails';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const OrderDetail = ({theAddress, theMethod, theDetail}) => {
    return (
          <div class="row">
            <div class="column">{BillingAddress({theAddress})}</div>
            <div class="column">{PaymentMethod({theMethod})}</div>
            <div class="column">{OrderDetail({theDetail})}</div>
          </div>
    );
};

export default OrderDetail;