import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    
    <ChatEngine
      height='100vh'
      projectID='5901eca7-eaa9-4a4d-bf8b-6a87950219b0'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed { ...chatAppProps} />}
    />

  );
}

export default App;
