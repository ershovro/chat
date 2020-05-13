import React from 'react';
import MessageSendingForm from "./MessageSendingForm";
import MessageList from "./MessageList";

const App = () => {

   return (
      <div className="app">
         <h1>Добро пожаловать в чат</h1>
         <MessageSendingForm />
         <MessageList />
      </div>
   );
};

export default App;