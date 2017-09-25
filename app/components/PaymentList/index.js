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
  const userItems = props.payments.map((payment, key) =>
    <TableRow key={key}>
      <TableRowColumn>{payment.merchant_name}</TableRowColumn>
      <TableRowColumn>{payment.category}</TableRowColumn>
      <TableRowColumn>{payment.description}</TableRowColumn>
      <TableRowColumn>{payment.amount}</TableRowColumn>
      <TableRowColumn>{payment.currency}</TableRowColumn>
      <TableRowColumn>{payment.status}</TableRowColumn>
    </TableRow>
  );

  return (
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Merchant</TableHeaderColumn>
          <TableHeaderColumn>Category</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
          <TableHeaderColumn>Currency</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {userItems}
      </TableBody>
    </Table>

  )
};

export default PaymentList;
