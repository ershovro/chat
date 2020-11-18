import React from 'react';
import MessageSendingForm from "./MessageSendingForm";
import MessageList from "./MessageList";

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         list: [],
         error: ''
      };

      this.publishMessage = this.publishMessage.bind(this);
      //this.subscribe = this.subscribe.bind(this);
   }

   publishMessage(text) {
      fetch('/api/publish', {
         method: 'POST',
         body: text
      });
   }

   subscribe() {
       fetch(`/api/subscribe/${ Math.random() }`).
          then( res => {
             if (res.status === 502) {
                this.subscribe();
             } else if (res.status !== 200) {
                this.setState({
                   error: res.statusText
                });
                setTimeout( () => {this.subscribe();}, 1000);
             } else {
                return res.text();
             }
          }).
          then( message => {
             this.setState({
                list: [...this.state.list, message],
                error: ''
             });
             this.subscribe();
          }).
          catch( err => {
             console.log(err);
             this.subscribe();
          });
   }

   componentDidMount() {
      this.subscribe();
   }

   render() {
      const {list, error} = this.state;

      return (
         <div className="app">
            <h1>Добро пожаловать в чат</h1>
            <MessageSendingForm onSubmit={this.publishMessage}/>
            {  error
                  ? <span className="error">error</span>
                  : <MessageList list={list}/>
            }
         </div>
      );
   }
};

export default App;