import React from 'react';
import MessageSendingForm from "./MessageSendingForm";

const App = () => {

   return (
      <div className="app">
         <h1>Добро пожаловать в чат</h1>
         <MessageSendingForm />
      </div>
   );
};

export default App;