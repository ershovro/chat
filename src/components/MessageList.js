import React from 'react';

const MessageList = ({list = []}) => {
   return (
      <ul>
         {
            list.map((message, index) => <li key={index}>{message}</li>)
         }
      </ul>
   );
};


export  default MessageList;