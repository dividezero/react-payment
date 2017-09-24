import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';



const AccountList = (props) => {
  console.log(props)

  const accountItems = props.accounts.map((account, key) =>
    <ListItem
      primaryText={account.name}
      secondaryText={account.card_number}
      rightAvatar={
        <Avatar backgroundColor={"transparent"} color={"black"}>
          {account.balance}
          </Avatar>
      }
      onClick={()=>{
        props.setActiveAccount(props.accounts[key])
      }}
      key={key}
    />
  );

  return (
    <List>
      {accountItems}
    </List>
  )
};

export default AccountList;
