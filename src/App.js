import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './templates/pages/Home';
import About from './templates/pages/About';
import Chat from './templates/pages/Chat';
import Message from './templates/pages/Message';
import Contact from './templates/pages/Contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='messages' element={<Message/>}/>
            <Route path='chats' element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
    </div>    
  );
}

export default App;
