import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';



const UserList = (props) => {
  const userItems = props.users.map((user)=>
    <ListItem
      primaryText={user.first_name+" "+user.last_name}
      secondaryText={user.email}
      leftAvatar={<Avatar>{user.initials}</Avatar>}
      rightIcon={<CommunicationChatBubble/>}
    />
  );

  return (
    <List>
      {userItems}
    </List>
  )
};

export default UserList;
