import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const PaymentList = (props) => {
  console.log(props)
  const userItems = props.payments.map((payment, key) =>
    <TableRow key={key}>
      <TableRowColumn>{payment.merchant_name}</TableRowColumn>
      <TableRowColumn>{payment.description}</TableRowColumn>
      <TableRowColumn>{payment.amount + payment.currency}</TableRowColumn>
    </TableRow>
  );

  return (
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Merchant</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {userItems}
      </TableBody>
    </Table>

  )
};

export default PaymentList;
