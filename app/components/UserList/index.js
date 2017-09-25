import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

const UserList = (props) => {
  const userItems = props.users.map((user, key)=>
    <ListItem
      primaryText={user.first_name+" "+user.last_name}
      secondaryText={user.email}
      leftAvatar={<Avatar>{user.initials}</Avatar>}
      key={key}
      onClick={()=>{
        props.setActiveUser(user);
      }}
    />
  );

  return (
    <List>
      {userItems}
    </List>
  )
};

export default UserList;
