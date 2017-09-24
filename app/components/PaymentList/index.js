import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const demo_payments = [{
  "id": "pay_jDkH4tWV5BA2uMHM",
  "created_at": 1453970215,
  "livemode": true,
  "demo": null,
  "amount": "200.0",
  "currency": "hkd",
  "description": "test_1",
  "merchant_name": "123",
  "category": "shopping",
  "refunded": false,
  "account_balance": "2361.0",
  "request_longitude": "114.1667",
  "request_latitude": "22.25",
  "request_address": "Hong Kong",
  "network_type": "wifi",
  "network_ip": "127.1.0.0",
  "network_operator": "Smartone",
  "wireless_access_point": "MyWifi",
  "status": "succeeded"
}, {
  "id": "pay_jDkH4tWV5BA2uMHM",
  "created_at": 1453970215,
  "livemode": true,
  "demo": null,
  "amount": "200.0",
  "currency": "hkd",
  "description": "test_1",
  "merchant_name": "123",
  "category": "shopping",
  "refunded": false,
  "account_balance": "2361.0",
  "request_longitude": "114.1667",
  "request_latitude": "22.25",
  "request_address": "Hong Kong",
  "network_type": "wifi",
  "network_ip": "127.1.0.0",
  "network_operator": "Smartone",
  "wireless_access_point": "MyWifi",
  "status": "succeeded"
}, {
  "id": "pay_jDkH4tWV5BA2uMHM",
  "created_at": 1453970215,
  "livemode": true,
  "demo": null,
  "amount": "200.0",
  "currency": "hkd",
  "description": "test_1",
  "merchant_name": "123",
  "category": "shopping",
  "refunded": false,
  "account_balance": "2361.0",
  "request_longitude": "114.1667",
  "request_latitude": "22.25",
  "request_address": "Hong Kong",
  "network_type": "wifi",
  "network_ip": "127.1.0.0",
  "network_operator": "Smartone",
  "wireless_access_point": "MyWifi",
  "status": "succeeded"
}];

const PaymentList = (props) => {
  const userItems = demo_payments.map((payment) =>
    <ListItem
      primaryText={payment.amount + payment.currency}
      secondaryText={payment.merchant_name + " " + payment.description}
      left={<div></div>}
    />
  );

  return (
    <List>
      {userItems}
    </List>
  )
};

export default PaymentList;
