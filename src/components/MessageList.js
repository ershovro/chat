import React from 'react';

const MessageList = ({list = []}) => {
   return (
      <ul>
         {
            list.map((message) => <li key={message.id}>{message.text}</li>)
         }
      </ul>
   );
};


export  default MessageList;