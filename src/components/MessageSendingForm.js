import React from 'react';


const MessageSendingForm = ({onSubmit = f => f}) => {
   const _textInputRef = React.createRef();

   const _onSubmitHandler = (event) => {
      event.preventDefault();
      onSubmit(_textInputRef.current.value);
      _textInputRef.current.value = '';
      _textInputRef.current.focus();
   };

   return (
      <form onSubmit={_onSubmitHandler} className="form">
         <input
            ref={_textInputRef}
            type="text"
            required/>
         <input
            type="submit"
            value="Отправить"/>
      </form>
   );
};

export default MessageSendingForm;